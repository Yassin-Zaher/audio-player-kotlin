import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";

const PlayingBox = ({ title, subtitle }) => {
  const [paused, setPaused] = useState(false);
  const hasContent = title && subtitle;
  return (
    <View style={styles.playingSongContainer}>
      <Image
        style={styles.playingSongImg}
        source={require("../assets/images/profile.jpeg")}
      />

      <View style={styles.playingSongInfoContainer}>
        {hasContent ? (
          <>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{title}</Text>
            <Text style={{ fontSize: 12, color: "grey" }}>{subtitle}</Text>
          </>
        ) : (
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>
            Tap to play
          </Text>
        )}
      </View>

      <View style={styles.playingSongPlayPauseContainer}>
        <FontAwesome5 name={"fast-backward"} />

        <TouchableOpacity onPress={() => setPaused((state) => !state)}>
          {paused ? (
            <FontAwesome5 name={"play"} />
          ) : (
            <FontAwesome5 name={"pause"} />
          )}
        </TouchableOpacity>
        <FontAwesome5 name={"fast-forward"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playingSongContainer: {
    padding: 20,
    flexDirection: "row",
    height: 100,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  playingSongImg: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
  },
  playingSongInfoContainer: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 3,
  },

  playingSongPlayPauseContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default PlayingBox;
