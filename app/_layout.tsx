import { View, Text } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync(); // prevent auto hide splash screen before fonts loaded

const RootLayout = () => {
  // fonts loaded all fonts
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require(`../assets/fonts/Poppins-Black.ttf`),
    "Poppins-Bold": require(`../assets/fonts/Poppins-Bold.ttf`),
    "Poppins-ExtraBold": require(`../assets/fonts/Poppins-ExtraBold.ttf`),
    "Poppins-ExtraLight": require(`../assets/fonts/Poppins-ExtraLight.ttf`),
    "Poppins-Light": require(`../assets/fonts/Poppins-Light.ttf`),
    "Poppins-Medium": require(`../assets/fonts/Poppins-Medium.ttf`),
    "Poppins-Regular": require(`../assets/fonts/Poppins-Regular.ttf`),
    "Poppins-SemiBold": require(`../assets/fonts/Poppins-SemiBold.ttf`),
    "Poppins-Thin": require(`../assets/fonts/Poppins-Thin.ttf`),
  });

  // useEffect to check if fonts loaded or not
  useEffect(() => {
    if (error) throw error; //if error on loading font throws error
    if (fontsLoaded) SplashScreen.hideAsync(); //if fonts loaded hide splash screen immediately
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) null; //if fonts not loaded and no error return null

  return (
    <Stack >
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="home" options={{headerShown:true}} />
    </Stack>
  );
};

export default RootLayout;
