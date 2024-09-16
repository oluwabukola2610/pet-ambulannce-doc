import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { image } from "@/constants";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import CustomSelect from "@/components/CustomSelect";
import { router } from "expo-router";

const CreateAccount = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      address: "",
      specialization: "",
      tenure: "",
      dateOfBirth: "",
    },
  });

  const validate = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required",
      pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" },
    },
    contact: { required: "Contact number is required" },
    address: { required: "Address is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters long",
      },
    },
    specialization: { required: "Specialization is required" },
    tenure: { required: "Practicing tenure is required" },
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    router.push("/upload");
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setValue("dateOfBirth", moment(currentDate).format("DD-MM-YYYY"));
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
        <View className="p-6 mt-14 w-full">
          <Image source={image.logo} />
          <View className="pt-8 flex-1">
            <Text className="text-2xl font-medium text-general">
              Create Account
            </Text>

            {/* Name Input */}
            <Controller
              control={control}
              name="name"
              rules={validate.name}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Name"
                  placeholder="Enter your name"
                  value={value}
                  handlechange={onChange}
                  error={errors.name?.message}
                />
              )}
            />

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

            {/* Contact Input */}
            <Controller
              control={control}
              name="contact"
              rules={validate.contact}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Contact Number"
                  placeholder="Enter your contact number"
                  value={value}
                  handlechange={onChange}
                  error={errors.contact?.message}
                />
              )}
            />

            {/* Address Input */}
            <Controller
              control={control}
              name="address"
              rules={validate.address}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Address"
                  placeholder="Enter your address"
                  value={value}
                  handlechange={onChange}
                  error={errors.address?.message}
                />
              )}
            />

            {/* Specialization Picker */}
            <Controller
              name="specialization"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  title="Specialization"
                  value={getValues("specialization")}
                  onchange={(val) => setValue("specialization", val)}
                  data={[
                    { label: "Option 1", value: "Option1" },
                    { label: "Option 2", value: "Option2" },
                    { label: "Option 3", value: "Option3" },
                  ]}
                />
              )}
            />

            {/* Practicing Tenure Picker */}
            <Controller
              name="tenure"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  title="Practicing Tenure"
                  value={getValues("tenure")}
                  onchange={(val) => setValue("tenure", val)}
                  data={[
                    { label: "1-3 years", value: "1-3" },
                    { label: "4-6 years", value: "4-6" },
                    { label: "7+ years", value: "7+" },
                  ]}
                />
              )}
            />

            {/* Date of Birth Picker */}
            <TouchableOpacity onPress={() => setShow(true)}>
              <CustomInput
                title="Date of Birth"
                value={getValues("dateOfBirth")}
                handlechange={() => {}}
                error={errors.dateOfBirth?.message}
              />
            </TouchableOpacity>

            {show && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}

            <CustomButton
              title="Create Account"
              handlePress={handleSubmit(onSubmit)}
              containerStyles="bg-[#008543] mt-3 mb-10"
              textStyles="text-white"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateAccount;
