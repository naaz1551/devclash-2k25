import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from 'sonner-native';

import HomeScreen from "./screens/HomeScreen";
import EmergencyScreen from "./screens/patient/EmergencyScreen";
import NearbyHospitalsScreen from "./screens/patient/NearbyHospitalsScreen";
import MedicalInfoScreen from "./screens/patient/MedicalInfoScreen";
import ResponderHomeScreen from "./screens/responder/ResponderHomeScreen";
import LoginScreen from "./screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Emergency" 
          component={EmergencyScreen} 
        />
        <Stack.Screen 
          name="NearbyHospitals" 
          component={NearbyHospitalsScreen} 
        />
        <Stack.Screen 
          name="MedicalInfo" 
          component={MedicalInfoScreen} 
        />
        <Stack.Screen 
          name="ResponderHome" 
          component={ResponderHomeScreen} 
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
        <Toaster />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 