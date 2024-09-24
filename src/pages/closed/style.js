import styled from "styled-components";

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
 height: 100vh;
 flex: 1;

 justify-content: center;
 align-items: center;
 display: flex;

 .notice {
  height: 20rem;
  width: 40rem;

  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 2rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f0f7fb;
  border-radius: 1rem;
  padding: 2rem;

  h2 {
   font-size: 1.8rem;
   color: #1e3483;
  }


  .icon {
  height: 3.5rem;
  width: 3.5rem;

  justify-content: center;
  align-items: center;
  display: flex;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f0f7fb;
  border-radius: 1.2rem;
  overflow: hidden;

  svg {
   font-size: 3.5rem;
   color: #1e3483;
   transition: .0s;
  }

  a {
   height: fit-content;
   width: fit-content;
   padding: 0;
  }

  &:hover {
   background-color: #1e3483;
   svg {
    color: #f0f7fb;
   }
  }
  cursor: pointer;
  }

 }
}
`