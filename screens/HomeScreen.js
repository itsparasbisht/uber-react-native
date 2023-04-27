import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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
      <GooglePlacesAutocomplete
        placeholder="Where From?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <NavOptions />
    </View>
  );
};

export default HomeScreen;
