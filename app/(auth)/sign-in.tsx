import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <View>
        <Text className=" text-white">SignIn</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
