import React from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface CustomSelectProps {
  title: string;
  value: string | null;
  onchange: (value: any) => void;
  data: { label: string; value: string }[];
  error?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  title,
  value,
  onchange,
  data,
  error,
}) => {
  return (
    <View className="relative mt-8">
      <View className="absolute top-[-8px] left-2 px-1 z-10 bg-white">
        <Text className={` text-black `}>{title}</Text>
      </View>
      <View
        className={`h-14 rounded-xl w-full border border-black/50 flex items-center justify-between flex-row`}
      >
        <Dropdown
          style={{
            height: 48,
            paddingHorizontal: 12,
            justifyContent: 'center',
            width: '100%',
          }}
          placeholderStyle={{ color: '#A7A9AD' }}
          selectedTextStyle={{ color: '#000' }}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={`Select ${title.toLowerCase()}`}
          value={value}
          onChange={(item) => {
            onchange(item.value);
          }}
        />
      </View>
      {error && (
        <Text className="font-medium text-sm text-red-600 pt-2">{error}</Text>
      )}
    </View>
  );
};

export default CustomSelect;
