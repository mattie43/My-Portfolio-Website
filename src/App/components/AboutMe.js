import React from "react";
import styled from "styled-components";

import * as BIO from "../assests/Bio";
import headshot from "../images/headshot.jpg";

function Home() {
  return (
    <Container>
      <Card>
        <Img src={headshot} />
        <Text>{BIO.SECTION1}</Text>
      </Card>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  width: 65%;
  height: 70%;
  background-color: #282c34;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
`;

const Img = styled.img`
  max-width: 45%;
  max-height: 80%;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
  max-width: 30vw;
  /* max-height: 60vh; */
  text-align: center;
  font-size: 35px;
`;
