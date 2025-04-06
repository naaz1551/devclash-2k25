import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { toast } from 'sonner-native';

export default function MedicalInfoScreen() {
  const [medicalInfo, setMedicalInfo] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    allergies: '',
    medications: '',
    conditions: '',
    emergency_contact: '',
    emergency_relation: '',
    emergency_phone: '',
    notes: '',
  });

  const handleSave = () => {
    // In a real app, this would save to a backend
    toast.success('Medical information saved successfully!');
  };

  const updateField = (field, value) => {
    setMedicalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.name}
              onChangeText={(text) => updateField('name', text)}
              placeholder="Enter your full name"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.age}
              onChangeText={(text) => updateField('age', text)}
              keyboardType="numeric"
              placeholder="Enter your age"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Blood Group</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.bloodGroup}
              onChangeText={(text) => updateField('bloodGroup', text)}
              placeholder="Enter your blood group"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Allergies</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.allergies}
              onChangeText={(text) => updateField('allergies', text)}
              placeholder="List any allergies"
              multiline
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Current Medications</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.medications}
              onChangeText={(text) => updateField('medications', text)}
              placeholder="List current medications"
              multiline
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Medical Conditions</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.conditions}
              onChangeText={(text) => updateField('conditions', text)}
              placeholder="List any medical conditions"
              multiline
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Contact</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contact Name</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.emergency_contact}
              onChangeText={(text) => updateField('emergency_contact', text)}
              placeholder="Emergency contact name"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Relationship</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.emergency_relation}
              onChangeText={(text) => updateField('emergency_relation', text)}
              placeholder="Relationship to emergency contact"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contact Phone</Text>
            <TextInput
              style={styles.input}
              value={medicalInfo.emergency_phone}
              onChangeText={(text) => updateField('emergency_phone', text)}
              placeholder="Emergency contact phone"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <MaterialIcons name="save" size={24} color="#FFF" />
          <Text style={styles.saveButtonText}>Save Information</Text>
        </TouchableOpacity>
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
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    minHeight: 45,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});