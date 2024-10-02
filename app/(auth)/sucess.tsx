import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { image } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

export default function Success() {
  return (
    <View className="flex-1 relative">
      <Image
        source={image.plainbg}
        className="absolute inset-0 w-full h-full"
      />
      <View className="p-6 z-10 absolute top-16 w-full h-full">
        <Image source={image.logo} className="mb-8" />

        <View className="flex-1 mt-20 items-center">
          <Image source={image.sucess} className="mb-6" />
          <Text className="text-3xl font-normal text-general mb-4">
            Great!
          </Text>
          <Text className="text-center mb-4">
            You have successfully created your doctor account on MedCure. Now,
            complete your KYC to start attending patients.
          </Text>
        </View>
      </View>
      
      {/* Continue Button */}
      <View className="p-6 absolute bottom-9 left-0 right-0" style={{ zIndex: 10 }}>
        <CustomButton
          title="Continue to KYC"
          handlePress={() => router.push("/(auth)/kyc")}
          containerStyles="bg-green-600"
          textStyles="text-white"
        />
        <View className="flex-row items-center mt-4 justify-center gap-x-2">
          <Text className="text-sm font-normal text-green-600">
            What is KYC and why we do this.
          </Text>
          <Link href="/" className="text-sm font-normal text-[#C02286]">
            Learn More
          </Link>
        </View>
      </View>
    </View>
  );
}
