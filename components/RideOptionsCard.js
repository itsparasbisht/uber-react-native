import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { useState } from "react";

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NavigateCard");
          }}
          style={tw`absolute p-3 rounded-full top-3 left-5 z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl font-semibold`}>
          Select a Ride
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View className="bg-gray-200 h-[0.5px]" />
        )}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-10 mx-2 rounded-4 ${
              id === selected?.id && "bg-gray-200"
            }`}
            onPress={() => {
              setSelected(item);
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
              <Text>Travel Time</Text>
            </View>
            <Text style={tw`text-lg`}>$99</Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 rounded-2 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
