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
  width: 90%;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    width: 65%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(40, 44, 52, 0.95);
  align-items: center;
  padding: 20px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  @media (min-width: 769px) {
    justify-content: space-evenly;
    flex-direction: row;
    height: 55%;
  }
`;

const Img = styled.img`
  max-width: 90%;
  max-height: 80%;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);
  @media (min-width: 769px) {
    max-width: 45%;
  }
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 0;
  @media (min-width: 769px) {
    font-size: 30px;
    max-width: 50%;
  }
`;
