import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import { image } from "@/constants";
import { router } from "expo-router";

const Dashboard = () => {
  const screenWidth = Dimensions.get("window").width;

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [30, 45, 28, 50, 60, 40, 35],
        color: (opacity = 1) => `rgba(2, 133, 67, ${opacity})`,
      },
    ],
  };

  return (
    <View className="flex-1">
      <View className="bg-[#028543] h-[300px] px-6 flex-row items-center justify-between">
   
        <View className="">
          <Text className="text-2xl font-medium text-white leading-9">
            Hey, Dr. Harbor!
          </Text>
          <Text className="text-lg text-white">Today is a busy day</Text>
        </View>
        <TouchableOpacity className="rounded-lg p-3 bg-white">
          <Ionicons name="notifications-outline" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* Main Dashboard Content */}
      <View className="rounded-t-[25px] bg-white py-6 px-4 -mt-8 flex-1">
        <View className="items-center">
          <Text className="text-xl font-medium text-[#18273B]">
            Patients Visits
          </Text>
          <Text className="text-[#838A93]">This Week</Text>
        </View>

        {/* Bar Chart Section */}
        <BarChart
          data={chartData}
          width={screenWidth - 32}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: "#FFFFFF",
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(2, 133, 67, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForBackgroundLines: {
              strokeDasharray: "5",
              stroke: "#E3E3E3",
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <View className="flex flex-row gap-x-5">
          <Text className="text-lg font-semibold text-[#18273B] mb-2">
            Create a personalized store
          </Text>
          <TouchableOpacity onPress={()=>router.push("/Personalstore")} className="bg-[#C02286] text-white p-2 rounded-lg w-[100px]">
            <Text className="text-white text-sm">Click here +</Text>
          </TouchableOpacity>
        </View>
        {/* Article Card Section */}
        <View className="flex-row bg-[#028543] p-4 rounded-lg items-center justify-between mt-6">
          <View className="flex-1">
            <Text className="text-sm text-gray-300 mb-4">
              Customize your store to match your brand and reach more customers.
            </Text>
            <TouchableOpacity className="bg-[#C02286] text-white p-2 rounded-lg w-[120px]">
              <Text className="text-white text-sm">Read about us</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={image.dog}
            className="rounded-lg"
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
