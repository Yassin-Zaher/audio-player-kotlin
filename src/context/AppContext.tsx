// AppContext.tsx

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Song } from "../constants/songs";
import {
  getAssetsAsync,
  getPermissionsAsync,
  requestPermissionsAsync,
} from "expo-media-library";
import { ActivityIndicator, Alert, Image, Text, View } from "react-native";
import { DataProvider } from "recyclerlistview";

const AppContext = createContext();
interface AppContextState {
  currentTrack: Song | null;
  audioFiles: any[];
  dataProvider: DataProvider<any>;
}

//----------------------------------------
export const AppProvider = ({ children }) => {
  const [state, setState] = useState<AppContextState>({
    currentTrack: null,
    audioFiles: [],
    dataProvider: new DataProvider((r1, r2) => r1 !== r2),
  });

  // Handling Permission
  const getAudioFiles = async () => {
    let media = await getAssetsAsync({
      mediaType: "audio",
    });
    media = await getAssetsAsync({
      mediaType: "audio",
      first: media.totalCount,
      first: 50,
    });

    setState((prevState) => {
      const newAudioFiles = [...prevState.audioFiles, ...media.assets];

      const newDataProvider =
        prevState.dataProvider.cloneWithRows(newAudioFiles);

      return {
        ...prevState,
        audioFiles: newAudioFiles,
        dataProvider: newDataProvider,
      };
    });
  };

  const permessionAlert = () => {
    Alert.alert("Permission Required", "hhh dir allow malek khayef", [
      {
        text: "بان عليك الأمان",
        onPress: () => {
          getPermission();
        },
      },
      {
        text: "Cancel",
        onPress: () => {
          permessionAlert();
        },
      },
    ]);
  };

  const getPermission = async () => {
    try {
      const permission = await getPermissionsAsync();
      if (permission.granted) {
        // Permission granted, fetch audio files
        await getAudioFiles();
      } else if (permission.canAskAgain) {
        // Permission not granted, but can ask again
        const { status, canAskAgain } = await requestPermissionsAsync();
        if (status === "granted") {
          await getAudioFiles();
        }
      }
    } catch (error) {
      console.error("Error getting permissions:", error);
      setPermissionError(true);
    }
  };

  useEffect(() => {
    try {
      getPermission();
    } catch (error) {
      console.error("Error getting permission", error);
    }
  }, []);

  //---------------------------------------------

  const { audioFiles, currentTrack, dataProvider } = state;

  if (audioFiles.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AppContext.Provider value={{ currentTrack, audioFiles, dataProvider }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
