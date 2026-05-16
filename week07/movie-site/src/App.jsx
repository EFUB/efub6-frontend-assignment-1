import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';

const Container = styled.div`
  background-color: #141414;
  min-height: 100vh;
  padding-top: 80px; /* Header 높이만큼 띄워줌 */
`;

const SectionTitle = styled.h2`
  color: white;
  margin: 20px 4%;
  font-size: 1.4vw;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  padding: 0 4%;
`;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('https://movies-api.accel.li/api/v2/list_movies.json?quality=3D');
        setMovies(response.data.data.movies);
      } catch (e) {
        console.error(e);
      }
    };
    getMovies();
  }, []);

  return (
    <Container>
      <Header />
      
      <main>
        <SectionTitle>지금 뜨는 영화</SectionTitle>
        <MovieGrid>
          {movies.map(movie => (
            <MovieCard 
              key={movie.id}
              title={movie.title}
              poster={movie.medium_cover_image}
              rating={movie.rating}
            />
          ))}
        </MovieGrid>
      </main>

      <Footer />
    </Container>
  );
};

export default App;