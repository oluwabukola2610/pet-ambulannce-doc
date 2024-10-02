import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { image } from "@/constants";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const KYC = () => {
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
    nameOnNIC: { required: "Name on NIC is required" },
    nicNumber: {
      required: "NIC number is required",
      pattern: { value: /\d{13}/, message: "NIC number is invalid" },
    },
    clinicName: { required: "Clinic name is required" },
    role: { required: "Role is required" },
    clinicAddress: { required: "Clinic address is required" },
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    router.push("/university-info");
  };

  return (
    <View
      style={{ flex: 1, position: "relative" }}
    >
      <Image
        source={image.plainbg}
        className="absolute bg-red-800 w-full h-full top-0 left-0"
        resizeMode="cover"
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-6 z-10 absolute mt-14 w-full h-full">
          <Image source={image.logo} />
          <View className="pt-8 flex-1">
            <Text className="text-2xl font-medium text-general">
              National ID Card
            </Text>

            {/* Name on NIC Input */}
            <Controller
              control={control}
              name="nameOnNIC"
              rules={validate.nameOnNIC}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Name on NIC"
                  placeholder="Enter your name"
                  value={value}
                  handlechange={onChange}
                  error={errors.nameOnNIC?.message}
                />
              )}
            />

            {/* NIC Number Input */}
            <Controller
              control={control}
              name="nicNumber"
              rules={validate.nicNumber}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="NIC Number"
                  placeholder="Enter your NIC number"
                  value={value}
                  handlechange={onChange}
                  error={errors.nicNumber?.message}
                />
              )}
            />

            {/* Clinic Name Input */}
            <Controller
              control={control}
              name="clinicName"
              rules={validate.clinicName}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Clinic Name"
                  placeholder="Enter your clinic name"
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

            {/* Clinic Address Input */}
            <Controller
              control={control}
              name="clinicAddress"
              rules={validate.clinicAddress}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Clinic Address"
                  placeholder="Enter your clinic address"
                  value={value}
                  handlechange={onChange}
                  error={errors.clinicAddress?.message}
                />
              )}
            />
            {/* <View className="flex justify-end">
              <CustomButton
                title="Continue"
                handlePress={handleSubmit(onSubmit)}
                containerStyles="bg-[#008543] mt-8 mb-10"
                textStyles="text-white"
              />
            </View> */}
          </View>
        </View>
        <View className="p-6 absolute bottom-9 left-0 right-0"style={{ zIndex: 10 }}>
          <CustomButton
            title="Continue to KYC"
            handlePress={handleSubmit(onSubmit)}
            containerStyles="bg-green-600"
            textStyles="text-white"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default KYC;
