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
  const { setCurrentTrack, currentTrack } = useAppContext();
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const playTrack = (song) => {
    setCurrentTrack(song);
  };

  const selectSong = (song) => {
    setSelectedSong(song);
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
          {Object.values(songs).map((song) => (
            <SongItem
              key={song.id}
              title={song.title}
              subtitle={song.artist}
              onPress={() => playTrack(song)}
            />
          ))}
        </ScrollView>
      </View>

      <View>
        <PlayingBox
          title={selectedSong?.title}
          subtitle={selectedSong?.artist}
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
    paddingVertical: 10,
    paddingHorizontal: MARGIN,
  },
  navbtn__active: {
    backgroundColor: "#F92457",
  },
});
export default HomeScreen;
