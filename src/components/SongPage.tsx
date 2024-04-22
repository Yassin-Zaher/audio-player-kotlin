import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { LinearGradient } from "expo-linear-gradient";
import { useAppContext } from "../context/AppContext";

const SongPage = () => {
  const { currentTrack, setCurrentTrack } = useAppContext();
  const [paused, setPaused] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteIconColor = isFavorite ? "red" : "black";

  const playTrack = (song: Song) => {
    if (currentTrack && song.id === currentTrack.id) {
      // Toggle paused state of the current track
      setCurrentTrack({ ...currentTrack, paused: !currentTrack.paused });
    } else {
      // Start playing a new track (reset paused state to false)
      setCurrentTrack({ ...song, paused: false });
    }
  };

  return (
    <LinearGradient colors={["#ec2F4B", "#009FFF"]} style={{ flex: 1 }}>
      <View style={styles.playingSongContainer}>
        <Image
          style={styles.playingSongImg}
          source={require("../../assets/music.gif")}
        />

        <View style={styles.playingSongInfoContainer}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
            title
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>subtitne</Text>
        </View>
      </View>
      <View style={styles.playingSongPlayPauseContainer}>
        <View style={styles.topControlContainer}>
          <Feather name={"repeat"} size={26} color={"white"} />
          <Ionicons name={"heart-outline"} size={26} color={"white"} />
          <Feather
            name={"share"}
            size={26}
            color={favoriteIconColor}
            color={"white"}
          />
        </View>
        <View style={styles.progressBarContainer}>
          <Progress.Bar progress={0.3} width={330} color="white" />
          <View
            style={{
              margin: 5,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 10, color: "white" }}>0:00</Text>
            <Text style={{ fontSize: 10, color: "white" }}>0:00</Text>
          </View>
        </View>

        <View style={styles.controlButtonContainer}>
          <FontAwesome5 name={"fast-backward"} size={26} color={"white"} />
          <TouchableOpacity onPress={() => playTrack(currentTrack)}>
            {currentTrack.paused ? (
              <FontAwesome5 name={"pause"} size={26} color={"white"} />
            ) : (
              <FontAwesome5 name={"play"} size={26} color={"white"} />
            )}
          </TouchableOpacity>
          <FontAwesome5 name={"fast-forward"} size={26} color={"white"} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  playingSongContainer: {
    paddingTop: 20,
    // backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center", // Add alignment to center items vertically
  },
  playingSongImg: {
    width: 200,
    height: 200,
    borderRadius: 25,
  },
  playingSongInfoContainer: {
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  playingSongPlayPauseContainer: {
    flex: 1,
    margin: 25,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "stretch",
  },
  topControlContainer: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBarContainer: {
    margin: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },

  controlButtonContainer: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default SongPage;
