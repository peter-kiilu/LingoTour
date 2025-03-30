import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4A90E2' }}>LingoTour</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="virtual-tours"
        options={{
          title: 'Virtual Tours',
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe" size={24} color={color} />
          ),
          headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4A90E2' }}>LingoTour</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="destinations"
        options={{
          title: 'Destinations',
          tabBarIcon: ({ color }) => (
            <Ionicons name="map" size={24} color={color} />
          ),
          headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4A90E2' }}>LingoTour</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
          headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4A90E2' }}>LingoTour</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}