import React from "react";
import { Link } from "react-router-dom";
import useMusicStore from "./store/store";
import styled from "styled-components";

function Playlist() {
  const playlist = useMusicStore((state) => state.playlist);
  const toggleHeart = useMusicStore((state) => state.toggleHeart);
  const removePlaylist = useMusicStore((state) => state.removePlaylist);

  return (
    <>
      <StyledLink to="/">&nbsp;&nbsp;&nbsp;&nbsp;🏠</StyledLink>
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          2024년 9월 Playlist💿
        </h1>
        {playlist.map((song) => (
          <PlaylistItem key={song.playlistId}>
            {" "}
            <AlbumCover src={song.albumCover} alt={song.title} />
            <SongDetails>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </SongDetails>
            <HeartButton onClick={() => toggleHeart(song.id)}>
              {song.hearted ? "❤️" : "♡"}
            </HeartButton>
            <DeleteButton onClick={() => removePlaylist(song.playlistId)}>
              삭제
            </DeleteButton>
          </PlaylistItem>
        ))}
      </Container>
    </>
  );
}

export default Playlist;

const StyledLink = styled(Link)`
  position: fixed;
  top: 20px;
  border: none;
  font-size: 30px;
  text-decoration: none;
`;
const Container = styled.div`
  padding: 20px;
  background: black;
`;

const PlaylistItem = styled.div`
  color: white;
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
