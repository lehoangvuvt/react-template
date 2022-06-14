import { Outlet } from "react-router-dom";
import { Container, Left, Right } from "./style";

const Layout = () => {
  return (
    <Container>
      <Left></Left>
      <Right>
        <Outlet />
      </Right>
    </Container>
  );
};

export default Layout;
