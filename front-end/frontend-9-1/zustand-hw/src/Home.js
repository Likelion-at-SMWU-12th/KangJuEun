import React from "react";
import { useNavigate } from "react-router-dom";
import useMusicStore from "./store/store";
import styled from "styled-components";

function Home() {
  const songs = useMusicStore((state) => state.songs);
  const toggleHeart = useMusicStore((state) => state.toggleHeart);
  const addPlaylist = useMusicStore((state) => state.addPlaylist);
  const navigate = useNavigate();

  return (
    <Divdiv>
      <h1 style={{ textAlign: "center" }}>좋아하는 곡을 담아봐...</h1>
      <GridContainer>
        {songs.map((song) => (
          <SongCard key={song.id}>
            <AlbumCover src={song.albumCover} alt={song.title} />
            <SongInfo>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <p>{song.length}</p>
            </SongInfo>
            <Hbtn onClick={() => toggleHeart(song.id)}>
              {song.hearted ? "❤️" : "♡"}
            </Hbtn>
            <Button onClick={() => addPlaylist(song.id)}>담기</Button>
          </SongCard>
        ))}
      </GridContainer>
      <FloatButton onClick={() => navigate("/playlist")}>
        플레이리스트로 이동
      </FloatButton>
    </Divdiv>
  );
}

export default Home;

const Divdiv = styled.div`
  background-color: black;
  padding: 100px 100px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const SongCard = styled.div`
  background-color: #fff;
  color: black;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlbumCover = styled.img`
  width: 100%;
  height: auto;
`;

const SongInfo = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: none;
  font-size: 20px;
  letter-spacing: -1px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 0, 0.3);
  }
  &:active {
    background-color: rgba(255, 255, 0, 0.5);
  }
`;

const Hbtn = styled.button`
  border: none;
  border-radius: 5px;
  background: none;
  font-size: 20px;
  letter-spacing: -1px;
  color: red;
  cursor: pointer;
`;

const FloatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: darkgray;
  }
`;
