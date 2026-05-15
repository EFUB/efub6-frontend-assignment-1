import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // 클릭하면 info 페이지로 이동, movie 데이터를 state로 함께 넘김
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <Card onClick={handleClick}>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <Title>{movie.title}</Title>
    </Card>
  );
}

const Card = styled.div`
  width: 160px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.p`
  font-size: 12px;
  padding: 8px 4px;
  color: #ccc;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default MovieCard;



