import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80vh;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 50px;
`;
const ConWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`;
const Con = styled.div`
  width: 400px;
  height: 500px;
  background-color: salmon;
`;

export const Section2 = () => {
  return (
    <Container>
      <Title>Section2</Title>

      <ConWrap>
        <Con />
        <Con />
        <Con />
      </ConWrap>
    </Container>
  );
};
