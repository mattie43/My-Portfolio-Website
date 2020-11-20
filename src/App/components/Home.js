import React from "react";
import styled from "styled-components";

import { TLDR } from "../assests/Bio";
import headshot from "../images/headshot.jpg";

function Home() {
  return (
    <Container>
      <Img src={headshot} />
      <Text>{TLDR}</Text>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  margin: 0 80px;
`;

const Img = styled.img`
  max-width: 85%;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
  width: 45%;
  text-align: center;
  font-size: 35px;
`;
