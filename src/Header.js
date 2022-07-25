import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const Menu = styled.div`
  font-size: 22px;
  font-weight: 900;
  margin-left: 30px;
`;

export const Header = () => {
  return (
    <Wrap>
      <Logo>LOGO</Logo>
      <MenuWrap>
        <Menu>menu</Menu>
        <Menu>menu</Menu>
        <Menu>menu</Menu>
      </MenuWrap>
    </Wrap>
  );
};
