import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  padding: 40px;
  background-color: #0a0a0a;
`;

const Card = styled.div`
  background-color: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Poster = styled.img`
  width: 100%;
  display: block;
`;

const Info = styled.div`
  padding: 12px;
`;

const Title = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 6px 0;
`;

const Date = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 12px;
  color: #a78bfa;
  margin: 0;
`;

const Rating = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 12px;
  color: #67e8f9;
  margin: 4px 0 0 0;
`;

const Body = ({ movies }) => {
  return (
    <Grid>
      {movies.map(movie => (
        <Card key={movie.id}>
          <Poster
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <Info>
            <Title>{movie.title}</Title>
            <Date>{movie.release_date}</Date>
            <Rating>⭐ {movie.vote_average}</Rating>
          </Info>
        </Card>
      ))}
    </Grid>
  );
};

export default Body;