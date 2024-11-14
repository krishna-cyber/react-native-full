import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { ReactEventHandler, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Images } from "@/constants/Colors";
import FormField from "@/components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" w-full justify-center h-full px-4">
          <Image
            source={Images.logo}
            className="w-36 h-10"
            resizeMode="contain"
          />
          <Text className=" text-white text-2xl font-semibold font-psemibold mt-4">
            Log in to Aora
          </Text>

          <FormField
            title="email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />
          <FormField
            title="email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          {title === "password" && (
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            ></TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
