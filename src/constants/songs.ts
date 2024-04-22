// constants/songs.ts

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  paused: boolean;
}

const songs: Song[] = [
  {
    id: "1",
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: "3:53",
    paused: false, // Initialize paused property
  },
  {
    id: "2",
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
    paused: false,
  },
  {
    id: "3",
    title: "Dance Monkey",
    artist: "Tones and I",
    duration: "3:29",
    paused: false,
  },
  {
    id: "4",
    title: "Someone Like You",
    artist: "Adele",
    duration: "4:45",
    paused: false,
  },
  {
    id: "5",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    duration: "4:31",
    paused: false,
  },
  {
    id: "6",
    title: "Shallow",
    artist: "Lady Gaga, Bradley Cooper",
    duration: "3:36",
    paused: false,
  },
  {
    id: "7",
    title: "Rockstar",
    artist: "Post Malone ft. 21 Savage",
    duration: "3:39",
    paused: false,
  },
  {
    id: "8",
    title: "Old Town Road",
    artist: "Lil Nas X ft. Billy Ray Cyrus",
    duration: "1:53",
    paused: false,
  },
  {
    id: "9",
    title: "Sunflower",
    artist: "Post Malone, Swae Lee",
    duration: "2:38",
    paused: false,
  },
  {
    id: "10",
    title: "Havana",
    artist: "Camila Cabello ft. Young Thug",
    duration: "3:36",
    paused: false,
  },
  {
    id: "11",
    title: "Scala",
    artist: "Camila Cabello ft. Young Thug",
    duration: "3:36",
    paused: false,
  },
  {
    id: "12",
    title: "Clout",
    artist: "Camila Cabello ft. Young Thug",
    duration: "3:36",
    paused: false,
  },
];

export default songs;
