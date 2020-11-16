import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <Container>
      <Text>
        In my 15 weeks at{" "}
        <a href="https://flatironschool.com/" target="_blank" rel="noreferrer">
          Flatiron School
        </a>
        , I have created five apps using Ruby, Javascript, React, and React
        Native. Four of those apps were done with a partner, with the final app
        being a solo project.
      </Text>
      <Text>
        My first project I have ever created was a CLI app written in Ruby. It
        was made with{" "}
        <a href="https://github.com/alerner1" target="_blank" rel="noreferrer">
          Alyssa Lerner
        </a>
        . This app allows you to search Giphy through the Giphy API and save
        gifs in the categories of your choosing. Categories and gifs are saved
        to your account, so you can always go back and view them again. <br />
        <a
          href="https://github.com/mattie43/Mod1-FinalProject-GiFinder"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={40} />
        </a>
      </Text>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Text = styled.p`
  align-self: center;
  text-align: center;
  font-size: 20px;
  width: 85%;
  & a {
    color: white;
  }
`;
