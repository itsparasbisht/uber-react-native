import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../components/Map";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MapScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </SafeAreaProvider>
  );
};

export default MapScreen;
