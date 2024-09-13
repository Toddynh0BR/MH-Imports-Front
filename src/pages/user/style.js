import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

display: grid;
grid-template-columns: 30rem 1fr 1fr;
grid-template-rows: 5rem 1fr;
grid-template-areas: 
'header header header'
'nav main main';

header {
 grid-area: header;
 
 align-items: center;
 display: flex;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 padding: 3.5rem;
 z-index: 2;

 img {
 width: 30rem;
 }
}

nav {
 grid-area: nav;

 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 2rem;
 
 box-shadow: 10px 9px 20px rgba(0, 0, 0, 0.1);
 border-right: 1px solid #dad6d6c2;
 background-color: #f0f7fb;
 padding-top: 5rem;

 .img {
 height: fit-content;
 width: fit-content;
 position: relative;

 label {
 height: 4rem;
 width: 4rem;

 position: absolute;
 bottom: 1rem;
 right: 1rem;

 justify-content: center;
 align-items: center;
 display: flex;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 border: 2px solid #f0f7fb;
 border-radius: 50%;

 svg {
 transition: .0s ease-in-out;
 font-size: 2rem;
 color: #f0f7fb;
 }
 
 &:hover {
 background-image: linear-gradient(to top, #f0f7fb, #f0f7fb);
 border-color: #001358;
 cursor: pointer;
 
 svg {
 color:  #001358;
 }
 }
 }

 input {
 display: none;
 }
 }
 img {
 height: 15rem;
 width: 15rem;

 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
 border:  1px solid #dad6d6c2;
 border-radius: 50%;
 }

 h2 {
 font-family: 'Poppins', sans-serif;
 font-weight: 400;
 font-size: 2rem;
 color: #001358;

 display: flex;
 height: 2rem;
 }

 ul {
 width: 100%;

 }

 li {
 font-size: 1.6rem;
 font-weight: 400;
 color: #001358;

 position: relative;

 border-bottom: 1px solid #dad6d6c2;
 margin-right: 3rem;
 list-style: none;
 cursor: pointer;

 padding: 1rem;
 padding-left: 3rem;
 }

 li::before {
 content: ' ';
 position: absolute;
 left: 0;
 top: 0;

 width: 0rem;
 height: 0%;

 background-color: #1e3483;

 }

 li[data-li="true"]{
  background-color: #d8f0fd;
  border-bottom-color: transparent;
  font-weight: 500;

  &::before {
    width: .4rem;
    height: 100%;
  }
 }

 a {
 font-size: 2rem;
 color: #001358;

 position: absolute;
 bottom: 2rem;

 &:hover {
 filter: brightness(50%);
 cursor: pointer;
 }
 }
}

main {
 grid-area: main;

 padding: 5rem 5rem 0rem 5rem;

 .profile {
 margin-left: 10rem;

 h1 {
 font-family: 'Poppins', sans-serif;
 font-weight: 500;
 font-size: 4rem;
 color: #001358;
 }

 .form {
 width: 55%;
 
 margin-top: 4rem;

 flex-direction: column;
 display: flex;
 gap: 1rem;
 }

 .input-wrapper {
  flex-direction: column;
  display: flex;
  gap: .8rem;
 }

 label {
 font-size: 1.6rem;
 font-weight: 500;
 color: #001358;
 }

 input {
 height: 4.5rem;
 width: 100%;

 font-size: 1.4rem;
 font-weight: 500;
 color: #001358;

 box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-color: transparent;
 border-radius: .4rem;
 padding: 2rem;
 outline: none;

 &::placeholder {
 font-size: 1.4rem;
 font-weight: 500;
 color: #001358;
 opacity: .6;
 }
 }

 .circle {
 height: fit-content;
 width: fit-content;

 overflow: hidden;
 border-radius: 50%;
 position: absolute;
 right: 13rem;
 top: 8rem;
 }

 .save {
 height: 0rem;
 width: 0rem;

 justify-content: center;
 align-items: center;
 display: flex;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 2px solid #f0f7fb;
 border-radius: 1rem;

 font-size: 1.4rem;
 color: #f0f7fb;

 pointer-events: none;
 position: absolute;
 right: 10.5rem;
 bottom: 4rem;
 
 p {
 transition: .0s;
 opacity: 0;
 }

 &:hover {
 background-image: linear-gradient(to top,#f0f7fb, #f0f7fb);
 border-color: #001358;
 cursor: pointer;
 color: #001358;
 }

 &[data-save="true"]{
 height: 5rem;
 width: 20rem; 

 pointer-events: all;
 p {
 opacity: 1;
 }
 }
 }

 };

 .shopping {
 width: 100%;
 height: 95%;

 flex-direction: column;
 display: flex;
 gap: 2rem;

 .header {
 height: 12%;
 width: 100%;
 
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;

 align-items: center;
 display: flex;

 span {
 height: 100%;
 flex: 1;

 justify-content: center;
 align-items: center;
 display: flex;

 font-size: 1.6rem;
 font-weight: 500;
 color: #001358;
 cursor: pointer;

 border-bottom: 3px solid    rgba(165, 164, 164, 0.658);
 }

 span[data-status="true"]{
 border-bottom-color:  #001358;
 }
 }

 .main {
 width: 100%;
 height: 50rem;

 flex-direction: column;
 display: flex;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 1px solid #dad6d6c2;
 background-color: #f0f7fb;
 overflow-y: auto;
 }

 .nonOrders {
  font-size: 2rem;
  color: #001358;
  
  margin-top: 2rem;

  align-self: center;
 }

 };

 .password {
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 2rem;

  height: 45rem;
  width: 60rem;

  padding: 3rem;
  margin: auto;
  margin-top: 5rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f0f7fb;
  border-radius: .5rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    color: #001358;
  }



  .input-wrapper {
  height: 7rem;
  width: 60%;

  flex-direction: column;
  display: flex;
  gap: .5rem;

  label {
   font-size: 1.4rem;
   font-weight: 500;
   color: #001358;
  }

  input {
  height: 100%;
  width: 100%;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #dad6d6c2;
  background-color: #f0f7fb;
  border-radius: .4rem;
  padding: 0 1rem;
  outline: none;

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

 button {
 height: 5rem;
 width: 60%;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 2px solid #f0f7fb;
 border-radius: .4rem;

 font-size: 1.4rem;
 font-weight: 500;
 color: #f0f7fb;

 &:hover {
  background-image: linear-gradient(to top,#f0f7fb, #f0f7fb);
  border-color: #001358;
  color: #001358;

  cursor: pointer;
 }
 }
 };
}

.menu {
 display: none;
}

@media (max-width: 450px){
 flex-direction: column;
 display: flex;


 header {
 justify-content: space-between;
 align-items: center;
 display: flex;


 img {
  width: 20rem;
 }
  
 .menu {
  font-size: 2.2rem;
  color: #f0f7fb;
  display: flex;
 }
 }

 nav {
  position: fixed;
  z-index: 5;

  height: 100vh;
  width: 80%;
  transform: translateX(-100%);
 }

 main {
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 2rem;

  .profile {
   width: 100%;
   margin: 0;

   padding: 1rem 3rem;

   .form {
    width: 100%;
   }
   .circle {
   display: none;
   }

   .save {
    &[data-save="true"]{
     position: static;
     width: 100%;

     margin-top: 2rem;
    }
   }
  }
  
  .password {
    width: 100%;

    .input-wrapper, button {
      width: 100%;
    }
  }

  .shopping {
   .header {
    span {
     font-size: 1rem;
    }
   }
  }

 
 }

 &[data-menu="true"]{
  nav {
    transform: translateX(0%);
  }
  main {
   pointer-events: none;
  }
 }
}
`

export const Order = styled.div`
 width: 100%;
 height: 13rem;

 border-bottom: 1px solid #dad6d6c2;
 padding: .5rem 1rem;

&:nth-child(odd) {
  background-color: #f0f7fb;
}
&:nth-child(even) {
  background-color:#f5fbff;
}

 .orderHeader {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 padding-bottom: .0rem;
 border-bottom: 1px solid #dad6d6c2;

 img {
 width: 10rem;
 }

 span {
 width: 10rem;
 font-size: 1.8rem;
 color: #1e3483;

 display: flex;
 border-left: 1px solid #dad6d6c2;
 padding-left: 1rem;
 }
 }

 .orderContent {
 height: 75%;
 flex: 1;

 padding: .5rem 0;
 display: flex;


 .orderCode {
 height: 100%;
 width: 10rem;

 justify-content: space-between;
 flex-direction: column;
 display: flex;
 span {
 font-size: 1.6rem;
 font-weight: 600;
 color: #1e3483;
 }
 p {
 font-size: 1.1rem;
 font-weight: 400;
 color: #1e3483;
 opacity: .6;
 }
 }

 .orderItens {
 height: 100%;
 flex: 1;

 padding-right: 3rem;
 padding-left: 3rem;
 overflow: hidden;

 p {
 font-size: 1.2rem;
 font-weight: 500;
 color: #1e3483;
 width: 100%;
 }
 }
 
 .orderTotal {
 width: 10rem;
 height: 100%;

 justify-content: center;
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: .5rem;

 border-left: 1px solid #dad6d6c2;


 strong {
 font-size: 1.5rem;
 font-weight: 600;
 color: #1e3483;
 }
 p {
 margin-bottom: .5rem;
 font-size: 1.5rem;
 font-weight: 500;
 color: #1e3483;
 }
 span {
 font-size: 1.6rem;
 font-weight: 400;
 color: #1e3483;
 }
 }
 }
`