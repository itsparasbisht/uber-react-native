import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <View style={tw`p-5`}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
        source={{ uri: "https://links.papareact.com/gzs" }}
      />
      <NavOptions />
    </View>
  );
};

export default HomeScreen;
