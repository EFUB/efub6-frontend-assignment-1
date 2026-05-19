import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const API_KEY = process.env.REACT_APP_API_KEY;

const GlobalStyle = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`;

const Loading = styled.p`
  font-family: 'Outfit', sans-serif;
  color: #a78bfa;
  text-align: center;
  padding: 100px;
  font-size: 20px;
`;

const SortButtons = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px 40px 0px 40px;
  background-color: #0a0a0a;
`;

const SortBtn = styled.button`
  font-family: 'Outfit', sans-serif;
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid #a78bfa;
  background-color: ${props => props.active ? '#a78bfa' : 'transparent'};
  color: ${props => props.active ? '#000' : '#a78bfa'};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #a78bfa;
    color: #000;
  }
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState('popularity');

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`)
      .then(response => {
        setMovies(response.data.results);
        setIsLoading(false);
      });
  }, []);

  const sortedMovies = useMemo(() => {
    return [...movies].sort((a, b) => {
      if (sort === 'popularity') return b.popularity - a.popularity;
      if (sort === 'rating')     return b.vote_average - a.vote_average;
      if (sort === 'date')       return new Date(b.release_date) - new Date(a.release_date);
      return 0;
    });
  }, [movies, sort]);

  return (
    <GlobalStyle>
      <Header />
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <SortButtons>
            <SortBtn active={sort === 'popularity'} onClick={() => setSort('popularity')}>
              인기순
            </SortBtn>
            <SortBtn active={sort === 'rating'} onClick={() => setSort('rating')}>
              평점순
            </SortBtn>
            <SortBtn active={sort === 'date'} onClick={() => setSort('date')}>
              최신순
            </SortBtn>
          </SortButtons>
          <Body movies={sortedMovies} />
        </>
      )}
      <Footer />
    </GlobalStyle>
  );
}

export default App;