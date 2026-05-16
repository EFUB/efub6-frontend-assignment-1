import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = styled.div`
  width: 80%;
  height: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : `https://via.placeholder.com/500x750?text=No+Poster`;

  return (
    <Card>
      <img
        src={posterUrl}
        alt={movie.title}
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />
      <p style={{ margin: "5px", fontSize: "12px", fontWeight: "bold" }}>
        {movie.title}
      </p>
      <div style={{ fontSize: "10px" }}>
        🌟{movie.vote_average} | {movie.release_date} 개봉
      </div>
      <Button />
    </Card>
  );
}

export default MovieCard;
