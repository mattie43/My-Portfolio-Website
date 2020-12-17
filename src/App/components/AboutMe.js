import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import keebs from "../assets/images/keebs.png";
import keebs90 from "../assets/images/keebs90.png";

export default function AboutMe(props) {
  return (
    <Container imgMobile={keebs90} imgPC={keebs} open={props.aboutMeOpen}>
      <FaTimes size={45} onClick={() => props.setAboutMeOpen(false)} />
      <p>
        My name is Matt Ericksen, and I am a Full Stack Web Developer. I come
        from a background of helping work and run a family owned Construction
        business, as well as, working in Landscaping. I'm a graduate from{" "}
        <a href="https://flatironschool.com/" target="_blank" rel="noreferrer">
          Flatiron School
        </a>{" "}
        with a certificate in Software Engineering from their immersive 15 week
        500+ hour program.
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 3;
  font-size: 1.5rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${(p) => `url(${p.imgMobile})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 50%;
  transform: translate(${(p) => (p.open ? "0, -50%" : "101%, -50%")});
  transition: transform 1s ease;
  align-items: center;
  @media (min-width: 769px) {
    height: auto;
    width: 75%;
    left: 50%;
    font-size: 1.8rem;
    transform: translate(${(p) => (p.open ? "-50%, -50%" : "76%, -50%")});
    transition: transform 1.3s ease;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      ${(p) => `url(${p.imgPC})`};
  }
  & a {
    color: inherit;
  }
  & p {
    padding: 0 40px;
    text-align: justify;
    @media (min-width: 769px) {
      padding: 0 15vw;
    }
  }
  & svg {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }
  }
`;
