import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Images } from "@/constants/Colors";

const SignIn = () => {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
      <View className=" w-full justify-center h-full px-4">
        <Image source={Images.logo} className="w-36 h-10" resizeMode="contain" />
        <Text className=" text-white text-2xl font-semibold font-psemibold mt-4">Log in to Aora</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
