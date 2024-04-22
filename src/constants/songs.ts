// constants/songs.ts

/* const state = {
  albumId: "-2077571684",
  creationTime: 0,
  duration: 229.872,
  filename: "5 Seconds of Summer - Youngblood (Official Video)(MP3_160K).mp3",
  height: 0,
  id: "1000653249",
  mediaType: "audio",
  modificationTime: 1707427350000,
  uri: "file:///storage/emulated/0/Alarms/5 Seconds of Summer - Youngblood (Official Video)(MP3_160K).mp3",
  width: 0,
}; */

export interface Song {
  albumId: string;
  creationTime: number;
  duration: number;
  filename: string;
  height: number;
  id: string;
  mediaType: string;
  modificationTime: number;
  uri: string;
  width: number;
}
