import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toast } from 'sonner-native';

const mockHospitals = [
  {
    id: '1',
    name: 'City General Hospital',
    distance: '0.5 km',
    contact: '+1234567890',
    address: '123 Healthcare St',
    emergency: true,
  },  {
    id: '2',
    name: `St. Mary's Medical Center`,
    distance: '1.2 km',
    contact: '+1234567891',
    address: '456 Medical Ave',
    emergency: true,
  },
  {
    id: '3',
    name: 'Community Health Center',
    distance: '2.0 km',
    contact: '+1234567892',
    address: '789 Wellness Rd',
    emergency: false,
  },
];

export default function NearbyHospitalsScreen() {
  const [hospitals, setHospitals] = useState(mockHospitals);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        toast.error('Location permission is required');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // In a real app, you would fetch nearby hospitals using location
    })();
  }, []);

  const callHospital = (contact) => {
    Linking.openURL(`tel:${contact}`);
  };

  const getDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`);
  };

  const renderHospital = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.hospitalName}>{item.name}</Text>
        {item.emergency && (
          <View style={styles.emergencyBadge}>
            <Text style={styles.emergencyText}>24/7</Text>
          </View>
        )}
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="location-on" size={16} color="#666" />
        <Text style={styles.infoText}>{item.distance}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="home" size={16} color="#666" />
        <Text style={styles.infoText}>{item.address}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.callButton]} 
          onPress={() => callHospital(item.contact)}
        >
          <MaterialIcons name="phone" size={20} color="#fff" />
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.directionsButton]}
          onPress={() => getDirections(item.address)}
        >
          <MaterialIcons name="directions" size={20} color="#fff" />
          <Text style={styles.buttonText}>Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={hospitals}
        renderItem={renderHospital}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  emergencyBadge: {
    backgroundColor: '#FF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  emergencyText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    color: '#666',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    flex: 0.48,
  },
  callButton: {
    backgroundColor: '#4CAF50',
  },
  directionsButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});