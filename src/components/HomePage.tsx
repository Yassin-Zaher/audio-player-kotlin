import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import SearchBox from "./SearchBox";
import NavButton from "./NavButton";
import { SCREEN_NAMES } from "../constants/screens";
import { MARGIN } from "../constants/layout";
import songs, { Song } from "../constants/songs";
import SongItem from "./SongItem";
import PlayingBox from "./PlayingBox";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useAppContext } from "../context/AppContext";

function HomeScreen({ navigation, route }) {
  const { setCurrentTrack, currentTrack, audioFiles } = useAppContext();
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const playTrack = (song) => {
    setCurrentTrack(song);
  };

  useEffect(() => {
    console.log("New State:", currentTrack);
  }, [currentTrack]);

  return (
    <View style={styles.homePageContainer}>
      <SearchBox />
      <View style={styles.navigationButtons}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Object.values(SCREEN_NAMES).map((screenName) => (
            <NavButton
              key={screenName}
              title={screenName}
              onPress={() => navigateToScreen(screenName)}
            />
          ))}
        </ScrollView>

        <View
          style={{
            borderBottomColor: "#A0A0A0",
            paddingVertical: 10,
            paddingHorizontal: MARGIN,
            width: 414,

            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
      {/* The Songs List */}

      <View>
        <ScrollView style={styles.songsContainerScroll}>
          {audioFiles.map((song) => (
            <SongItem
              title={song.filename}
              key={song.id}
              onPress={() => playTrack(song)}
            />
          ))}
        </ScrollView>
      </View>

      <View>
        <PlayingBox
          title={currentTrack?.filename}
          subtitle={"subtitle"}
          onPress={() => {
            navigation.navigate("PlayingTrack");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
  },
  navigationButtons: {
    paddingVertical: 10,
    paddingHorizontal: MARGIN,
  },
  songsContainerScroll: {
    height: 500,
    paddingHorizontal: MARGIN,
  },
  navbtn__active: {
    backgroundColor: "#F92457",
  },
});
export default HomeScreen;
