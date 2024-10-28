import { View, Text } from "react-native";
import { Slot } from "expo-router";
import "../global.css";

const RootLayout = () => {

  return (
    <>
    <Text>Header</Text>
    <slot/>
    <Text>Footer</Text>
    </>
  )
};

export default RootLayout;
