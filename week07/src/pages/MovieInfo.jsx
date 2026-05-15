import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function MovieInfo() {
  const { state } = useLocation(); 
  const navigate = useNavigate();
  const movie = state?.movie;

  
  if (!movie) {
    return (
      <Container>
        <p>Not found</p>
        <BackBtn onClick={() => navigate("/")}>← back</BackBtn>
      </Container>
    );
  }

  return (
    <Container>
      <BackBtn onClick={() => navigate("/")}>← back</BackBtn>

      <Content>
        <img src={movie.medium_cover_image} alt={movie.title} />

        <Info>

            
          <h1>{movie.title}</h1>
          <MetaRow>
            <span>⭐ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.runtime}분</span>
          </MetaRow>
          {movie.genres && (
            <Genres>
              {movie.genres.map((genre) => (
                <Genre key={genre}>{genre}</Genre>
              ))}
            </Genres>
          )}
          <Summary>{movie.summary}</Summary>
        </Info>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
`;

const BackBtn = styled.button`
  background: none;
  border: 1px solid #555;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 32px;

  &:hover {
    border-color: white;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 40px;

  img {
    width: 220px;
    height: 330px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 32px;
  }
`;

const MetaRow = styled.div`
  display: flex;
  gap: 20px;
  color: #aaa;
  font-size: 14px;
`;

const Genres = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Genre = styled.span`
  background: #333;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #ddd;
`;

const Summary = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #bbb;
  max-width: 600px;
`;

export default MovieInfo;