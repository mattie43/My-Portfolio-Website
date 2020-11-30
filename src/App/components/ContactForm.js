import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

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
    <Container>
      <form id="contact-form">
        <h2>CONTACT ME</h2>
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
        <AwesomeButton type="primary" onPress={sendEmail}>
          <FaPaperPlane size={22} />
          Send
        </AwesomeButton>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
  width: 90%;
  align-self: center;
  @media (min-width: 769px) {
    width: 65%;
  }
  & form {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    background-color: rgba(40, 44, 52, 0.95);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
    justify-content: center;
    text-align: center;
    align-items: center;
    & input {
      width: 80%;
      height: 30px;
      font-size: 22px;
      color: white;
      background-color: #494f59;
      @media (min-width: 769px) {
        width: 55%;
      }
    }
    & textarea {
      height: 16vh;
      width: 90%;
      font-size: 22px;
      color: white;
      background-color: #494f59;
      padding: 1px 2px;
      border-width: 2px;
      border-style: inset;
      border-color: -internal-light-dark(
        rgb(118, 118, 118),
        rgb(133, 133, 133)
      );
      @media (min-width: 769px) {
        width: 65%;
      }
    }
    & h2 {
      margin: 0;
    }
    & .aws-btn {
      margin-top: 10px;
      --button-default-height: 42px;
      --button-default-font-size: 26px;
      --button-default-border-radius: 0px;
      --button-horizontal-padding: 8px;
      --button-raise-level: 3px;
      --button-hover-pressure: 2;
      --transform-speed: 0.185s;
      --button-primary-color-light: #d4d9e4;
      --button-primary-color: #00ab6c;
      --button-primary-color-hover: #08c781;
      --button-primary-color-dark: #004028;
      --button-primary-border: none;
    }
  }
`;
