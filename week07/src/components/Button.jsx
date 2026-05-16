import styled from "styled-components";

const MovieButton = styled.button`
  border: 1px solid #cbcbcb;
  border-radius: 8px;
  background-color: white;
  padding: 5px 20px;
  margin-top: 10px;
`;

const Button = () => {
  return <MovieButton>상세보기</MovieButton>;
};

export default Button;
