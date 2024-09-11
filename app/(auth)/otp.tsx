import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import { image } from "@/constants";
import CustomButton from "@/components/CustomButton";
import CustomOtp from "@/components/CsutomOtp";
import { router } from "expo-router";

const otp = () => {
  const [otp, setOtp] = useState("");
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

            <View className="w-full">
              <CustomOtp
                value={otp}
                onChange={(code: React.SetStateAction<string>) => setOtp(code)}
                otherStyles="w-full mt-6"
                count={4}
              />
            </View>
          </View>
        </View>
        {/* Submit Button */}
        <View className="p-6 absolute bottom-9 left-0 right-0">
          <CustomButton
            title="Reset Password"
            handlePress={()=>router.push("/change-password")}
            containerStyles="bg-[#008543]"
            textStyles="text-white"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default otp;
