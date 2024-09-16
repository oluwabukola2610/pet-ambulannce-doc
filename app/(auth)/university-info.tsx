import React from "react";
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
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const Clinical = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameOnNIC: "",
      nicNumber: "",
      clinicName: "",
      role: "",
      clinicAddress: "",
    },
  });

  const validate = {
    nameOnNIC: { required: "University name is required" },
    nicNumber: {
      required: "Degree is required",
      pattern: { value: /\d{13}/, message: "NIC number is invalid" },
    },
    clinicName: { required: "Year is required" },
    role: { required: "Role is required" },
    clinicAddress: { required: "Address is required" },
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    router.push("/upload");
  };

  return (
    <View
      style={{ flex: 1 }}
    >
      <Image
        source={image.plainbg}
        className="absolute w-full h-full top-0 left-0"
        resizeMode="cover"
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-6 z-10 w-full flex-1 mt-16">
          <Image source={image.logo} />
          <View className="pt-8 flex-1">
            <Text className="text-2xl font-medium text-general">
              Medical College Degree
            </Text>

            {/* University Name Input */}
            <Controller
              control={control}
              name="nameOnNIC"
              rules={validate.nameOnNIC}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="University Name"
                  placeholder="Enter your university name"
                  value={value}
                  handlechange={onChange}
                  error={errors.nameOnNIC?.message}
                />
              )}
            />

            {/* Degree Input */}
            <Controller
              control={control}
              name="nicNumber"
              rules={validate.nicNumber}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Degree"
                  placeholder="Enter your degree"
                  value={value}
                  handlechange={onChange}
                  error={errors.nicNumber?.message}
                />
              )}
            />

            {/* Year Input */}
            <Controller
              control={control}
              name="clinicName"
              rules={validate.clinicName}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Year"
                  placeholder="Enter the year"
                  value={value}
                  handlechange={onChange}
                  error={errors.clinicName?.message}
                />
              )}
            />

            {/* Role Input */}
            <Controller
              control={control}
              name="role"
              rules={validate.role}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Role"
                  placeholder="Enter your role"
                  value={value}
                  handlechange={onChange}
                  error={errors.role?.message}
                />
              )}
            />

            {/* Address Input */}
            <Controller
              control={control}
              name="clinicAddress"
              rules={validate.clinicAddress}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Address"
                  placeholder="Enter your address"
                  value={value}
                  handlechange={onChange}
                  error={errors.clinicAddress?.message}
                />
              )}
            />
          </View>

          {/* Button at the bottom */}
          <View className="flex justify-end">
            <CustomButton
          title="Continue to KYC"
          handlePress={handleSubmit(onSubmit)}
              containerStyles="bg-[#008543] mt-8 mb-10"
              textStyles="text-white"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Clinical;
