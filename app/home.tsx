import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { image } from "@/constants";
import { router } from "expo-router";

const Home = () => {
  return (
    <View className="h-screen flex-1 ">
      <Image source={image.bg} className=" w-full h-full" />
      <View className=" p-4 z-10 absolute mt-16">
        <Image source={image.logo} />
        <View className="mt-6">
          <Text className="text-4xl font-bold text-general">
            Treat more patients, {"\n"}generate more sales remotely!
          </Text>
          <TouchableOpacity onPress={()=>router.push("/login")} className="bg-general text-white rounded-lg mt-4 self-start px-4 py-2 ">
            <Text className="text-lg  text-white">+ Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
