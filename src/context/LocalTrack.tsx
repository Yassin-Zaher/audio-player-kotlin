import RNFS from "react-native-fs";

const MusicDirectory = RNFS.MusicDirectoryPath;

const getAllAudioFiles = async () => {
  try {
    const files = await RNFS.readDir(MusicDirectory);
    const audioFiles = files.filter(
      (file) => file.isFile() && file.name.endsWith(".mp3")
    );
    return audioFiles;
  } catch (error) {
    console.error("Error reading audio files:", error);
    return [];
  }
};

export { getAllAudioFiles };
