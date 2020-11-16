import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

import { TLDR, FULL } from "../assests/Bio";
import headshot from "../images/headshot.jpg";

function Home() {
  const [fullBio, setFullBio] = useState(false);
  return (
    <Container>
      <Img src={headshot} />
      <SwitchContainer>
        <p>TLDR</p>
        <Switch
          checked={fullBio}
          onChange={() => setFullBio(!fullBio)}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#3277a8"
          handleDiameter={26}
          height={20}
          width={52}
        />
        <p>Full Bio</p>
      </SwitchContainer>
      <Text>{fullBio ? FULL : TLDR}</Text>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Img = styled.img`
  max-width: 85%;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);
  align-self: center;
`;

const Text = styled.p`
  width: 85%;
  text-align: center;
  align-self: center;
  font-size: 20px;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  height: 20px;
  align-self: center;
  margin-top: 25px;
  & p {
    text-align: center;
    align-self: center;
    font-size: 22px;
    font-weight: bold;
  }
`;
