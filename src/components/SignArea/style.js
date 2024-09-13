import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;

position: fixed;
z-index: 20;
right: 0;
top: 0;

justify-content: center;
align-items: center;
display: flex;

background-color: transparent;
pointer-events: none;

.close {
 font-size: 0rem;
 color: #1e3483;

 position: absolute;
 display: block;
 right: 1rem;
 top: 1rem;
 

 &:hover {
 cursor: pointer;
 color: #000517;
 }
}

main {
 height: 0rem;
 width: 0rem;

 flex-direction: column;
 align-items: center;
 position: relative;
 text-align: center;
 display: flex;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-radius: 1rem;
 padding: 2rem 7rem;
 opacity: 0;

 img {
 height: 0;
 width: 0;
 }

 h2 {
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(to right bottom, #40a9ff, #368ae1, #2d6cc2, #2650a2, #1e3483);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 0;

  margin-top: 1rem;
 }

 span {
 font-family: "Roboto Slab", serif;
 font-weight: 500;
 font-size: 0rem;
 color: #000517;

 margin-bottom: 1rem;
 }

 label {
 font-size: 1.6rem;
 font-weight: 500;
 color: #1e3483;

 align-self: flex-start;
 margin-bottom: .2rem;
 margin-top: 1rem;
 }
 .gradiantBorder {
 width: 0%;

 background-image: linear-gradient(to right bottom, #40a9ff, #368ae1, #2d6cc2, #2650a2, #1e3483);

 border-radius: .5rem;
 height: fit-content;
 padding: .2rem;
 
 &:focus-within {
    -webkit-box-shadow: 0px 0px 37px -4px rgba(64,169,255,1);
-moz-box-shadow: 0px 0px 37px -4px rgba(64,169,255,1);
box-shadow: 0px 0px 37px -4px rgba(64,169,255,1);
 }
 };

 .input-wrapper {
  height: 0rem;
  width: 0%;
 
  background-color: #f0f7fb;
  border-radius: .4rem;
  padding: 0 1rem;

  align-items: center;
  display: flex;
  gap: 1rem;

  svg {
  font-size: 0;
  color: #1e3483;
  }

  input {
  height: 0;
  width: 0;

  background-color: #f0f7fb;
  font-size: 1.5rem;
  font-weight: 500;
  color: #1e3483;

  &::placeholder{
  font-size: 1.4rem;
  font-weight: 500;
  color: #1e3483;
  opacity: .8;
  }
  }
 }

 .forgot {
 font-size: 1.4rem;
 color: #1e3483;

 align-self: flex-start;
 
 &:hover {
 cursor: pointer;
 color: #000517;
 }
 }


 button {
  height: 0rem;
  width: 0%;

  background-image: linear-gradient(to right bottom, #40a9ff, #368ae1, #2d6cc2, #2650a2, #1e3483);
  transition: .3s ease-in-out;
  border-radius: .5rem;
  margin-top: 2rem;
  cursor: pointer;
  border: none;
  opacity: 0;


  p {
  font-size: 1.8rem;
  font-weight: 500;
  color: #f0f7fb;
  }

  &:hover {
  filter: brightness(85%); 
  }

  &:disabled{
   cursor: no-drop;
   filter: brightness(50%);
  }
 }

 .BottomSpan {
 margin-top: 3rem;
 padding-top: 2rem;
 font-size: 1.4rem;
 font-weight: 500;
 color: #1e3483;

 border-top: 1px solid #dad6d6c2;

 strong {
 cursor: pointer;
 }
 }
};

.Eyes {
 height: fit-content;
 width: fit-content;
 margin-bottom: -.5rem;
}

.eye {
 width: 0;
 height: 0;
 opacity: 0;
}

.eyeoff {
 width: 2rem;
 height: 2rem;
 opacity: 1;
}

&[data-eye="true"]{
 .eye {
 width: 2rem;
 height: 2rem;
 opacity: 1;
 }

 .eyeoff {
 width: 0;
 height: 0;
 opacity: 0;
 }
}

&[data-isactive='true']{
 background-color: rgba(171, 238, 255, 0.658);
 pointer-events: all;

 .close {
 font-size: 2.5rem;

 }
 main {
  height: 62rem;
  width: 50rem;
  opacity: 1;

  img {
   height: 7rem;
   width: 7rem;
  }

  h2 {
  font-size: 2.5rem;
  }
  span {
  font-size: 1.2rem;
  }

  .gradiantBorder {
   width: 100%;
  }
  .input-wrapper {
   height: 5rem;
   width: 100%;

   svg {
    font-size: 2rem;
   }
   input {
    height: 100%;
    flex: 1;

    outline: none;
    border: none;
   }
  }

  button {
    height: 5.6rem;
    width: 100%;
    opacity: 1;
  }
 }
}

@media (max-width: 450px){
  &[data-isactive='true']{
 background-color: rgba(171, 238, 255, 0.658);
 pointer-events: all;

 .close {
 font-size: 2.5rem;

 }
 main {
  height: 100vh;
  width: 100%;
  opacity: 1;

  img {
   height: 7rem;
   width: 7rem;
  }

  h2 {
  font-size: 2.5rem;
  }
  span {
  font-size: 1.2rem;
  }

  .gradiantBorder {
   width: 100%;
  }
  .input-wrapper {
   height: 5rem;
   width: 100%;

   svg {
    font-size: 2rem;
   }
   input {
    height: 100%;
    flex: 1;

    outline: none;
    border: none;
   }
  }

  button {
    height: 5.6rem;
    width: 100%;
    opacity: 1;
  }
 }
}
}
`