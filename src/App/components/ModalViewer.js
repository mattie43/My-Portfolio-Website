import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CrossfadeImage from "react-crossfade-image";
import { useSwipeable } from "react-swipeable";

export default function ModalViewer(props) {
  const [currentImg, setCurrentImg] = useState(0);

  const changeImage = useCallback(
    (forward) => {
      const imgLength = props.imgs.length;
      if (forward) {
        if (currentImg + 1 === imgLength) {
          setCurrentImg(0);
        } else {
          setCurrentImg(currentImg + 1);
        }
      } else if (currentImg - 1 === -1) {
        setCurrentImg(imgLength - 1);
      } else {
        setCurrentImg(currentImg - 1);
      }
    },
    [currentImg, props.imgs]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        props.setOpenModal(false);
      } else if (event.key === "ArrowRight") {
        changeImage(true);
      } else if (event.key === "ArrowLeft") {
        changeImage(false);
      }
    },
    [props, changeImage]
  );

  const handleClick = useCallback(
    (event) => {
      if (event.target.id === "modal") {
        props.setOpenModal(false);
      }
    },
    [props]
  );

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => changeImage(true),
    onSwipedRight: () => changeImage(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (props.imgs) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("click", handleClick);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    };
  }, [props, handleKeyDown, handleClick]);

  return (
    <ModalContainer img={props.imgs} id="modal">
      <FaTimes
        id="modal-x"
        size={55}
        onClick={() => props.setOpenModal(false)}
      />
      <FaChevronLeft
        id="modal-left"
        size={65}
        onClick={() => changeImage(false)}
      />
      <ImgContainer {...handleSwipe}>
        <CrossfadeImage src={props.imgs[currentImg]} alt="" />
      </ImgContainer>
      <FaChevronRight
        id="modal-right"
        size={65}
        onClick={() => changeImage(true)}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgba(40, 44, 52, 0.5);
  height: 100vh;
  width: 100%;
  z-index: 3;
  & svg {
    cursor: pointer;
  }
  & #modal-x {
    position: absolute;
    top: 15px;
    right: 20px;
  }
  & #modal-left {
    position: absolute;
    left: 0;
  }
  & #modal-right {
    position: absolute;
    right: 0;
  }
  @media (min-width: 769px) {
    & #modal-left {
      left: 4%;
    }
    & #modal-right {
      right: 4%;
    }
  }
  @media (min-width: 1200px) {
    & #modal-left {
      left: 8%;
    }
    & #modal-right {
      right: 8%;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 70%;
  & img {
    width: 100%;
  }
`;
