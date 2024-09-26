import styled from "styled-components";

export const Container = styled.div`
height: 12rem;
width: 100%;

transition: .3s ease-in-out;
position: absolute;
left: 0;
top: 0;

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

.inputArea {
 width: 80rem;
 justify-self: center;

 position: relative;

 .results {
 height: fit-content;
 width: 100%;
 
 position: absolute;
 top: 5rem;
 
 flex-direction: column;
 display: flex;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-radius: .5rem;
 padding: 0rem 1rem;

 .result {
 height: 4rem;
 width: 100%;

 align-items: center;
 display: flex;
 
 p {
 font-size: 1.4rem;
 color: #001358;
 }

 &:hover {
  filter: brightness(90%);
 }
 }
 }
}

.Utils {
 justify-content: space-evenly;
 align-items: center;
 display: flex;
 gap: 3rem;

 
 svg {
 font-size: 3rem;
 cursor: pointer;
 color: #f0f7fb;
 }

 .User {
 position: relative;
 padding-top: 1rem;
 padding-bottom: 1rem;

 .HoverUser {
 display: none;
 }

 .userIcon{
  height: 5rem;
  width: 5rem;

  border-radius: 50%;
 }
 }

 .User:hover .HoverUser {
 height: 9rem;
 width: 12rem;
 
 position: absolute;
 bottom: -9rem;
 right: .5rem;

 justify-content: flex-start;
 flex-direction: column;
 display: flex;
 
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-radius: .2rem;
 z-index: 3;

 .arrow-up { 
    width: 0;
    height: 0;
    border-left: 1.5rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-bottom: 1rem solid #f0f7fb;
    position: absolute;
    top: -1rem;
    right: -1rem;
    transform: translateX(-50%);
 }
 
 span {
 height: 3rem;
 
 font-size: 1.2rem;
 font-weight: 400;
 color: #000517;

 white-space: nowrap;
 padding-left: 1rem;

 align-items: center;
 display: flex;
 }

 span:hover {
 background-color: #e9eff3;
 cursor: pointer;
 color: #000;
 }
 
 }

 .HoverUser:hover {
 height: 9rem;
 width: 12rem;
 
 position: absolute;
 bottom: -10rem;
 right: .5rem;

 justify-content: flex-start;
 flex-direction: column;
 display: flex;
 
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-radius: .2rem;
 z-index: 3;

 .arrow-up { 
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid #f0f7fb;
    position: absolute;
    top: -1rem;
    right: 0rem;
    transform: translateX(-50%);
 }
 
 span {
 height: 3rem;
 
 font-size: 1.2rem;
 font-weight: 400;
 color: #000517;

 white-space: nowrap;
 padding-left: 1rem;

 align-items: center;
 display: flex;
 }

 span:hover {
 background-color: #e9eff3;
 cursor: pointer;
 color: #000;
 }
 }



 .Cart {
  position: relative;
  padding-bottom: 2rem;
  padding-top: 2rem;
  z-index: 3;

 .HoverCart {
   height: 0rem;
   width: 0rem;

   position: absolute;
   bottom: -20rem;
   right: -.8rem;
   z-index: 3;

   .EmptyCart {
    opacity: 0;
    height: 0%;
    flex: 0;
    z-index: 3;

   svg {
    font-size: 0rem;
    opacity: 0;
   }

   span {
    font-size: 0rem;
    opacity: 0;
   }
   }

   .FilledCart {
    display: none;
    height: 0rem;
    flex: 0;
    z-index: 3;

    transition: .0s ease-in-out;

    img {
     height: 0rem;
     width: 0rem;
    }

    strong {
     font-size: 0rem;
     width: 0rem;
    }

    p {
     font-size: 0rem;
    }
   }
 }
 }

 .Cart:hover .HoverCart {
 height: 20rem;
 width: 35rem;
 z-index: 3;

 justify-content: flex-start;
 flex-direction: column;
 display: flex;
 
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-radius: .2rem;
 z-index: 3;


 .EmptyCart{
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 1rem;

  height: 100%;
  opacity: 1;
  flex: 1;

  svg {
   font-size: 4rem;
   opacity: 1;
   color: rgb(73, 73, 73);
  }

  span {
  align-self: center;

  font-size: 1.5rem;
  font-weight: 500;
  opacity: 1;
  color: rgb(73, 73, 73);
  }
 }

 .FilledCart {
  height: 16rem;
  flex: 1;

  flex-direction: column;
  display: flex;

  overflow: auto;

  a:nth-child(odd) {
   background-color: #f0f7fb;
  }

  a:nth-child(even) {
   background-color: #fff;
  }
  .item {
   height: 6rem;
   width: 100%;
   
   padding: 1rem;
   
   align-items: center;
   display: flex;
   gap: 1rem;

   img {
    height: 4rem;
    width: 4rem;

    border-radius: .3rem;
  }

  span {
   font-size: 1.2rem;
   color: #001358;
  }
  strong {
   font-size: 1.3rem;
   color: #001358;

   overflow: hidden;
   align-items: center;
   display: flex;
   gap: 1rem;
   width: 20rem;

   span {
    font-size: 1rem;
    font-weight: 400;
   }
  }

  p {
   font-size: 1.5rem;
   color: #40a9ff;
  }
  }
 }

 .arrow-up { 
    width: 0;
    height: 0;
    border-left: 1.5rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-bottom: 1rem solid #f0f7fb;
    position: absolute;
    top: -1rem;
    right: -1rem;
    transform: translateX(-50%);
 }
 }
}

.menu, .cart {
 display: none;
}

@media (max-width: 450px){
 padding: 1rem 2rem;
 height: 13rem;

 grid-template-rows: repeat(2, 1fr);
 grid-template-areas:     
   "menu logo cart"
   "input input input";
 display: grid;
 row-gap: 0rem;
 
 .inputArea {
  grid-area: input;
  width: 100%;
 }
 .Utils{
  display: none;
 }

 img {
 width: 20rem;
 grid-area: logo;
 }

 .menu {
 display: flex;

 font-size: 3rem;
 cursor: pointer;
 color: #f0f7fb;
 grid-area: menu;
 }
 .cart {
 display: flex;
 
 font-size: 3rem;
 cursor: pointer;
 color: #f0f7fb;
 grid-area: cart;
 }
}
`