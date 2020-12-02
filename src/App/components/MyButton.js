import React from "react";
import styled from "styled-components";

export default function MyButton(props) {
  return (
    <Button
      background={props.background}
      textColor={props.textColor}
      hoverBG={props.hoverBG}
    >
      {props.icon}
      {props.content}
    </Button>
  );
}
const Button = styled.span`
  font-size: 1.4rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: 300ms ease all;
  padding: 2px 8px;
  position: relative;
  cursor: pointer;
  color: ${(p) => p.textColor};
  background: ${(p) => p.background};
  :hover {
    color: ${(p) => p.background};
    background: ${(p) => p.hoverBG};
  }
  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    transition: 600ms ease all;
    background: ${(p) => p.background};
  }
  ::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  :hover:before,
  :hover:after {
    width: 100%;
    transition: 600ms ease all;
  }
  & svg {
    margin-right: 8px;
  }
`;
