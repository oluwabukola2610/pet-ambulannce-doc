import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Settings = () => {
  const profileImage = "https://via.placeholder.com/150";

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            console.log("User logged out");
            router.push("/");
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView className="flex-1 w-full bg-white">
      <View
        className="items-center p-4"
        style={{
          marginTop: Platform.OS === "android" ? 60 : 20,
        }}
      >
        <Image
          source={{ uri: profileImage }}
          className="w-[100px] h-[100px] rounded-full"
        />
        <Text className="text-xl font-bold mt-4">Alicent Hightower</Text>
      </View>

      <View className="mt-5">
        {/* Account Settings */}
        <TouchableOpacity
          onPress={() => router.push("/account")}
          className="flex-row justify-between items-center p-4 border-gray-300"
        >
          <View className="flex-row items-center">
            <View className="bg-[#FCE4F7] p-3 rounded-full">
              <Ionicons
                name="person-circle-outline"
                size={24}
                color="#C02286"
              />
            </View>
            <Text className="ml-4 text-lg">Account Settings</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="gray" />
        </TouchableOpacity>

        {/* Change Password */}
        <TouchableOpacity
          onPress={() => router.push("/edit-password")}
          className="flex-row justify-between items-center p-4 border-gray-300"
        >
          <View className="flex-row items-center">
            <View className="bg-[#FCE4F7] p-3 rounded-full">
              <Ionicons name="lock-closed-outline" size={24} color="#C02286" />
            </View>
            <Text className="ml-4 text-lg">Change Password</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="gray" />
        </TouchableOpacity>

        {/* Terms and Conditions */}
        <TouchableOpacity
          onPress={() => router.push("/")}
          className="flex-row justify-between items-center p-4 mt-2"
        >
          <View className="flex-row items-center">
            <View className="bg-[#FCE4F7] p-3 rounded-full">
              <Ionicons
                name="document-text-outline"
                size={24}
                color="#C02286"
              />
            </View>
            <Text className="ml-4 text-lg">Terms and Conditions</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="gray" />
        </TouchableOpacity>

        {/* History */}
        <TouchableOpacity
          onPress={() => router.push("/")}
          className="flex-row justify-between items-center p-4 border-gray-300"
        >
          <View className="flex-row items-center">
            <View className="bg-[#FCE4F7] p-3 rounded-full">
              <Ionicons name="time-outline" size={24} color="#C02286" />
            </View>
            <Text className="ml-4 text-lg">History</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="gray" />
        </TouchableOpacity>

        {/* Support */}
        <TouchableOpacity
          onPress={() => router.push("/")}
          className="flex-row justify-between items-center p-4 border-gray-300"
        >
          <View className="flex-row items-center">
            <View className="bg-[#FCE4F7] p-3 rounded-full">
              <Ionicons name="help-circle-outline" size={24} color="#C02286" />
            </View>
            <Text className="ml-4 text-lg">Support</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View className="p-4 mt-4">
        <TouchableOpacity
          onPress={handleLogout}
          className="flex-row justify-center items-center p-4  rounded-lg"
        >
          <Ionicons name="log-out-outline" size={24} color="white" />
          <Text className="ml-2 text-red-500 text-lg font-medium">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
