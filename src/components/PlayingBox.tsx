import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useAppContext } from "../context/AppContext";
import React, { useEffect, useState } from "react";

const PlayingBox = ({ title, subtitle, onPress }) => {
  const { currentTrack, setCurrentTrack } = useAppContext();

  const playTrack = (song: Song) => {
    if (currentTrack && song.id === currentTrack.id) {
      setCurrentTrack({ ...currentTrack, paused: !currentTrack.paused });
    } else {
      // Start playing a new track (reset paused state to false)
      setCurrentTrack({ ...song, paused: false });
    }
  };

  useEffect(() => {
    console.log(currentTrack);
  }, [currentTrack]);
  return (
    <View style={styles.playingSongContainer}>
      <TouchableOpacity style={styles.playSongTochable} onPress={onPress}>
        <Image
          style={styles.playingSongImg}
          source={require("../assets/images/profile.jpeg")}
        />

        <View style={styles.playingSongInfoContainer}>
          {currentTrack ? (
            <>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {currentTrack?.title}
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                {currentTrack?.artist}
              </Text>
            </>
          ) : (
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>
              Tap to play
            </Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.playingSongPlayPauseContainer}>
        <FontAwesome5 name={"fast-backward"} size={20} />

        <TouchableOpacity
          onPress={() => playTrack(currentTrack)}
          style={styles.playButtons}
        >
          {currentTrack?.paused ? (
            <FontAwesome5 name={"pause"} size={20} />
          ) : (
            <FontAwesome5 name={"play"} size={20} />
          )}
        </TouchableOpacity>
        <FontAwesome5 name={"fast-forward"} size={20} />
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
  playSongTochable: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  playingSongImg: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
  },
  playingSongInfoContainer: {
    //flex: 1,
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
