import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
  <Tabs 
    screenOptions={{ 
        headerShown: false ,
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#000",
    }}>
    <Tabs.Screen name="index" options=
    {{ 
        title: "Home",
        tabBarIcon: () => (
            <Ionicons name="home" size={24} />
        ), 
    }} />
  
    <Tabs.Screen name="about" options=
    {{ 
        title: "about",
        tabBarIcon: () => (
            <Ionicons name="bar-chart" size={24} />
        ),
    }} />

  </Tabs>
  );
}
