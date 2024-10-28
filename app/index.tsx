import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Index = () => {
  return (
  <View className=' flex justify-center items-center h-screen'>
    <Text className=' text-red-500 text-lg font-semibold border-blue-500 border-dashed border-4 mt-4 p-4 w-fit '>Index</Text>
    <StatusBar style="auto" />
    <Link href="/Profile" style={{color:"blue",backgroundColor:"red"}} >Go to profile</Link>
  </View>
  )
}

export default Index

const styles = StyleSheet.create({})