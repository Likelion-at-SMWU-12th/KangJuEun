import React from "react";
import useMusicStore from "./store/store";
import styled from "styled-components";

function Playlist() {
  const playlist = useMusicStore((state) => state.playlist);
  const toggleHeart = useMusicStore((state) => state.toggleHeart);
  const removeFromPlaylist = useMusicStore((state) => state.removeFromPlaylist);

  return (
    <Container>
      <h1>2024년 9월 Playlist💿</h1>
      {playlist.map((song) => (
        <PlaylistItem key={song.playlistId}>
          {" "}
          {/* playlistId로 key 설정 */}
          <AlbumCover src={song.albumCover} alt={song.title} />
          <SongDetails>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </SongDetails>
          <HeartButton onClick={() => toggleHeart(song.id)}>
            {song.hearted ? "❤️" : "♡"}
          </HeartButton>
          <DeleteButton onClick={() => removeFromPlaylist(song.playlistId)}>
            삭제
          </DeleteButton>
        </PlaylistItem>
      ))}
    </Container>
  );
}

export default Playlist;

const Container = styled.div`
  padding: 20px;
`;

const PlaylistItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const AlbumCover = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeartButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: red;
  margin-left: auto;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 3px;

  &:hover {
    background-color: darkred;
  }
`;
