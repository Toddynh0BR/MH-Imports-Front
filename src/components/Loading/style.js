import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;

justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
gap: 3rem;

h2 {
 font-size: 2.3rem;
 color: #1e3483;

 display: flex;
 overflow: hidden;
 animation: loadings .7s  infinite;
}

span {
 height: 4rem;
 width: 4rem;

 display: flex;

 border: 3px solid #d8f0fd;
 border-right-color: #40a9ff;
 border-radius: 50%;


 animation: loading .9s linear infinite;
}

@keyframes loading {
    0% {
     transform: rotate(0deg);
    }

    100% {
     transform: rotate(360deg);
    }
}

@keyframes loadings {
 0% {
  width: 12rem
 }

 45% {
  width: 12.5rem;
 }

 75% {
  width: 13.5rem;
 }

 100% {
  width: 14.5rem;
 }
}
`