import { create } from "zustand";

const useMusicStore = create((set) => ({
  songs: [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      albumCover: "/images/bohemian.jpg",
      length: "5:55",
    },
    {
      id: 2,
      title: "Don't Stop Me Now",
      artist: "Queen",
      albumCover: "/images/dont.jpg",
      length: "3:29",
    },
    {
      id: 3,
      title: "Somebody to love",
      artist: "Queen",
      albumCover: "/images/somebody.jpg",
      length: "4:57",
    },
    {
      id: 4,
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      albumCover: "/images/sweet.jpg",
      length: "5:56",
    },
    {
      id: 5,
      title: "November Rain",
      artist: "Guns N' Roses",
      albumCover: "/images/november.jpg",
      length: "8:57",
    },
    {
      id: 6,
      title: "Welcome to the Jungle",
      artist: "Guns N' Roses",
      albumCover: "/images/Welcomtothejungle.jpg",
      length: "4:31",
    },
    {
      id: 7,
      title: "Seasons",
      artist: "Wave to Earth",
      albumCover: "/images/seasons.jpg",
      length: "4:02",
    },
    {
      id: 8,
      title: "Light",
      artist: "Wave to Earth",
      albumCover: "/images/light.jpg",
      length: "3:46",
    },
    {
      id: 9,
      title: "Bad",
      artist: "Wave to Earth",
      albumCover: "/images/bad.jpg",
      length: "4:24",
    },
  ],

  // 배열을 순회하면서, hearted(마음꾹)된 id를 찾고 이를 상태에 반영
  playlist: [],
  toggleHeart: (id) =>
    set((state) => ({
      songs: state.songs.map((song) =>
        song.id === id ? { ...song, hearted: !song.hearted } : song
      ),
    })),

  // playlist 배열에 추가할 노래를 id로 찾고,
  // 동일한 곡이 추가시 ...song을 통해 복사되어 각각의 곡이 개별적으로 추가됨
  addToPlaylist: (id) =>
    set((state) => {
      const song = state.songs.find((song) => song.id === id);
      if (song) {
        return { playlist: [...state.playlist, { ...song }] };
      }
    }),
}));

export default useMusicStore;
