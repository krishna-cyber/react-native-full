import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{height:'100%'}}>
    <View className=" flex justify-center items-center h-screen">
      <Text className=" text-red-500 font-PoppinsBold text-lg font-medium border-blue-500 border-dashed border-4 mt-4 p-4 w-fit ">
        Index
      </Text>
      <StatusBar style="auto" />
      <Link
        href="/profile"
        style={{ color: "blue", backgroundColor: "red" }}
        className=" font-PoppinsBlack"
      >
        Go to profile
      </Link>
      <Link
        href="/(tabs)/home"
        style={{ color: "blue", backgroundColor: "red" }}
        className=" font-PoppinsBlack"
      >
        Go to Home
      </Link>
      <Link
        href="/(tabs)/create"
        style={{ color: "blue", backgroundColor: "red" }}
        className=" font-PoppinsBlack"
      >
        Go to create
      </Link>
    </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
