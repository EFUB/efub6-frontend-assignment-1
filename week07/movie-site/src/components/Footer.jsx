import React from 'react';
import styled from 'styled-components';
import { IoLanguage } from 'react-icons/io5'; 
import { IoCaretDownSharp } from 'react-icons/io5';

const FooterContainer = styled.footer`
  max-width: 1000px;
  margin: 40px auto 0;
  padding: 40px 4%;
  color: #808080;
  font-size: 0.8rem;
  line-height: 1.5; /* 줄 간격 조절 */
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  span { 
    cursor: pointer; 
    text-decoration: underline; 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 작아지면 2줄로 */
  }
`;

const LanguageSelectWrapper = styled.div`
  margin: 20px 0;
  position: relative;
  display: inline-block;

  select {
    background-color: rgba(0, 0, 0, 0.7);
    color: #e6e6e6;
    border: 1px solid #e6e6e6;
    padding: 10px 30px 10px 40px; /* 아이콘 자리를 위해 패딩 조정 */
    border-radius: 3px;
    font-size: 0.85rem;
    cursor: pointer;
    outline: none;
    appearance: none; /* 브라우저 기본 화살표 제거 */
  }
`;

const LangIcon = styled(IoLanguage)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #e6e6e6;
  font-size: 1.1rem;
`;

const CaretIcon = styled(IoCaretDownSharp)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #e6e6e6;
  font-size: 0.7rem;
`;

const CompanyInfo = styled.div`
  font-size: 0.7rem;
  margin-top: 20px;
  
  p {
    margin: 4px 0;
  }

  span {
    display: inline-block;
    margin-right: 10px;
  }
  
  .link {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <span>자주 묻는 질문</span>
      <span>고객 센터</span>
      <span>이용 약관</span>
      <span>개인정보 처리방침</span>
      <span>쿠키 설정</span>
      <span>기업 정보</span>
    </FooterLinks>

    <LanguageSelectWrapper>
      <LangIcon />
      
      <select>
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>

      <CaretIcon />
    </LanguageSelectWrapper>

    <CompanyInfo>
      <p>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호</p>
      <p>전화번호: 00-308-321-0161 (수신자 부담)</p>
      <p>대표: 레지널드 숀 톰슨</p>
      <p>이메일 주소: korea@netflix.com</p>
      <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
      <p>사업자등록번호: 165-87-00119</p>
      <p>클라우드 호스팅: Amazon Web Services Inc.</p>
      <p className="link">공정거래위원회 웹사이트</p>
    </CompanyInfo>
  </FooterContainer>
);

export default Footer;