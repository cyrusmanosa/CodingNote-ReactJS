import { Tabs } from 'expo-router'
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      // set action color
      tabBarActiveTintColor: Colors.PrimeColor
    }}>

      <Tabs.Screen name='home' options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
      }} />
      <Tabs.Screen name='explore' options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />
      }} />
      <Tabs.Screen name='profile' options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="face-man-profile" size={24} color={color} />
      }} />
    </Tabs >
  )
} 