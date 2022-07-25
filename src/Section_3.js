import styled from "styled-components";

const Wrap = styled.section`
  margin-top: 80px;
  width: 100%;
  height: 200px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;
const Desc = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  opacity: 0.5;
`;

export const Section_3 = () => {
  return (
    <Wrap>
      <Title>타이틀</Title>
      <Desc>Description</Desc>
    </Wrap>
  );
};
