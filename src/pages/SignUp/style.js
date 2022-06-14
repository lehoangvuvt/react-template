import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1615715757401-f30e7b27b912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjAlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FormContainer = styled.div`
  width: 30%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 10px 40px 10px 40px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  &.st768 {
    width: 85%;
  }
  &.st320 {
    width: 95%;
  }
`;

export const Logo = styled.img`
  max-width: 30%;
  margin: auto auto;
`;
