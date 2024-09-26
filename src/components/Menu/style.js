import styled from "styled-components";

export const Container = styled.menu`
height: 100vh;
width: 100%;

background-color: #d8f0fd;
position: fixed;
z-index: 50;
left: 0;
top: 0;

transform: translateX(-100%);

&[data-menuopen="true"]{
 transform: translateX(0%);
}
header {
 height: 12rem;
 width: 100%;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 padding: 0 2rem;

 justify-content: space-between;
 align-items: center;
 display: flex;

 img {
  width: 25rem;
 }

 svg {
  font-size: 2.5rem;
  color: #f0f7fb;
 }
}

main {
 flex: 1;

 padding: 2rem;

 flex-direction: column;
 display: flex;
 gap: 3rem;

 .InputArea {
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

 ul {
 height: 100%;
 width: 100%;
 
 li {
 height: 5rem;
 width: 100%;

 align-items: center;
 display: flex;
 
 border-bottom: 1px solid #dad6d6c2;
 list-style: none;

 font-size: 2rem;
 color: #001358;
 }
 }
}

.CategoryArea {
 height: fit-content;
 width: 100%;

 .header {
  height: 5rem;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  display: flex;
  
  border-bottom: 1px solid #dad6d6c2;

  span, svg {
   font-size: 2rem;
   color: #001358;
  }
 }

 flex-direction: column;
 display: flex;

 ul {
  max-height: 25rem;
  width: 100%;

  border-radius: 0 0 .4rem .4rem;
  background-color: none;
  overflow-y: auto;


  li {
   height: 0rem;
   width: 100%;
   opacity: 0;
   
   font-size: 0;
   padding: 0;


   &:hover {
    background-color: #d8f0fd;
   }
  }
 }
}

&[data-category="true"]{
.CategoryArea {

 .header {
  svg {
   transform: rotate(-180deg);
  }
 }
 ul {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f0f7fb;
  li {
   height: 3rem;

   opacity: 1;
   padding: 0 .5rem;
   font-size: 2rem;
  }
 }
}  
}
`
