import { View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { BookmarkIcon, Camera, CameraIcon, House, HouseIcon, LucideCreativeCommons, User } from "lucide-react-native";
import Home from "./home";
import Bookmark from "./bookmark";
import Profile from "../profile";
import { ReactElement, ReactNode } from "react";
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
         <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <>
                  <View className="flex justify-center items-center mt-4  h-auto w-auto">
                    <House size={19} color={color} />
                    <Text
                      className={`
                        ${focused ? "text-blue-500" : "text-gray-500"} text-sm
                        `}
                    >
                      Home
                    </Text>
                  </View>
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <>
                  <View className="flex justify-center items-center mt-4  h-auto w-auto">
                    <BookmarkIcon size={19} color={color} />
                    <Text
                      className={`
                        ${focused ? "text-blue-500" : "text-gray-500"} text-sm
                        `}
                    >
                      Bookmark
                    </Text>
                  </View>
                </>
              );
            },
          }}
        />
      <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <>
                  <View className="flex justify-center items-center mt-4  h-auto w-auto">
                    <CameraIcon size={20} color={color} />
                    <Text
                      className={`
                        ${focused ? "text-blue-500" : "text-gray-500"} text-sm
                        `}
                    >
                      Create
                    </Text>
                  </View>
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <>
                  <View className="flex justify-center items-center mt-4 h-auto w-auto">
                    <User color={color} />
                    <Text
                      className={`
                        ${focused ? "text-blue-500" : "text-gray-500"} text-sm
                        `}
                    >
                      Profile
                    </Text>
                  </View>
                </>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
