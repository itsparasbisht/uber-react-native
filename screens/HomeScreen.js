import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
import Constants from "expo-constants";

const GOOGLE_MAPS_APIKEY = Constants?.expoConfig?.extra?.googleMapApiKey;

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
        onPress={(data, details = null) => {
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
      <NavFavourites />
    </View>
  );
};

export default HomeScreen;
