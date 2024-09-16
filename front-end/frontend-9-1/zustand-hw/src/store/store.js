import { create } from "zustand";

const useMusicStore = create((set) => ({
  // 더미데이터
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
      albumCover: "/images/november.jpeg",
      length: "8:57",
    },
    {
      id: 6,
      title: "Welcome to the Jungle",
      artist: "Guns N' Roses",
      albumCover: "/images/Welcometothejungle.jpg",
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

  // playlist 초기값
  playlist: [],

  // 액션
  // map을 통해 todo 배열을 순회하면서
  // 매개변수로 받은 id에 해당하는 객체를 찾아 hearted 속성을 바꿔줌.
  toggleHeart: (id) =>
    set((state) => ({
      songs: state.songs.map((song) =>
        song.id === id ? { ...song, hearted: !song.hearted } : song
      ),
      playlist: state.playlist.map((song) =>
        song.id === id ? { ...song, hearted: !song.hearted } : song
      ),
    })),

  // 플레이리스트에 추가할 때, 고유한 playlistId 부여합니다.
  // 그냥 id가 아닌 이유: 같은 곡을 중복해서 넣고 싶은데, 삭제할 땐 개별적으로 삭제하고 싶어서
  // 이후 removeFromPlaylist에서 사용할 playlistId를 만들도록 했습니다.
  addPlaylist: (id) =>
    set((state) => {
      const song = state.songs.find((song) => song.id === id);
      if (song) {
        return {
          playlist: [...state.playlist, { ...song, playlistId: Date.now() }],
        };
      }
    }),

  // 플레이리스트에서 곡을 삭제하는 함수
  // 같은 곡을 중복으로 담을 수 있으나,
  removePlaylist: (playlistId) =>
    set((state) => ({
      playlist: state.playlist.filter((song) => song.playlistId !== playlistId),
    })),
}));

export default useMusicStore;
