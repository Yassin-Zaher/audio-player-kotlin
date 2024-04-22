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
import { Alert } from "react-native";

interface AppContextState {
  currentTrack: Song | null;
  setCurrentTrack: (song: Song | null) => void;
  //totalTrackFile: number | 0;
  audioFiles: any;
}

const AppContext = createContext<AppContextState | undefined>(undefined);

//----------------------------------------
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTrack, setCurrentTrack] = useState<Song | null>();
  //const [totalTrackFile, setTotalTrackFiles] = useState();
  const [audioFiles, setAudioFiles] = useState([]);
  useEffect(() => {
    getPermission();
  }, []);

  // Handling Permission
  const getAudioFiles = async () => {
    let media = await getAssetsAsync({
      mediaType: "audio",
    });
    media = await getAssetsAsync({
      mediaType: "audio",
      first: media.totalCount,
    });
    setAudioFiles(media.assets);
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
    const permission = await getPermissionsAsync();
    if (permission.granted) {
      // get all the files
      getAudioFiles();
    }
    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } = await requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
        // dipslay an alert that user have to accept permission
        permessionAlert();
      }
      if (status === "granted") {
        // get All the media files
        getAudioFiles();
      }
      if (status === "denied" && !canAskAgain) {
        // display an Error
      }
    }
  };
  //---------------------------------------------

  const togglePlayPause = () => {
    if (currentTrack) {
      setCurrentTrack({ ...currentTrack, paused: !currentTrack.paused });
    } else {
      currentTrack = initialSong;
    }
  };

  return (
    <AppContext.Provider value={{ currentTrack, setCurrentTrack, audioFiles }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
