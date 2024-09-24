import styled from 'styled-components';

export const Container = styled.div`

header {
height: 10rem;
width: 100%;

transition: .3s ease-in-out;
position: absolute;
left: 0;
top: 0;

justify-content: center;
align-items: center;
display: flex;
gap: 4rem;

background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
padding: 4rem;
z-index: 2;

img {
 cursor: pointer;
 width: 30rem;
}
}

main {
 padding-top: 10rem;
 height: 100vh;
 flex: 1;

 justify-content: center;
 flex-direction: column;
 align-items: center;
 display: flex;

 img {
 width: 40rem;
 padding-right: 2rem;
 }

 .text {
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 2rem;
 }

 h2 {
 font-size: 3rem;
 color: #1e3483;

 padding-left: 2rem;
 }

 button {
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: transparent;
 border: 3px solid #1e3483;
 border-radius: 10rem;
 padding: 1rem 4rem;

 font-size: 1.5rem;
 color: #1e3483;

 &:hover {
  border: 3px solid transparent;
  background-color: #1e3483;
  cursor: pointer;
  color: #d8f0fd;
 }
 }
}
`