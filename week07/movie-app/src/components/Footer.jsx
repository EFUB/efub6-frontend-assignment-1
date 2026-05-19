import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  padding: 30px 40px;
  text-align: center;
  border-top: 1px solid #ffffff20;
  margin-top: 60px;
`;

const FooterText = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  color: #ffffff50;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2026 MOVIEBOX. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;