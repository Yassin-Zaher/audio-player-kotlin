// AppContext.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";
import songs, { Song } from "../constants/songs";

interface AppContextState {
  currentTrack: Song | null;
  setCurrentTrack: (song: Song | null) => void;
}

const AppContext = createContext<AppContextState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTrack, setCurrentTrack] = useState<Song | null>(songs[0]);

  const togglePlayPause = () => {
    if (currentTrack) {
      setCurrentTrack({ ...currentTrack, paused: !currentTrack.paused });
    } else {
      currentTrack = initialSong;
    }
  };

  return (
    <AppContext.Provider value={{ currentTrack, setCurrentTrack }}>
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
