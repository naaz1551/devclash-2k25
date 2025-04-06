import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const emergencyContacts = [
  {
    id: '1',
    name: 'Police Emergency',
    number: '911',
    icon: 'local-police',
  },
  {
    id: '2',
    name: 'Fire Emergency',
    number: '911',
    icon: 'local-fire-department',
  },
  {
    id: '3',
    name: 'Ambulance Service',
    number: '911',
    icon: 'medical-services',
  },
];

const ambulanceServices = [
  {
    id: '1',
    name: 'City Ambulance Service',
    number: '+1234567890',
    available: true,
  },
  {
    id: '2',
    name: 'Emergency Medical Response',
    number: '+1234567891',
    available: true,
  },
  {
    id: '3',
    name: 'Life Support Ambulance',
    number: '+1234567892',
    available: false,
  },
];

export default function ResponderHomeScreen() {
  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Contacts</Text>
          {emergencyContacts.map((contact) => (
            <TouchableOpacity
              key={contact.id}
              style={styles.contactCard}
              onPress={() => handleCall(contact.number)}
            >
              <View style={styles.contactInfo}>
                <MaterialIcons name={contact.icon} size={24} color="#FF4444" />
                <Text style={styles.contactName}>{contact.name}</Text>
              </View>
              <View style={styles.callButton}>
                <MaterialIcons name="phone" size={20} color="#fff" />
                <Text style={styles.callButtonText}>{contact.number}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ambulance Services</Text>
          {ambulanceServices.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceCard, !service.available && styles.serviceUnavailable]}
              onPress={() => service.available && handleCall(service.number)}
              disabled={!service.available}
            >
              <View style={styles.serviceInfo}>
                <MaterialIcons name="local-taxi" size={24} color={service.available ? "#4CAF50" : "#999"} />
                <View style={styles.serviceDetails}>
                  <Text style={[styles.serviceName, !service.available && styles.textUnavailable]}>
                    {service.name}
                  </Text>
                  <Text style={[styles.serviceNumber, !service.available && styles.textUnavailable]}>
                    {service.number}
                  </Text>
                </View>
              </View>
              <View style={[styles.statusBadge, !service.available && styles.statusUnavailable]}>
                <Text style={styles.statusText}>
                  {service.available ? 'Available' : 'Busy'}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  callButton: {
    backgroundColor: '#FF4444',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  callButtonText: {
    color: '#fff',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceUnavailable: {
    opacity: 0.7,
  },
  serviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  serviceDetails: {
    marginLeft: 12,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '500',
  },
  serviceNumber: {
    color: '#666',
    marginTop: 4,
  },
  textUnavailable: {
    color: '#999',
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusUnavailable: {
    backgroundColor: '#999',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});