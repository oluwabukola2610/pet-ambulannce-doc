import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker"; // For selecting image
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      contact: "",
    },
  });

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <SafeAreaView className="flex-1 w-full bg-white">
      <View className="flex-1 mt-4 px-6 py-4">
        <View className="flex flex-row items-center gap-x-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="p-2 bg-[#008543] rounded-md "
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-2xl font-normal text-general">
            Account Settings
          </Text>
        </View>

        <View className="items-center mb-6 mt-6 relative">
          <TouchableOpacity onPress={pickImage} className="relative">
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <View className="w-24 h-24 rounded-full bg-gray-300 items-center justify-center">
                <Ionicons name="camera-outline" size={25} />
              </View>
            )}
            <View className="absolute right-0 bottom-0 bg-[#008543] p-2 rounded-full">
              <Ionicons name="pencil" size={16} color="white" />
            </View>
          </TouchableOpacity>
          <View className="flex-row items-center mt-6 bg-[#E0F7E9] p-2 rounded-lg">
            <Ionicons name="checkmark-circle" size={20} color="#008543" />
            <Text className="ml-2 text-[#008543] font-medium">
              You passed the KYC
            </Text>
          </View>
        </View>

        <View>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                title="Name"
                placeholder="Enter your name"
                value={value}
                handlechange={onChange}
                error={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                title="Email"
                placeholder="Enter your email"
                value={value}
                handlechange={onChange}
                error={errors.email?.message}
              />
            )}
          />

          {/* Contact Input */}
          <Controller
            control={control}
            name="contact"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                title="Contact Number"
                placeholder="Enter your contact number"
                value={value}
                handlechange={onChange}
                error={errors.contact?.message}
              />
            )}
          />
        </View>

        <View className="p-6 absolute bottom-9 left-0 right-0">
          <CustomButton
            title="Update Account"
            handlePress={handleSubmit(onSubmit)}
            containerStyles="bg-[#008543]"
            textStyles="text-white"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
