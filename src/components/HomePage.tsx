import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  FlatListComponent,
  FlatList,
} from "react-native";
import SearchBox from "./SearchBox";
import NavButton from "./NavButton";
import { SCREEN_NAMES } from "../constants/screens";
import { MARGIN } from "../constants/layout";
import songs, { Song } from "../constants/songs";
import SongItem from "./SongItem";
import PlayingBox from "./PlayingBox";
import React, { useContext, useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from "recyclerlistview";
import AppContext from "../context/AppContext";

function HomeScreen({ navigation, route }) {
  const { audioFiles, dataProvider } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  //const [tracks, setTracks] = useState([]);
  useEffect(() => {
    console.log(audioFiles);
  }, []);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.homePageContainer}>
      <SearchBox />
      <View style={styles.navigationButtons}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Object.values(SCREEN_NAMES).map((screenName, index) => (
            <NavButton
              key={index}
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
      <View style={{ flex: 1 }}>
        <FlatList
          data={audioFiles}
          renderItem={(song) => (
            <SongItem
              title={song.item.filename}
              onPress={() => playTrack(song)}
              key={song?.id}
            />
          )}
        />
      </View>

      <View>
        <PlayingBox
          title={"curren track"}
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

/*  <ScrollView style={styles.songsContainerScroll}>
          {audioFiles.map((song) => (
            <SongItem
              title={song.filename}
              key={song.id}
              onPress={() => playTrack(song)}
            />
          ))}
        </ScrollView>  */
