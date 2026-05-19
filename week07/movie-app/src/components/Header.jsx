import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #0a0a0a;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffffff20;
`;

const Logo = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(90deg, #a78bfa, #67e8f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>🎬 MOVIEBOX</Logo>
    </HeaderContainer>
  );
};

export default Header;