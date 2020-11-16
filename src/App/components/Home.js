import React from "react";
import styled from "styled-components";

import { TLDR } from "../assests/Bio";
import headshot from "../images/headshot.jpg";

function Home(props) {
  return (
    <Container>
      <Img src={headshot} />
      <Bio>{TLDR}</Bio>
    </Container>
  );
}

export default Home;

const Img = styled.img`
  align-self: center;
  max-width: 85%;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Bio = styled.p`
  width: 85%;
  text-align: center;
  align-self: center;
  font-size: 20px;
`;
