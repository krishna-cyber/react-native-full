import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Images } from "@/constants/Colors";

const Index = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" w-full h-[90vh] px-4 justify-center items-center">
          <Image
            source={Images.logo}
            className=" max-w-36 max-h-36"
            resizeMode="contain"
          />
          <Image
            source={Images.cards}
            className=" max-w-[80%] max-h-[30%]"
            resizeMode="contain"
          />
          <View className=" relative mt-5">
            <Text className="text-3xl text-center text-white font-bold">
              Discover endless possibilities with {""}
              <Text className=" text-secondary">Aora</Text>
            </Text>
            <Image
              source={Images.path}
              className="absolute h-4 w-20 left-[70%] top-[62px]"
              resizeMode="contain"
            />
            <Text className=" text-gray-200 mt-3 text-sm font-pregular text-center">
              Where creativity meets expectation: embark on a journey of
              limitless possibilities with Aora.
            </Text>
          </View>
          <CustomButton
            title="Continue with Email"
            containerStyle="w-11/12 mx-auto mt-5"
            textStyles="text-xl text-primary"
            handlePress={() => {
              router.push("/(auth)/sign-in");
            }}
            isLoading={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
