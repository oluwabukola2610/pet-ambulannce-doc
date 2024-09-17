import React from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { image } from "@/constants";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const EditPass = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const validate = {
    oldPassword: {
      required: "Old Password is required",
      minLength: {
        value: 6,
        message: "Old Password must be at least 6 characters long",
      },
    },
    newPassword: {
      required: "New Password is required",
      minLength: {
        value: 6,
        message: "New Password must be at least 6 characters long",
      },
    },
  };

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    router.push("/login");
  };

  return (
    <SafeAreaView className="flex-1 w-full bg-white">
      <View className="flex-1 mt-4 px-6 py-4">
        <View className="flex flex-row items-center gap-x-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="p-2 bg-[#008543] rounded-md "
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-2xl font-normal text-general">
            Change Password
          </Text>
        </View>
        <View className="mt-10 flex-1">
          {/* Old Password Input */}
          <Controller
            control={control}
            name="oldPassword"
            rules={validate.oldPassword}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                title="Old Password"
                placeholder="Enter your old password"
                value={value}
                handlechange={onChange}
                error={errors.oldPassword?.message}
              />
            )}
          />

          {/* New Password Input */}
          <Controller
            control={control}
            name="newPassword"
            rules={validate.newPassword}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                title="New Password"
                placeholder="Enter your new password"
                value={value}
                handlechange={onChange}
                error={errors.newPassword?.message}
              />
            )}
          />
        </View>

        {/* Submit Button */}
        <View className="p-6 absolute bottom-9 left-0 right-0">
          <CustomButton
            title="Update Password"
            handlePress={handleSubmit(onSubmit)}
            containerStyles="bg-[#008543]"
            textStyles="text-white"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditPass;
