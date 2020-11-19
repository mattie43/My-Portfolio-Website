import React from "react";
import styled from "styled-components";
import { FaGithub, FaYoutube } from "react-icons/fa";

export function GiFinder() {
  return (
    <Text style={{ backgroundColor: "#984447" }}>
      The first project I have ever created was a CLI app written in Ruby. It
      was a partner project created with{" "}
      <a href="https://github.com/alerner1" target="_blank" rel="noreferrer">
        Alyssa Lerner
      </a>
      . This app allows you to search Giphy through the Giphy API and save gifs
      in the categories of your choosing. Categories and gifs are saved to your
      account, so you can always go back and view them again.
      <br />
      <br />
      <FaYoutube size={50} style={{ marginRight: "30px" }} />
      <a
        href="https://github.com/mattie43/Mod1-FinalProject-GiFinder"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={50} style={{ marginLeft: "30px" }} />
      </a>
    </Text>
  );
}

export function Whoop() {
  return (
    <Text style={{ backgroundColor: "#5c95ff" }}>
      My second project was my first website written in Ruby, using the Ruby on
      Rails framework. It was another partner project created with Tim Butler.
      We decided to remake Yelp. Allowing users to search, rate, and comment on
      restaurants using the Yelp API.
      <br />
      <br />
      <FaYoutube size={50} style={{ marginRight: "30px" }} />
      <a
        href="https://github.com/mattie43/Mod2FinalProject/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={50} style={{ marginLeft: "30px" }} />
      </a>
    </Text>
  );
}

export function Pokeiron() {
  return (
    <Text style={{ backgroundColor: "#468c98" }}>
      For my third project, we created a SPA in vanilla JS. My partner{" "}
      <a
        href="https://github.com/islommashanlo"
        target="_blank"
        rel="noreferrer"
      >
        Islom Mashanlo
      </a>{" "}
      and I made a Pokemon RPG using the PokeAPI. Users were able to create an
      account, collect items, catch Pokemon, and display themselves on the
      hiscores. For this project, we saved our frontend and backend to seperate
      Githubs. Both links are below. <br />
      <br />
      <FaYoutube size={50} style={{ marginRight: "20px" }} />
      <a
        href="https://github.com/mattie43/Mod3PokemonProject-FrontEnd/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub
          size={50}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
      </a>
      <a
        href="https://github.com/islommashanlo/Mod3-Pokemon-Project-Backend"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={50} style={{ marginLeft: "20px" }} />
      </a>
    </Text>
  );
}

export function Viaggiamo() {
  return (
    <Text style={{ backgroundColor: "#9c528b" }}>
      My last partner project was with{" "}
      <a
        href="https://github.com/islommashanlo"
        target="_blank"
        rel="noreferrer"
      >
        Samantha Lurio
      </a>
      . We made a translation app in React. Using Google translate, and the MDN
      Web Speech API. You could take lessons in five different languages, go on
      an endless run trying to beat your PB, or translate and save messages
      using voice or text. Again, we saved the frontend and backend to different
      Githubs.
      <br />
      <br />
      <FaYoutube size={50} style={{ marginRight: "20px" }} />
      <a
        href="https://github.com/slurio/slurio-viaggiamo-frontend-"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub
          size={50}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
      </a>
      <a
        href="https://github.com/mattie43/Viaggiamo-Backend"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={50} style={{ marginLeft: "20px" }} />
      </a>
    </Text>
  );
}

export function Sellular() {
  return (
    <Text id="projectContainer" style={{ backgroundColor: "#9e6240" }}>
      The solo project. My final project while I was at Flatiron was a React
      Native app called $ellular. I decided to remake the idea of 'LetGo'.
      Allowing users to create accounts, post items they want to sell, browse
      other users items, real-time chat with them, and give them a rating after
      they've purchased their item. I have saved my frontend and backend to
      seperate repos.
      <br />
      <br />
      <FaYoutube size={50} style={{ marginRight: "20px" }} />
      <a
        href="https://github.com/mattie43/Sellular-Frontend"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub
          size={50}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
      </a>
      <a
        href="https://github.com/mattie43/Sellular-Backend"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={50} style={{ marginLeft: "20px" }} />
      </a>
    </Text>
  );
}

const Text = styled.p`
  border-radius: 10px;
  padding: 10px;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 20px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  & a {
    color: inherit;
  }
`;
