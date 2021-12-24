import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "./Taskbar/MenuIcon";
import StatusIcon from "./Taskbar/StatusIcon";
import Clock from "./Taskbar/Clock";
import startIcon from "./Images/windows-icon/startIcon.png";
import MenuTheme from "./StartMenu/MenuTheme";

const Taskbar = () => {
  const [MenuState, setMenuState] = useState(false);
  const isStartMemuOpen = () => setMenuState(!MenuState);

  return (
    <div>
      <Wrap>
        <MenuButton>
          <div style={{ display: "flex" }}>
            <button type="button" onClick={isStartMemuOpen}>
              <img src={startIcon} alt="start/icon" />
            </button>
            <MenuIcon />
          </div>
        </MenuButton>
        <StatusIcon />
        <Clock />
      </Wrap>
      <StartMenu ifMenuActive={MenuState}>
        <MenuTheme />
      </StartMenu>
    </div>
  );
};

export default Taskbar;

const Wrap = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  z-index: 2000;
  backdrop-filter: blur(0.5rem);
  background-color: rgba(211, 233, 238, 0.5);
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const MenuButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  padding-left: 5rem;
  button {
    outline: none;
    border: 1px solid transparent;
    background: transparent;
    padding: 0.55rem;
    margin: 0 0.05rem;
    opacity: 1;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
      object-fit: contain;
      filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3));
      transition: all 500ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      position: relative;
    }
  }
`;
const StartMenu = styled.main`
  position: absolute;
  left: 27.5vw;
  bottom: 9vh;
  opacity: 1;
  z-index: 2000;
  transition: all 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  opacity: ${(event) => (event.ifMenuActive ? "1" : "0")};
  visibility: ${(event) => event.ifMenuActive ? 'visible' : 'hidden'};
  transform: ${event => event.ifMenuActive ? 'translateY(0%)' : 'translateY(100%)'};
`;
