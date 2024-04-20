import * as React from "react";
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

function HomeScreen({ navigation, route }) {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };
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

      <ScrollView>
        {Object.values(SCREEN_NAMES).map((screenName) => (
          <NavButton
            key={screenName}
            title={screenName}
            onPress={() => navigateToScreen(screenName)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homePageContainer: {},
  navigationButtons: {
    //flex: 1,
    // justifyContent: "center",
    //alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: MARGIN,
  },
  navbtn__active: {
    backgroundColor: "#F92457",
  },
});
export default HomeScreen;
