import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <p>Home Img</p>
      <p>About Me</p>
      <p>Resume</p>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  width: 100vw;
`;
