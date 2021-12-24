import React,{useState,useEffect} from "react";
import styled from "styled-components";

const MenuIcon = () => {

  const [TimeState, setTimeState] = useState();
  const [DateState, setDateState] = useState();

  useEffect(() => {
    setInterval(() => {
      const timeStamp = new Date();
      setTimeState(timeStamp.toLocaleTimeString());
    },1000)
  }, [])
  useEffect(() => {
    setInterval(() => {
      const DateStamp = new Date();
      setDateState(DateStamp.toLocaleDateString());
    },1000)
  }, [])



  return (
    <>
      <WindowsClock>
        <div>{TimeState}</div>
        <div>{DateState}</div>
      </WindowsClock>
    </>
  );
};

export default MenuIcon;

const WindowsClock = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  flex-direction:column;
  width: 15vw;
  padding-left: 0px !important;
  div{
    font-size:0.85rem;
    display:flex;
    align-items:center;
   padding-left: 0px  !important;
  }
`;