import React from 'react'
import video from './Images/video.webm';
import bg from './Images/windows-bg-light.jpg'
import styled from 'styled-components'

const Desktop = () => {
    return (
      <div>
        <Background>
          <video autoPlay={true} loop={false} muted={true} playsInline={true}>
            <source src={video} />
          </video>
        </Background>
      </div>
    );
}

export default Desktop

const Background = styled.main`
    background: url(${bg});
    background-position: center;
    background-size:cover;
    background-repeat:no-repeat;
    /* min-height: 100vh; */
    
    video{
        width:90vw;
        height:99.3vh;
        object-fit: cover;
        pointer-events:none
    }
`;

