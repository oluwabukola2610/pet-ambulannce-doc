import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { image } from "@/constants";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const CreatePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      password2: "",
    },
  });

  const validate = {
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters long",
      },
    },
  };

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    router.push("/sucess")
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 relative">
        <Image
          source={image.plainbg}
          className="absolute inset-0 w-full h-full"
        />
        <View className="p-6 z-10 absolute mt-16 w-full">
          <Image source={image.logo} />

          <View className="mt-10 flex-1">
            <Text className="text-2xl font-normal text-general">
              Create a password
            </Text>
            {/* Password Input */}
            <Controller
              control={control}
              name="password"
              rules={validate.password}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Password"
                  placeholder="Enter your password"
                  value={value}
                  handlechange={onChange}
                  error={errors.password?.message}
                />
              )}
            />
            {/* Password Input */}
            <Controller
              control={control}
              name="password2"
              rules={validate.password}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Confirm Password"
                  placeholder="Enter your password"
                  value={value}
                  handlechange={onChange}
                  error={errors.password?.message}
                />
              )}
            />
          </View>
        </View>
        {/* Submit Button */}
        <View className="p-6 absolute bottom-9 left-0 right-0">
          <CustomButton
            title="Create Password"
            handlePress={handleSubmit(onSubmit)}
            containerStyles="bg-[#008543]"
            textStyles="text-white"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePassword;
