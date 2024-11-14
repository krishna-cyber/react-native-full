import { View, Text, TextInput } from "react-native";
import React, { ReactEventHandler } from "react";

type Props = {
  title: string;
  value: string;
  handleChangeText: (e: ReactEventHandler) => void;
  otherStyles?: string;
  keyboardType?: string;
};

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}: Props) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className=" text-base text-green-100 font-psemibold">{title}</Text>
      <View className=" w-full h-16 bg-black-100 border-black-200 border-2 rounded-2xl items-center focus:border-red-900">
        <TextInput
          className=" flex-1 text-white font-psemibold text-base w-full h-full self-center focus:border-secondary border-2 rounded-2xl"
          value={value}
          placeholder={`Enter your ${title}`}
          placeholderTextColor={`#7b7b8b`}
          onChangeText={handleChangeText}
          secureTextEntry={title === "password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;
