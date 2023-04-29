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
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        debounce={1000}
        query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
        minLength={2}
        enablePoweredByContainer={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
      />
      <NavOptions />
    </View>
  );
};

export default HomeScreen;
