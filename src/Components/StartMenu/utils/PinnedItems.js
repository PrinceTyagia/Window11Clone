import React from 'react'
import styled from 'styled-components'
import { PinAPIOne, PinAPIThree, PinAPITwo } from '../../API/API';

const PinnedItems = () => {
    return (
      <>
        <Tittle>
          <div>
            <h4>Pinned</h4>
            <button type="button">
              All Apps <span>&#8250;</span>
            </button>
          </div>
        </Tittle>

        <Wrap>
          <nav>
            {PinAPIOne &&
              PinAPIOne.map((value, index) => (
                <div key={index}>
                  <img src={value.pIcon} alt="pinned/icon" />
                  <p>{value.text}</p>
                </div>
              ))}
          </nav>
          
          <nav>
            {PinAPITwo &&
              PinAPITwo.map((value, index) => (
                <div key={index}>
                  <img src={value.pIcon} alt="pinned/icon" />
                  <p>{value.text}</p>
                </div>
              ))}
          </nav>
        </Wrap>
      </>
    );
}

export default PinnedItems

const Tittle = styled.div`
padding:  0 1rem;
div{
  display: flex;
  align-items:center;
  justify-content: space-between;
  h4{
    font-weight: 400;
    color:#000;
    line-height: 1;
    letter-spacing: .5px;
  }
  button{
    outline:none;
    border: none;
    background-color: rgba(255,255,255,0.7);
    backdrop-filter:blur(0.1rem);
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, .2);
    padding: 0.3rem 0.5rem;
    border-radius: 0.245rem;
  }
}`;

const Wrap = styled.div`
padding:0 1rem;
margin: 2px 0 2px 0;
 nav{
  display: flex;
  align-items:center;
  flex-direction: row;
  justify-content: space-between;
  /* padding-left: 1rem; */
  div{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    margin: 0.1vh 0;
    transition: all 250ms cubic-bezier(0.55,0.085,0.68,0.53) 0s;
    &:hover{
     background-color: rgba(255,255,255,0.5);
     filter:brightness(1);
     box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, .2);
     outline:none;
     border:none;
    }
    img{
      width: 2rem;
      height: 2rem;
      object-fit:contain;
      filter:drop-shadow(0.1rem 0.1rem 0.1rem rgba(0,0,0,0.1));
    }
    p{
      font-size:0.85rem;
      font-weight: 400;
      margin-top: 2px;
    }
  } 
}
`;