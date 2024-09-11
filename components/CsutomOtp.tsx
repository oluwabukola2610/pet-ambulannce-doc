import { View, Text } from "react-native";
import React from "react";
import OtpTextInput from "react-native-text-input-otp";
interface CustomOtpProps {
  value: string;
  onChange: (code: string) => void;
  title?: string;
  otherStyles?: string;
  count: number;
  color?: string;  // color for OTP text, default is black (color: "#000")  // color for OTP text, default is black (color: "#000")   // color for OTP text, default is black (color: "#000")   // color for OTP text, default is black (color: "#000")   // color for OTP text, default is black (color: "#000")
}

const CustomOtp: React.FC<CustomOtpProps> = ({
  value,
  onChange,
  title,
  otherStyles,
  count,
  color="#000"
}) => {
  return (

        <View className={`space-y-2 ${otherStyles}`}>
          <Text className="font-semibold text-base ">{title}</Text>
          <View className="w-full">
            <OtpTextInput
              otp={value}
              setOtp={onChange}
              digits={count}
              style={{
                borderRadius: 0,
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                height: 45,
              }}
              fontStyle={{ fontSize: 20, fontWeight: "bold", color: color }}
              focusedStyle={{ borderColor: "#5cb85c", borderBottomWidth: 2 }}
            />
          </View>
        </View>
    
  );
};

export default CustomOtp;
