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

const ForgetPass = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const validate = {
    email: {
      required: "Email is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Email is invalid",
      },
    },
  };

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    router.push("/otp");
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
              Reset Password
            </Text>

            {/* Email Input */}
            <Controller
              control={control}
              name="email"
              rules={validate.email}
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
          </View>
        </View>
        {/* Submit Button */}
        <View className="p-6 absolute bottom-9 left-0 right-0">
          <CustomButton
            title="Reset Password"
            handlePress={handleSubmit(onSubmit)}
            containerStyles="bg-[#008543]"
            textStyles="text-white"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgetPass;
