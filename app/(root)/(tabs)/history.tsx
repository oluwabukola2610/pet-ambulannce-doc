import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";

const appointmentData = [
  {
    id: 1,
    name: "Dr. John Doe",
    role: "General Physician",
    status: "Completed",
    date: "12 Sept 2024",
    time: "10:00 AM",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    role: "Dermatologist",
    status: "Ongoing",
    date: "15 Sept 2024",
    time: "11:00 AM",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    role: "Cardiologist",
    status: "Canceled",
    date: "14 Sept 2024",
    time: "1:00 PM",
    image: "https://via.placeholder.com/150",
  },
];

const History = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredAppointments = appointmentData.filter((appointment) => {
    if (selectedTab === "All") return true;
    return appointment.status === selectedTab;
  });

  const renderAppointment = ({
    item,
  }: {
    item: (typeof appointmentData)[number];
  }) => (
    <View className=" p-4 mb-4 rounded-lg bg-white mt-4 shadow-sm">
      <View className="flex-row items-center mb-4">
        <Image
          source={{ uri: item.image }}
          className="w-16 h-16 rounded-full mr-4"
          resizeMode="cover"
        />
        <View className="flex-1">
          <Text className="text-lg font-semibold">{item.name}</Text>
          <Text className="text-gray-500">{item.role}</Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-gray-600">{item.date}</Text>
        <Text className="text-gray-600">{item.time}</Text>
      </View>
      <View className="flex-row justify-between items-center">
        <Text className="text-gray-500">
          Status: {""}
          <Text
            className={`text-${
              item.status === "Canceled" || item.status === "Outgoing"
                ? "red"
                : "green"
            }-600`}
          >
            {item.status}
          </Text>
        </Text>
        {item.status === "Ongoing" && (
          <TouchableOpacity
            onPress={() => alert("Track appointment")}
            className="bg-[#FE87C2] px-3 py-2 rounded-md"
          >
            <Text className="text-white font-semibold">Track</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <View
        style={{
          marginTop: Platform.OS === "android" ? 60 : 20,
        }}
        className="flex-row items-center gap-x-4 p-4"
      >
        <Text className="text-xl font-medium">Appointment History</Text>
      </View>

      <View className="flex-row gap-x-4 bg-white px-4">
        {["All", "Ongoing", "Completed", "Canceled"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            className={`p-2 ${
              selectedTab === tab ? "px-3 rounded-lg bg-[#FE87C2]" : ""
            }`}
          >
            <Text
              className={`${
                selectedTab === tab ? "text-gray-600" : "text-gray-800"
              } `}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Appointments List */}
      <FlatList
        data={filteredAppointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAppointment}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center">
            <Text>No appointments found for {selectedTab}.</Text>
          </View>
        )}
      />
    </View>
  );
};

export default History;
