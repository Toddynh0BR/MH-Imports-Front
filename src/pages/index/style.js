import styled from "styled-components";

export const Container = styled.div`
width: 100%;

.whatsapp {
 height: 7rem;
 width: 7rem;

 position: fixed;
 z-index: 3;
 bottom: 2rem;
 right: 2rem;
}
`



export const Main = styled.main`
height: 100%;
width: 100%;

margin-top: 10rem;

flex-direction: column;
display: flex;
gap: 2rem;

padding: 4rem 3rem;

.return {
 font-size: 2rem;
 color: #1e3483;

 cursor: pointer;
}

@media (max-width: 450px){
 padding: 4rem 2rem;
}
`

export const Products = styled.div`
height: fit-content;
width: 100%;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
background-color: #f0f7fb;
border-radius: .4rem;
padding: 1.5rem;

.title {
 height: fit-content;
 width: 100%;

 align-items: center;
 display: flex;
 gap: .2rem;

 border-bottom:  1px solid #dad6d6c2;
 padding-bottom: .8rem;

 span {
 font-size: 2rem;
 font-weight: 500;
 color: #1e3483;
}

}

.products {
 width: 100%;
 padding-top: 2rem;
 margin: auto;

 grid-template-columns: repeat(5, 1fr);
 grid-auto-rows: 29rem;
 display: grid;
 gap: 2rem;
}

h2 {
 font-size: 2rem;
 color: #1e3483;

 margin-top: 2rem;

}

@media (max-width: 450px) {
 padding: .5rem;

 .products {
  width: fit-content;
  grid-template-columns: repeat(2, 50%);
  grid-auto-rows: 24rem;
  gap: .8rem;

  a {
   margin: 0;
   padding: 0;
   width: fit-content;
  }
 }
}
`
