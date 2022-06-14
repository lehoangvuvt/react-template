import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: red;
  display: flex;
  flex-flow: row wrap;
`;

export const Left = styled.div`
  width: 20%;
  height: 100%;
  background: blue;
  display: flex;
  flex-flow: row wrap;
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  background: yellow;
  display: flex;
  flex-flow: row wrap;
`;
