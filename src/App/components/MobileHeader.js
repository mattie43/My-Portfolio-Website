import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { MorphReplace } from "react-svg-morph";

function MobileHeader(props) {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <Container>
      <MorphReplace width={100} height={100}>
        {navBarOpen ? (
          <FaTimes
            className="icons"
            size={34}
            style={{ margin: 14 }}
            onClick={() => setNavBarOpen(false)}
          />
        ) : (
          <FaBars
            className="icons"
            size={34}
            style={{ margin: 14 }}
            onClick={() => setNavBarOpen(true)}
          />
        )}
      </MorphReplace>
      <p>Home</p>
      <p>testing mobile</p>
      <p>WORD</p>
    </Container>
  );
}

export default MobileHeader;

const Container = styled.div`
  display: flex;
  width: 100vw;
`;
