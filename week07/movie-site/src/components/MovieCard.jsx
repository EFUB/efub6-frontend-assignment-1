import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
  }

  .movie-info {
    padding: 12px;
    background: #181818;
    color: white;
  }

  .title {
    font-size: 0.9rem;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .rating-box {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
  }

  .star {
    color: #ffb400; /* 황금색 별 */
  }

  .score {
    color: #46d369; /* 넷플릭스 강조색 느낌 유지 */
    font-weight: bold;
  }
`;

const MovieCard = ({ title, poster, rating }) => (
  <Card>
    <img src={poster} alt={title} />
    <div className="movie-info">
      <span className="title">{title}</span>
      <div className="rating-box">
        <span className="star">★</span>
        <span className="score">{rating}</span>
        <span style={{ color: '#808080' }}>/ 10</span>
      </div>
    </div>
  </Card>
);

export default MovieCard;