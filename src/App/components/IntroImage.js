import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaMinus, FaChevronDown } from "react-icons/fa";
import { throttle } from "lodash";

import TextCanvas from "../components/TextCanvas";
import prism from "../assets/images/prism.png";

export default function IntroImage(props) {
  const [hideContent, setHideContent] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 769);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 769) {
      setMobile(true);
      props.setStopAnimation(true);
    } else {
      setMobile(false);
      props.setStopAnimation(false);
    }
  });

  useEffect(() => {
    const throttleHideContent = throttle(checkHideContent, 300);
    window.addEventListener("scroll", throttleHideContent);
    return () => {
      window.removeEventListener("scroll", throttleHideContent);
    };
  });

  function scrollToWork() {
    document.getElementById("projects").scrollIntoView();
  }

  function checkHideContent() {
    const el = document.querySelector("#Whoop");
    if (
      !hideContent &&
      el.getBoundingClientRect().top < window.innerHeight / 2
    ) {
      setHideContent(true);
    } else if (
      hideContent &&
      el.getBoundingClientRect().top > window.innerHeight / 2
    ) {
      setHideContent(false);
    }
  }

  return (
    <>
      <TopDiv />
      <Container prism={prism}>
        {hideContent ? null : (
          <>
            <Info>
              <p>Hey, I'm</p>
              {mobile ? (
                <div>
                  <FaMinus size={20} />
                  <span>
                    Matt <br />
                    Ericksen
                  </span>
                  <FaMinus size={20} />
                </div>
              ) : (
                <TextCanvas
                  stopAnimation={props.stopAnimation}
                  mobile={mobile}
                />
              )}
            </Info>
            <WorkButton onClick={scrollToWork}>
              <FaChevronDown size={35} />
              My Work
            </WorkButton>
          </>
        )}
      </Container>
    </>
  );
}

const TopDiv = styled.div`
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-image: ${(p) => `url(${p.prism})`};
  background-size: 100vh;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  & a {
    color: inherit;
  }
`;

const Info = styled.div`
  text-align: center;
  font-family: Script;
  font-size: 2rem;
  & p {
    margin: 0;
  }
  & canvas {
    margin-bottom: 52px;
  }
  & div {
    display: flex;
    align-items: center;
    & span {
      font-size: 4rem;
      font-weight: bold;
      margin: 20px;
      line-height: 1.2;
      letter-spacing: 0.3rem;
    }
    & svg {
      transform: scaleX(2);
    }
  }
  @media (min-width: 769px) {
    font-size: 3.5rem;
    & p {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media (max-height: 800px) {
    & p {
      top: 12%;
    }
    & canvas {
      margin-bottom: 252px;
    }
  }
  @media (min-height: 1200px) {
    & canvas {
      margin-bottom: -400px;
    }
  }
  @media (min-height: 2000px) {
    & canvas {
      margin-bottom: -800px;
    }
  }
`;

const WorkButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  :hover {
    color: #00adb5;
    transition: 0.4s ease;
  }
  & svg {
    animation: wave 0.6s infinite alternate ease;
    margin-right: 10px;
  }
  @keyframes wave {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(10px);
    }
  }
  @media (min-width: 769px) {
    bottom: 20px;
  }
`;
