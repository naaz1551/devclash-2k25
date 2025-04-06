import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Toaster } from 'sonner-native';
import HomeScreen from "./screens/HomeScreen"
import EmergencyScreen from "./screens/patient/EmergencyScreen"
import NearbyHospitalsScreen from "./screens/patient/NearbyHospitalsScreen"
import MedicalInfoScreen from "./screens/patient/MedicalInfoScreen"
import ResponderHomeScreen from "./screens/responder/ResponderHomeScreen"
import LoginScreen from "./screens/auth/LoginScreen"

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Emergency" 
        component={EmergencyScreen}
        options={{
          headerShown: true,
          headerTitle: "Emergency",
          headerStyle: {
            backgroundColor: '#FF0000',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen 
        name="NearbyHospitals" 
        component={NearbyHospitalsScreen}
        options={{
          headerTitle: "Nearby Hospitals",
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen 
        name="MedicalInfo" 
        component={MedicalInfoScreen}
        options={{
          headerTitle: "Medical Information",
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen 
        name="ResponderHome" 
        component={ResponderHomeScreen}
        options={{
          headerTitle: "Emergency Contacts",
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});