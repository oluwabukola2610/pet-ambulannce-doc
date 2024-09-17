import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "green",
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          borderRadius: 25,
          height: 60,
          paddingBottom: 10,
          paddingHorizontal:10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                size={25}
                color={focused ? "white" : "lightgray"}
              />
              {focused && (
                <Text
                  style={{
                    color: "white",
                    marginLeft: 5,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Dashboard
                </Text>
              )}
            </View>
          ),
        }}
      />

      {/* History Screen */}
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "albums" : "albums-outline"}
                size={30}
                color={focused ? "white" : "lightgray"}
              />
              {focused && (
                <Text
                  style={{
                    color: "white",
                    marginLeft: 5,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  History
                </Text>
              )}
            </View>
          ),
        }}
      />

      {/* Setting Screen */}
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "menu" : "menu-outline"}
                size={30}
                color={focused ? "white" : "lightgray"}
              />
              {focused && (
                <Text
                  style={{
                    color: "white",
                    marginLeft: 5,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Profile
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
