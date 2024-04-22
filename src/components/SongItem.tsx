import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { useAppContext } from "../context/AppContext";

const SongItem = ({ title, subtitle, onPress }) => {
  const { currentTrack } = useAppContext();
  return (
    <TouchableOpacity style={styles.songIntemContainer} onPress={onPress}>
      <View style={styles.songItemText}>
        <Text style={styles.songItemTitle}>{title}</Text>
        <Text style={styles.songItemSubTitle}>{title?.slice(0, 6)}</Text>
      </View>
      <TouchableOpacity>
        <Fontisto name="more-v-a" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  songIntemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  songItemText: {},
  songItemTitle: {
    fontSize: 16,
    color: "#1E1E1E",
    fontWeight: "bold",
  },
});

export default SongItem;
