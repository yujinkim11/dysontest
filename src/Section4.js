import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
`;

const Con = styled.div`
  &:first-child {
  }
  &:nth-child(2) {
  }
  &:last-child {
  }
`;

const Img = styled.div`
  background-color: gray;
`;

const Desc = styled.div``;

export const Section4 = () => {
  return (
    <Container>
      <Title>타이틀 자리</Title>
      <Con>
        <Img>이미지를 찾을 수 없지롱</Img>
        <Desc>설명 절구절구~~~~~</Desc>
      </Con>
    </Container>
  );
};
