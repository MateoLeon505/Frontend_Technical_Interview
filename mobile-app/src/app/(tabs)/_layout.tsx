import { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";

const TabsLayout = () => {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 5111);
    return () => {
      clearTimeout(timer);
      setShowHeader(false);
    };
  }, [pathname]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#000000",
          paddingVertical: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Inicio",

          tabBarIcon: ({ focused }) => (
            <Octicons
              name="home"
              size={24}
              color={focused ? "#ffffff" : "#f1f1f1"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Buscar",
          headerShown: showHeader,
          headerStyle: {
            backgroundColor:"#000000",
          },
          headerTintColor: "#ffffff",
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="search"
              size={24}
              color={focused ? "#ffffff" : "#f1f1f1"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
