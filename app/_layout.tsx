import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function Layout() {
  const HeaderTitle = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#4A90E2" }}>Lingo</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FF9500" }}>Tour</Text>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4A90E2",
        tabBarInactiveTintColor: "#B0B0B0",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 5,
          height: 60,
        },
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerTitle: HeaderTitle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="virtual-tours"
        options={{
          title: "Virtual Tours",
          tabBarIcon: ({ color }) => <Ionicons name="globe" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="destinations"
        options={{
          title: "Destinations",
          tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}