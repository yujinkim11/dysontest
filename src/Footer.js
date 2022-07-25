import styled from "styled-components";

const Wrap = styled.section`
  height: 100px;
  width: 100%;
  background-color: salmon;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const Footer = () => {
  return <Wrap></Wrap>;
};
