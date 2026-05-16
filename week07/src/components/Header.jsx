import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  border-bottom: 1px solid;
`;

const Header = () => {
  return <HeaderContainer>CGV 현재 상영작</HeaderContainer>;
};

export default Header;
