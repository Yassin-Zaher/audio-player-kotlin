import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/HomePage";
import PlayLists from "./src/components/PlayLists";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SongItem from "./src/components/SongItem";
import SongPage from "./src/components/SongPage";
import { useState } from "react";
import { AppProvider } from "./src/context/AppContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TopTab = createMaterialTopTabNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PlayLists" component={PlayLists} />
          <Stack.Screen
            name="PlayingTrack"
            options={{ title: "" }}
            component={SongPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;

{
  /* <TopTab.Navigator>
        <TopTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <TopTab.Screen
          name="Settings"
          component={PlayLists}
          name="PlayLists"
          component={PlayLists}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
      </TopTab.Navigator> */
}
