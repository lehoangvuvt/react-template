import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #004e92,
    #000428
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #004e92,
    #000428
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: appear 0.2s ease;
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
