import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

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
        debounce={500}
        query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
        minLength={2}
        enablePoweredByContainer={false}
        fetchDetails={true}
        onPress={(data, details) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );

          dispatch(setDestination(null));
        }}
      />
      <NavOptions />
    </View>
  );
};

export default HomeScreen;
