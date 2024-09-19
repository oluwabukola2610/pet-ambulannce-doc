import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Personalstore = () => {
  const [file, setFile] = useState("");

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera 
                   roll permission to upload images.`
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setFile(result.assets[0].uri);
      }
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <View className="flex-row items-center gap-x-12 p-4 my-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-center ">
          Add Product
        </Text>
      </View>

      <View className="bg-white p-4 rounded-lg shadow-md">
        {/* Product Name */}
        <View className="mb-4">
          <Text className="text-lg font-semibold mb-2">Product Name</Text>
          <TextInput
            style={{
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 7,
              padding: 12,
              fontSize: 16,
            }}
            placeholder="Enter product name"
          />
        </View>

        {/* Number of Available Products */}
        <View className="mb-4">
          <Text className="text-lg font-semibold mb-2">
            Number of Available Products
          </Text>
          <TextInput
            style={{
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 9,
              padding: 12,
              fontSize: 16,
            }}
            placeholder="Enter number of products"
            keyboardType="numeric"
          />
        </View>

        {/* Product Details */}
        <View className="mb-4">
          <Text className="text-lg font-semibold mb-2">Product Details</Text>
          <TextInput
            style={{
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 9,
              padding: 12,
              fontSize: 16,
              height: 100,
              textAlignVertical: "top",
            }}
            placeholder="Enter product details"
            multiline
            numberOfLines={4}
          />
        </View>

        <View className="border rounded-lg flex items-center justify-center border-gray-300 h-[200px] w-full mt-6">
          {file ? (
            <Image
              source={{ uri: file }}
              className="!w-full h-full"
              resizeMode="contain"
            />
          ) : (
            <Text className="text-center text-gray-400 text-lg">
              No Image Selected
            </Text>
          )}
        </View>
      </View>
      {/* Add Product Button */}
      <TouchableOpacity
        className="bg-[#008543] p-3 rounded-lg mx-4 mt-6"
        onPress={() => alert("Product added")}
      >
        <Text className="text-white text-center text-lg">Add Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Personalstore;
