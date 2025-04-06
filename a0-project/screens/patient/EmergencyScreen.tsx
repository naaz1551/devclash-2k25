import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Platform } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toast } from 'sonner-native';

export default function EmergencyScreen() {
  const [location, setLocation] = useState(null);
  const [isEmergency, setIsEmergency] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        toast.error('Location permission is required');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleEmergency = async () => {
    if (!location) {
      toast.error('Waiting for location...');
      return;
    }

    setIsEmergency(true);
    // Simulate sending emergency
    toast.message('Emergency alert sent!', {
      description: 'Help is on the way'
    });

    // In real app, this would call your backend
    setTimeout(() => {
      toast.success('Responder found!', {
        description: 'ETA: 5 minutes'
      });
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={[styles.emergencyButton, isEmergency && styles.emergencyActive]}
          onPress={handleEmergency}
        >
          <MaterialIcons 
            name="emergency" 
            size={50} 
            color={isEmergency ? '#FFF' : '#FF0000'} 
          />
          <Text style={[styles.buttonText, isEmergency && styles.buttonTextActive]}>
            {isEmergency ? 'HELP ON THE WAY' : 'SEND HELP'}
          </Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Tap the emergency button to:
          </Text>
          <Text style={styles.infoItem}>• Alert nearby emergency responders</Text>
          <Text style={styles.infoItem}>• Share your location</Text>
          <Text style={styles.infoItem}>• Send medical information</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emergencyButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#FF0000',
  },
  emergencyActive: {
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
    transform: [{ scale: 0.95 }],
  },
  buttonText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  buttonTextActive: {
    color: '#FFF',
  },
  infoContainer: {
    marginTop: 40,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoItem: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
});