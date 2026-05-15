import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard";

function Home() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <h1>🎬 Movie List</h1>
      <Grid>
        {Movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;

  h1 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default Home;