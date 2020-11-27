import React, { useState } from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
  FaEnvelope,
} from "react-icons/fa";

const LinksObjs = [
  {
    name: "GitHub",
    link: "https://github.com/mattie43",
    bgColor: "#4f545a",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/matt-ericksen-4195ab1b1/",
    bgColor: "#2d72ba",
    icon: FaLinkedinIn,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MattEricksen6",
    bgColor: "#5090fe",
    icon: FaTwitter,
  },
  {
    name: "Medium",
    link: "https://ericksenm93.medium.com/",
    bgColor: "#00ab6c",
    icon: FaMediumM,
  },
];

export default function Links() {
  const [emailCopied, setEmailCopied] = useState(false);
  const iconSize = 38;

  function copyEmail() {
    // navigator.clipboard.writeText("email");

    const textField = document.createElement("textarea");
    textField.innerText = "matt@mattericksen.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 1500);
  }

  function renderLinks() {
    return LinksObjs.map((obj, i) => (
      <ContactContainer
        href={obj.link}
        target="_blank"
        rel="noreferrer"
        key={i}
      >
        <h2 style={{ backgroundColor: obj.bgColor }}>{obj.name}</h2>
        <obj.icon
          color="white"
          size={iconSize}
          style={{ backgroundColor: obj.bgColor }}
        />
      </ContactContainer>
    ));
  }

  return (
    <Container>
      {renderLinks()}
      <CopiedBox copied={emailCopied}>E-mail copied!</CopiedBox>
      <ContactContainer onClick={copyEmail}>
        <h2 style={{ backgroundColor: "#d92121" }}>
          {emailCopied ? "Copied!" : "E-Mail"}
        </h2>
        <FaEnvelope
          style={{ backgroundColor: "#d92121" }}
          color="white"
          size={iconSize}
        />
      </ContactContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  @media (max-width: 768px) {
    bottom: 0;
    left: 50%;
    margin-left: -135px;
  }
  @media (min-width: 769px) {
    flex-direction: column;
    left: 0;
    top: 50%;
    margin-top: -135px;
  }
`;

const ContactContainer = styled.a`
  display: flex;
  text-decoration: none;
  & h2 {
    color: white;
    font-family: TitilliumBold;
    font-size: 0;
    @media (min-width: 769px) {
      font-size: 24px;
    }
    text-align: center;
    align-self: center;
    white-space: nowrap;
    margin: 0;
    padding: 9px 0;
    width: 0;
    overflow: hidden;
    transition: 0.3s ease;
  }
  & svg {
    padding: 8px;
  }
  @media (min-width: 769px) {
    :hover {
      cursor: pointer;
      & h2 {
        width: 104px;
      }
    }
  }
`;

const CopiedBox = styled.p`
  display: flex;
  position: fixed;
  color: white;
  font-size: 20px;
  bottom: 62px;
  left: 50%;
  background-color: #4f545a;
  padding: 0 6px;
  border-radius: 6px;
  margin: 0 0 0 -66.5px;
  opacity: ${(p) => (p.copied ? "1" : "0")};
  transition: opacity 0.2s linear;
  @media (min-width: 769px) {
    display: none;
  }
`;
