import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
type Props = {
  title: string;
  handlePress: () => void;
  containerStyle: string;
  isLoading: boolean;
  textStyles: string;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[60px] justify-center items-center ${containerStyle} ${
        isLoading ? `opacity-50` : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
