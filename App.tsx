import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/HomePage";
import PlayLists from "./src/components/PlayLists";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TopTab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <TopTab.Navigator>
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
      </TopTab.Navigator> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlayLists" component={PlayLists} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
