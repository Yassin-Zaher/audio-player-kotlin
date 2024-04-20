import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SvgUri } from "react-native-svg";
import SearchSvg from "../assets/icons/search-alt.svg";
import { Feather, Entypo, Fontisto } from "@expo/vector-icons";

const SearchBox = () => {
  const [postText, setPostText] = useState("");
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search music"
          style={styles.searchBox}
          value={postText}
          onChangeText={setPostText}
        />

        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
      </View>
      <Fontisto name="more-v-a" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    margin: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBarContainer: {
    padding: 10,
    paddingLeft: 15,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  // searchBox: { height: 27, width: 344 },
});

export default SearchBox;
