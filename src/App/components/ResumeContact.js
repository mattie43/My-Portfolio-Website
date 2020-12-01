import React, { useState } from "react";
import styled from "styled-components";
import { FaFilePdf, FaFileWord, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

import PDF from "../assests/Matt_Ericksen_Resume.PDF";
import DOCX from "../assests/Matt_Ericksen_Resume.DOCX";
import MyButton from "../assests/MyButton";

export default function ResumeContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tooltip, setTooltip] = useState(false);

  function openFile(bool) {
    bool ? window.open(PDF) : window.open(DOCX);
  }

  function sendEmail(e) {
    e.preventDefault();
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 4000);

    emailjs
      .sendForm(
        "service_59fyl4s",
        "template_ifxjykj",
        document.querySelector("#contact-form"),
        "user_CAQSurlILXzbCdcFAjSgu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <Container id="resume">
      <ResumeInfo>
        <h2>Resume</h2>
        Links to .pdf and .docx versions of my resume.
        <Buttons>
          <span onClick={() => openFile(1)}>
            <MyButton
              background={"#d92121"}
              hoverBG={"#282c34"}
              textColor={"#f5f5f5"}
              content={"PDF"}
              icon={<FaFilePdf size={22} />}
            />
          </span>
          <span onClick={() => openFile(0)}>
            <MyButton
              background={"#007dd7"}
              hoverBG={"#282c34"}
              textColor={"#f5f5f5"}
              content={"DOCX"}
              icon={<FaFileWord size={22} />}
            />
          </span>
        </Buttons>
      </ResumeInfo>
      <hr />
      <h2>Contact Me</h2>
      <ContactForm id="contact-form">
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </ContactForm>
      <SubmitContainer onClick={sendEmail}>
        <Tooltip tooltip={tooltip}>
          E-mail was sent, I'll be in touch ASAP!
        </Tooltip>
        <MyButton
          background={"#00ab6c"}
          hoverBG={"#282c34"}
          textColor={"#f5f5f5"}
          content={"Submit"}
          icon={<FaPaperPlane size={22} />}
        />
      </SubmitContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(40, 44, 52, 1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  align-items: center;
  padding: 20px 0;
  margin-bottom: 100px;
  & hr {
    width: 70%;
    margin: 25px 0;
    @media (min-width: 769px) {
      margin: 40px 0;
    }
  }
  & h2 {
    margin: 0;
    font-family: Script;
  }
`;

const ResumeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  text-align: center;
  & h2 {
    margin: 0;
    font-family: Script;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
  @media (min-width: 769px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 60%;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 90%;
  font-family: Script;
  & input,
  textarea {
    font-size: 22px;
    color: white;
    background-color: #494f59;
    padding: 0 6px;
    outline: none;
    font-family: Titillium;
  }
  & textarea {
    height: 160px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  }
  @media (min-width: 769px) {
    width: 45%;
  }
`;

const SubmitContainer = styled.span`
  display: flex;
  position: relative;
`;

const Tooltip = styled.span`
  display: flex;
  position: absolute;
  bottom: 70px;
  width: 80vw;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 10px;
  font-size: 30px;
  opacity: ${(p) => (p.tooltip ? "1" : "0")};
  transition: opacity 0.6s ease;
  background-color: rgba(40, 44, 52, 0.8);
  @media (min-width: 606px) {
    white-space: nowrap;
    width: auto;
  }
`;
