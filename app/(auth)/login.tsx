import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { image } from "@/constants";
import CustomInput from "@/components/CustomInput";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import CustomButton from "@/components/CustomButton";

const Login = () => {
  const [checked, setChecked] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
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
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters long",
      },
    },
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        source={image.plainbg}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-6 pt-16 w-full flex-1">
          <Image source={image.logo} className="mb-8" />

          <View className="flex-1">
            <Text className="text-2xl font-normal text-general mb-6">Login</Text>

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
            <View className="flex-row items-center mt-7 justify-between">
              <View className="flex-row items-center">
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  color={checked ? "#008543" : "#d9d9d9"}
                  className={`mr-2`}
                />
                <Text>Remember me</Text>
              </View>
              <Link href="/forget-password" className="text-base font-normal text-[#C02286]">
                Forget Password
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Submit Button */}
      <View className="p-6">
        <CustomButton
          title="Login"
          handlePress={handleSubmit(onSubmit)}
          containerStyles="bg-[#008543]"
          textStyles="text-white"
        />
        <View className="flex-row items-center mt-4 justify-center gap-x-2">
          <Text className="text-sm font-normal text-green-600">New here?</Text>
          <Link href="/signup" className="text-sm font-normal text-[#C02286]">
            Create Account
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
