import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 5px;
  background-color: #f4f1f1;
  margin: 20px;
`;

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/now_playing`,
        params: {
          api_key: API_KEY,
          language: "ko-KR",
          page: 1,
        },
      };

      try {
        const response = await axios(config);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <CardContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </CardContainer>
    </>
  );
}

export default MovieList;
