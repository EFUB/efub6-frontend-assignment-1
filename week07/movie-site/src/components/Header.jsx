import React from 'react';
import styled from 'styled-components';
import NetflixLogoImg from '../assets/Netflix_Logo_RGB.png'; 
// 1. 필요한 아이콘들 한 번에 불러오기
import { IoSearchOutline, IoNotificationsOutline, IoCaretDownSharp } from 'react-icons/io5';

const Nav = styled.nav`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* ⭐️ 좌측 메뉴와 우측 아이콘을 양끝으로 갈라줍니다 */
  padding: 0 4%;
  background-color: #141414;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
`;

// 좌측 그룹 (로고 + 메뉴 리스트)을 묶어주는 박스
const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: NetflixLogoImg,
  alt: 'NETFLIX',
})`
  height: 50px; 
  margin-right: 50px;
  cursor: pointer;
  object-fit: contain;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  color: #e5e5e5;
  font-size: 0.85rem;
  padding: 0;
  margin: 0;
  li { 
    cursor: pointer; 
    &:hover { color: #b3b3b3; } 
  }
`;

// ⭐️ 우측 그룹 (검색, 알림, 프로필)을 묶어주는 박스
const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* 아이콘들 사이의 간격 */
`;

// ⭐️ [styled(아이콘명) 방식] 우측 아이콘들 컴포넌트화
const SearchIcon = styled(IoSearchOutline)`
  color: #e5e5e5;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover { color: #b3b3b3; }
`;

const NotiIcon = styled(IoNotificationsOutline)`
  color: #e5e5e5;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover { color: #b3b3b3; }
`;

// 프로필 영역 (사진 + 화살표)을 감싸는 박스
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  
  &:hover {
    /* 프로필에 마우스 올리면 화살표가 살짝 회전하는 넷플릭스 디테일 */
    .caret-icon {
      transform: rotate(180deg);
    }
  }
`;

// 임시 프로필 네모 박스 (나중에 이미지로 바꾸셔도 됩니다!)
const ProfileAvatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: #3b82f6; /* 넷플릭스 기본 파란 프로필 색상 */
  border-radius: 4px;
`;

const CaretIcon = styled(IoCaretDownSharp)`
  color: #e5e5e5;
  font-size: 0.6rem;
  transition: transform 0.2s ease; /* 회전 애니메이션 효과 */
`;

const Header = () => (
  <Nav>
    {/* 좌측 레이아웃 */}
    <LeftNav>
      <Logo />
      <MenuList>
        <li>홈</li>
        <li>시리즈</li>
        <li>영화</li>
        <li>게임</li>
        <li>NEW! 요즘 대세 콘텐츠</li>
        <li>내가 찜한 리스트</li>
        <li>언어별로 찾아보기</li>
      </MenuList>
    </LeftNav>

    {/* 우측 레이아웃 */}
    <RightNav>
      <SearchIcon />
      <NotiIcon />
      <ProfileWrapper>
        <ProfileAvatar />
        <CaretIcon className="caret-icon" /> 
      </ProfileWrapper>
    </RightNav>
  </Nav>
);

export default Header;