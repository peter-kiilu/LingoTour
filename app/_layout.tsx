import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const theme = {
    backgroundColor: isDarkMode ? "#121212" : "#F5F5F5",
    textColor: isDarkMode ? "#FFFFFF" : "#333333",
    tabBarBackground: isDarkMode ? "#1E1E1E" : "#FFFFFF",
    tabBarActiveTint: isDarkMode ? "#64B5F6" : "#4A90E2",
    tabBarInactiveTint: isDarkMode ? "#757575" : "#B0B0B0",
    borderColor: isDarkMode ? "#333333" : "#DDDDDD",
  };

  const HeaderTitle = () => (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "bold",
        color: theme.tabBarActiveTint,
        textAlign: "center",
      }}
    >
      LingoTour
    </Text>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tabBarActiveTint,
        tabBarInactiveTintColor: theme.tabBarInactiveTint,
        tabBarStyle: {
          backgroundColor: theme.tabBarBackground,
          borderTopWidth: 0,
          elevation: 0, // Removes shadow on Android
          paddingBottom: 5,
          height: 60,
        },
        headerStyle: {
          backgroundColor: theme.tabBarBackground,
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
