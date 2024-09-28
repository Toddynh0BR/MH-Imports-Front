import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background-color: #f0f7fb;


.UP {
 height: 0rem;
 width: 0rem;

 justify-content: center;
 align-items: center;
 display: flex;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border:  1px solid #dad6d6c2;
 background-color: #f0f7fb;
 border-radius: 50%;

 position: fixed;
 bottom: 9rem;
 right: 3.6rem;

 svg {
 font-size: 2.5rem;
 color: #1e3483;
 opacity: 0;
 }
}

.UP:hover {
 filter: brightness(95%);
 cursor: pointer;
}

&[data-show-category="true"]{
 .UP {
 height: 4rem;
 width: 4rem;

 svg {
 opacity: 1;
 }
 } 
}
.whatsapp {
 height: 7rem;
 width: 7rem;

 position: fixed;
 z-index: 3;
 bottom: 2rem;
 right: 2rem;
}
`

export const Ads = styled.div`
height: 40rem;
width: 100%;

justify-content: center;
align-items: center;
display: flex;
position: relative;

margin-top: 12rem;



.ads {
 width: 120rem;
 height: 30rem;
 border-radius: .4rem;


 .swiper {
  width: 100%;
  height: 100%;
  border-radius: .4rem;

 img {
 width: 100%;
 height: 100%;
 border-radius: .4rem;
 }

 }

}

@media (max-width: 450px){
 .ads {
 width: 35rem;
 height: 30rem;

 .swiper {
  width: 35rem;
  height: 30rem;
  overflow: hidden;

 img {
  width: 100%;  
  height: 100%;    
  object-fit: cover; 
 }

 }

 .nonADSM {
  width: 30rem;
  height: 25rem;
  margin: auto;
  img {
    height: 100%;
    width: 100%;
  }
 }
}

.nonADS {
 display: none;
}
}
`

export const Main = styled.main`
height: 100%;
width: 100%;

flex-direction: column;
align-items: center;
justify-content: center;
display: flex;
gap: 2rem;

padding: 4rem 3rem;
@media (max-width: 450px){
 margin-top: 5rem;
 padding: 2rem 1rem;
}
`

export const Offer = styled.div`
height: 37rem;
width: 100%;


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

svg {
 font-size: 1.8rem;
 color: #1e3483;
}
}

.offers {
 width: 100%;
 height: 90%;
 
 align-items: center;
 display: flex;
 gap: 1rem;
 
 overflow: hidden;
 padding-top: .5rem;

}

.swiper {
  width: 100%;
  height: 100%;

  align-items: center;
  display: flex;
  gap: 1rem;

  padding-top: .5rem;
  padding-bottom: .4rem;
  padding: .5rem .3rem .4rem;
}

@media (max-width: 450px){
 height: 33rem;
 padding: .5rem;
}
`

export const High = styled.div`
height: 37rem;
width: 100%;

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

.highs {
 width: 100%;
 height: 90%;
 
 align-items: center;
 display: flex;
 gap: 1rem;
 
 overflow: hidden;
 padding-top: .5rem;

}

.swiper {
  width: 100%;
  height: 100%;

  align-items: center;
  display: flex;
  gap: 1rem;

  padding-top: .5rem;
  padding-bottom: .4rem;
  padding: .5rem .3rem .4rem;
}

@media (max-width: 450px){
  height: 33rem;
  padding: .5rem;
}
`

export const Categories = styled.div`
width: 100%;
height: 7rem;



transition: .3s ease-in-out;
position: fixed;
top: -12rem;
z-index: 10;

&[data-show-category="true"]{
 top: 0rem;
}

.swiper {
 height: 7rem;
 width: 100%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border-right: 1px solid #dad6d6c2;
 border-left: 1px solid #dad6d6c2;
 border-bottom: 5px solid #1e3483;
 transition: .3s ease-in-out;
 background-color: #f0f7fb;

 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 span {
 font-size: 2rem;
 text-transform: uppercase;
 font-weight: 600;
 color: #1e3483;
 }
}

.Others {
 height: 4rem;
 width: 100%;
 
 justify-content: space-between;
 align-items: center;
 display: flex;

 .Category {
 width: fit-content;
 height: 2rem;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: rgb(235, 232, 232);
 padding: 1.3rem 2.5rem;
 border-radius: 2rem;

 justify-content: center;
 align-items: center;
 position: relative;
 display: flex;

 span {
 font-size: 1.4rem;
 font-weight: 500;
 }

 &:hover {
  transition: .3s ease-in-out;
 filter: brightness(95%);
 }

 .Categories {
  width: 0;
  
  left: 0rem;
  top: 2rem;

  transition: .3s ease-in-out;
  flex-direction: column;
  position: absolute;
  display: flex;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  span {
  width: 0;
  height: 0rem;
  font-size: 0;

  transition: .3s ease-in-out;
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: .5rem;
 
  background-color: rgb(235, 232, 232);
  padding: 0 1rem 0 1rem;

  svg {
   font-size: 1.5rem;
  }
  }

  span:first-child {
  border-radius: 1rem 1rem 0 0;
  }

  span:last-child {
  border-radius: 0 0 1rem 1rem;
  }

  span:hover {
  filter: brightness(95%);
  cursor: pointer;
 }
 }
 };

 .OrdeBy {
 width: 13rem;
 height: 2rem;
 
 transition: .3s ease-in-out;
 background-color: rgb(235, 232, 232);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 padding: 1.3rem 2.5rem;
 border-radius: 2rem;
 position: relative;

 &:hover {
 filter: brightness(95%);
 }

 justify-content: center;
 align-items: center;
 display: flex;

 span {
  transition: .3s ease-in-out;
 font-size: 1.4rem;
 font-weight: 500;
 }

 .Orders {
 height: 0;
 width: 0;
 
 transition: .3s ease-in-out;
 flex-direction: column;
 position: absolute;
 display: flex;
 top: 2rem;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border-radius: 1rem;

 span {
 height: 0;
 width: 0;

 transition: .3s ease-in-out;
 font-size: 0;
 align-items: center;
 display: flex;
 gap: .5rem;
 
 background-color: rgb(235, 232, 232) ;
 padding-left: 0rem;
 opacity: 0;

 svg {
  font-size: 1.5rem;
 }
 }

 span:nth-child(1){
 border-radius: 1rem 1rem 0 0;
 }
 span:nth-child(5){
 border-radius: 0 0 1rem 1rem ;
 }

 span:hover {
 filter: brightness(95%);
 cursor: pointer;
 }
 }
 };

 .HoverOrder {
 padding: .5rem 0;
 &:hover .Orders{
 top: 3rem;
 height: 10rem;
 width: 100%;

 span {
 height: 100%;
 width: 100%;
 opacity: 1;
 font-size: 1.4rem;
 padding: .5rem 1.5rem;
 }
 }
 };

 .HoverCategory {
 padding: 1rem 0;
 &:hover .Categories{
 width: 20rem;
  
 left: 0rem;
 top: 3rem;
 
 span {
 width: 100%;
 height: 2.5rem;
 padding: .5rem 1.5rem;
 font-size: 1.4rem;
 display: flex;
 }
 }
 }

}
`

export const Products = styled.div`
width: 100%;

background-color: #f0f7fb;
border-radius: .4rem;
padding: .5rem;

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
 width: fit-content;
 padding-top: 2rem;
 margin: auto;

 grid-template-columns: repeat(5, 1fr);
 grid-auto-rows: 29rem;
 display: grid;
 gap: 2.5rem;
}

@media (max-width: 450px){
 .products {
 grid-template-columns: repeat(2, 1fr);
 grid-auto-rows: 24rem;
 gap: .5rem;

 width: 100%;
 }
}
`
