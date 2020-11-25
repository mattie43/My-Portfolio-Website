import React from "react";
import styled from "styled-components";
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import PDF from "../assests/resume.PDF";
import DOCX from "../assests/resume2.DOCX";

export default function Resume() {
  function openFile(bool) {
    bool ? window.open(PDF) : window.open(DOCX);
  }

  return (
    <Container id="resume">
      <Card>
        <h2>RESUME</h2>
        Links to .pdf and .docx versions of my resume.
        <div>
          <AwesomeButton
            href=""
            target="_blank"
            rel="noreferrer"
            className="pdfBtn"
            onPress={() => openFile(true)}
          >
            <FaFilePdf size={22} />
            PDF
          </AwesomeButton>
          <AwesomeButton
            href=""
            target="_blank"
            rel="noreferrer"
            className="docxBtn"
            onPress={() => openFile(false)}
          >
            <FaFileWord size={22} />
            DOCX
          </AwesomeButton>
        </div>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 40px 0;
  width: 90%;
  align-self: center;
  @media (min-width: 769px) {
    width: 65%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background-color: rgba(40, 44, 52, 0.95);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  justify-content: center;
  text-align: center;
  & h2 {
    margin: 0;
  }
  & div {
    display: flex;
    align-self: center;
    width: 100%;
    margin-top: 20px;
    justify-content: space-evenly;
    @media (min-width: 769px) {
      width: 40%;
    }
  }
  & .aws-btn {
    --button-default-height: 40px;
    --button-default-font-size: 26px;
    --button-default-border-radius: 0px;
    --button-horizontal-padding: 8px;
    --button-raise-level: 3px;
    --button-hover-pressure: 2;
    --transform-speed: 0.185s;
    --button-primary-color-light: #d4d9e4;
    --button-primary-border: none;
  }
  & .pdfBtn {
    --button-primary-color: #ff0000;
    --button-primary-color-hover: #ff4040;
    --button-primary-color-dark: #9e0000;
  }
  & .docxBtn {
    --button-primary-color: #007dd7;
    --button-primary-color-hover: #00a8f1;
    --button-primary-color-dark: #003e95;
  }
`;
