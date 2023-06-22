import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Favorites from '../screens/Favorites'

const Tab = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})