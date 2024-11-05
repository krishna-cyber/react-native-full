import { View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";
import {
  BookmarkIcon,
  Camera,
  CameraIcon,
  House,
  HouseIcon,
  LucideCreativeCommons,
  User,
} from "lucide-react-native";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#EE4B2B",
            height: 60,
          },
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
                        ${
                          focused
                            ? "text-blue-500 font-PoppinsMedium"
                            : "text-gray-500"
                        } text-sm
                        `}
                      style={{ color: color }}
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
                        ${
                          focused
                            ? "text-blue-500 font-PoppinsMedium"
                            : "text-gray-500"
                        } text-sm
                        `}
                      style={{ color: color }}
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
                        ${
                          focused
                            ? "text-blue-500 font-PoppinsMedium"
                            : "text-gray-500"
                        } text-sm
                        `}
                      style={{ color: color }}
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
                        ${
                          focused
                            ? "text-blue-500 font-PoppinsMedium"
                            : "text-gray-500"
                        } text-sm
                        `}
                      style={{ color: color }}
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
