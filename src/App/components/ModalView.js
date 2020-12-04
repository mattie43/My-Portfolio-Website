import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ModalView(props) {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        props.setOpenModal(false);
      }
    },
    [props]
  );

  const handleClick = useCallback(
    (event) => {
      if (event.target.id === "modal") {
        props.setOpenModal(false);
      }
    },
    [props]
  );

  useEffect(() => {
    document.querySelector(".carousel-root").focus();
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

  const settings = {
    renderIndicator: false,
    showStatus: false,
    showThumbs: false,
    swipeable: true,
    emulateTouch: true,
    infiniteLoop: true,
    useKeyboardArrows: true,
    renderArrowPrev: (onClickHandler, hasPrev, label) =>
      hasPrev && (
        <ModalButton type="button" onClick={onClickHandler} title={label}>
          <FaChevronLeft size={32} />
        </ModalButton>
      ),
    renderArrowNext: (onClickHandler, hasNext, label) =>
      hasNext && (
        <ModalButton
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{ right: 0 }}
        >
          <FaChevronRight size={32} />
        </ModalButton>
      ),
  };

  function renderImages() {
    return props.imgs.map((img, i) => (
      <div key={i}>
        <img src={img} alt="" />
      </div>
    ));
  }

  return (
    <Container id="modal">
      <div id="img-div">
        <Carousel {...settings}>{renderImages()}</Carousel>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  background-color: rgba(40, 44, 52, 0.5);
  height: 100vh;
  width: 100%;
  & #img-div {
    max-width: 95%;
  }
  .carousel .slide img {
    max-height: 90vh;
  }
  @media (min-width: 769px) {
    & #img-div {
      max-width: 75%;
    }
  }
`;

const ModalButton = styled.button`
  display: flex;
  position: absolute;
  z-index: 3;
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  color: #f5f5f5;
  top: 50%;
  transform: translateY(-50%);
  & svg {
    z-index: 3;
  }
  ::before {
    content: "";
    height: 100vh;
    width: 100%;
    position: absolute;
    transform: translateY(-50%);
    left: 0;
    transition: background 0.3s ease;
    background: rgba(0, 0, 0, 0.1);
  }
  :hover {
    ::before {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;
