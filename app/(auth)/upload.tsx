import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { image } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function Upload() {
  const [file, setFile] = useState("");

  // Function to pick an image from
  //the device's media library
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
    <View className="flex-1 relative">
      <Image
        source={image.plainbg}
        className="absolute inset-0 w-full h-full"
      />
      <View className="p-6 z-10 absolute top-16 w-full">
        <Image source={image.logo} />

        <View className="mt-10 flex-1">
          <Text className="text-2xl font-normal text-general">
            Upload your picture
          </Text>

          <View className="border rounded-lg flex items-center justify-center border-gray-300 h-[300px] w-full mt-6">
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
          <View className="flex flex-row items-center justify-between mt-4">
            <View>
              <Text className="mb-1 text-base text-gray-600">
                Upload Profile Picture
              </Text>
              <Text className="text-sm text-gray-400">(Max 5MB)</Text>
            </View>
            <TouchableOpacity
              onPress={pickImage}
              className="bg-general text-white rounded-lg mt-4 self-start px-4 py-2 "
            >
              <Text className="text-lg  text-white">+ </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Save Button */}
      <View className="p-6 absolute bottom-9 left-0 right-0">
        <CustomButton
          title="Save Picture"
          handlePress={() => router.push("/create-password")}
          containerStyles="bg-green-600"
          textStyles="text-white"
        />
      </View>
    </View>
  );
}
