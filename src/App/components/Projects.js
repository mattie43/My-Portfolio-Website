import React from "react";
import styled from "styled-components";

function Projects(props) {
  return (
    <Container>
      <Info>tests</Info>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Info = styled.p`
  text-align: center;
  font-size: 20px;
`;
