import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomInputProps {
  title: string;
  handlechange?: (text: string) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholder?: string;

  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  title,
  value,
  handlechange,
  keyboardType,
  placeholder,
  error,
}) => {
  const [showpassword, setShowpassword] = useState(false);

  const isPassword = title === "Password" || title === "Confirm Password";

  return (
    <View className="relative mt-8">
      <View className="absolute top-[-8px] left-2 bg-white px-1 z-10">
        <Text className="text-black">{title}</Text>
      </View>
      <View
        className={` h-14 px-4 border-gray-200 rounded-xl w-full border border-black/50 focus:border-black flex items-center justify-between flex-row`}
      >
        <TextInput
          className="text-base font-normal "
          value={value}
          onChangeText={handlechange}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && !showpassword}
          placeholder={placeholder}
          placeholderTextColor="#A7A9AD"
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
            <Ionicons
              name={showpassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="font-medium text-sm text-red-600 pt-2">{error}</Text>
      )}
    </View>
  );
};

export default CustomInput;
