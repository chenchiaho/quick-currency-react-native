import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/navigation/BottomNav'

export default function App() {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer >
  );
}

