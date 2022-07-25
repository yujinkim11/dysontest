import styled from "styled-components";

const Section1Wrap = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 70vh;
  background-color: #5d5d5d;
`;

const ConWrap = styled.div`
  padding: 100px 0 0 300px;
`;

const Title = styled.div`
  width: 500px;
  height: 80px;
  background-color: #ff6b6b;
  margin-bottom: 50px;
`;
const Content = styled.div`
  width: 300px;
  height: 80px;
  background-color: #ff6b6b;
  margin-bottom: 30px;
`;
const Content2 = styled.div`
  width: 400px;
  height: 80px;
  background-color: #ff6b6b;
`;

export const Section1 = () => {
  return (
    <Section1Wrap>
      <ConWrap>
        <Title></Title>
        <Content></Content>
        <Content2></Content2>
      </ConWrap>
    </Section1Wrap>
  );
};
