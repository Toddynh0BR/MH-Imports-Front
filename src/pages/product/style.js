import styled from "styled-components";

export const Container = styled.div`

`

export const Main = styled.main`
margin-top: 12rem;
min-height: 100vh;
width: 100%;
padding: 4rem;


.Principal {
 width: 100%;
 height: 100%;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 2rem;
}

.Item {
 width: 90rem;
 height: 50rem;

 display: flex;
 gap: 3rem;
 
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-radius: .5rem;
 padding: 2rem;

 margin-top: 2rem;
 margin-bottom: 2rem;
}

.imgs {
 height: fit-content;
 width: 45rem;

 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: repeat(5, 1fr);
 grid-template-areas: 
 'img1 img0 img0 img0'
 'img2 img0 img0 img0'
 'img3 img0 img0 img0'
 'img4 img0 img0 img0'
 'img5 img0 img0 img0'
 ;
 gap: 1.5rem;

 img {
 height: 8rem;
 width: 8rem;

 border-radius: .4rem;
 object-fit: cover;
 }


 .img0 {
 height: 100%;
 width: 100%;
 grid-area: img0;
 }
 .img1 {
 grid-area: img1;
 }
 .img2 {
 grid-area: img2;
 } 
 .img3 {
 grid-area: img3;
 }
 .img4 {
 grid-area: img4;
 }
 .img5 {
 grid-area: img5;
 }
 .img1, .img2, .img3, .img4, .img5 {
 border-color: #f0f7fb;
 border-style: solid;
 border-width: 3px;
 cursor: pointer;
 }
}

.info {
 flex-direction: column;
 display: flex;
 gap: 1rem;

 height: 100%;
 flex: 1;

 border-left: 1px solid #dad6d6c2;
 padding: 2rem 4rem 1rem 4rem;

 h2 {
 font-size: 2.5rem;
 font-weight: 600;
 color: #1e3483;
 }

 p {
 font-size: 1.5rem;
 font-weight: 400;
 color: #1e3483;
 }

 textarea {
 height: 13rem;
 width: 100%;
 
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 1px solid #dad6d6c2;
 background-color: #f0f7fb;
 border-radius: .5rem;

 padding: 1rem;

 outline: none;
 resize: none;

 &::placeholder {
 font-size: 1.2rem;
 font-weight: 400;
 color: #1e3483;
 opacity: .6;
 }
 }
}

.variation {
 width: 100%;


 flex-direction: column;
 display: flex;

 span {
 font-size: 1.5rem;
 color: #001358;
 margin-bottom: 1rem;
 }

 .variations {
 height: 9rem;
 padding: .3rem;


 flex-direction: column;
 display: flex;
 gap: 1rem;

 overflow: auto;
 }

 .item {
 height: 1.8rem;
 width: 100%;

 align-items: center;
 display: flex;
 gap: 1rem;
 }

 .checkBox {
 height: 1.8rem;
 width: 1.8rem;
 
 box-shadow: 0 0px 4px rgba(0, 0, 0, .8);
 border: 3px solid #f0f7fb;
 border-radius: 50%;
 cursor: pointer;

 .selected {
 height: 100%;
 width: 100%;
 border-radius: 50%;
 background-color: #001358;
 }
 }
}

.config {
 width: 100%;

 justify-content: center;
 align-items: center;
 display: flex;
 gap: 3rem;

 .quantity {
 align-items: center;
 display: flex;
 gap: 1rem;

 svg {
 font-size: 2.2rem;
 color: #1e3483;

 cursor: pointer;
 }

 strong {
 font-size: 1.8rem;
 color: #1e3483;
 }
 }

 button {
 height: 5rem;
 width: 50%;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 1px solid #f0f7fb;
 border-radius: .5rem;

 font-size: 1.6rem;
 font-weight: 400;
 color: #f0f7fb;

 &:hover {
 background-image: linear-gradient(to top, #f0f7fb, #f0f7fb);
 border-color: #001358;
 cursor: pointer;
 color: #001358;
 }
 }
}

.return {
 height: fit-content;
 width: 100%;

 justify-content: center;
 align-items: center;
 display: flex;

 a {
 font-size: 1.6rem;
 color: #001358;
 }
}

.others {
 height: 50rem;
 width: 20rem;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-radius: .5rem;
 padding: 1rem;

 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 1rem;

 span {
 font-size: 1.6rem;
 color: #001358;
 }
 .semelhantes {
  height: 45rem;
  width: 100%;
 }

 .product {
 height: 15rem;
 width: 100%;
 
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: .5rem;

 img {
  height: 10rem;
  width: 13rem;

  border-radius: .5rem;
  object-fit: cover;
 }

 strong {
 font-size: 1.4rem;
 color: #001358;
 }

 p {
 font-size: 1.5rem;
 color: #40a9ff;
 }
 }
}

&[data-selectedimg='1'] .img1,
&[data-selectedimg='2'] .img2,
&[data-selectedimg='3'] .img3,
&[data-selectedimg='4'] .img4,
&[data-selectedimg='5'] .img5 {
 border-color: #001358;
}

@media (max-width: 450px){
 padding: 1rem;
.Item {
 flex-direction: column;

 height: 100%;
 width: 100%;
}

.imgs {
 height: fit-content;
 width: 18rem;

 display: grid;
 grid-template-columns: repeat(5, 1fr);
 grid-template-rows: repeat(5, 1fr);
 grid-template-areas: 
 'img0 img0 img0 img0 img0'
 'img0 img0 img0 img0 img0'
 'img0 img0 img0 img0 img0'
 'img0 img0 img0 img0 img0'
 'img1 img2 img3 img4 img5'
 ;
 gap: 1.5rem;

 img {
 height: 6rem;
 width: 6rem;

 border-radius: .4rem;
 object-fit: cover;
 }


 .img0 {
 height: 100%;
 width: 100%;
 grid-area: img0;
 }
 .img1 {
 grid-area: img1;
 }
 .img2 {
 grid-area: img2;
 } 
 .img3 {
 grid-area: img3;
 }
 .img4 {
 grid-area: img4;
 }
 .img5 {
 grid-area: img5;
 }
 .img1, .img2, .img3, .img4, .img5 {
 border-color: #f0f7fb;
 border-style: solid;
 border-width: 3px;
 cursor: pointer;
 }
}

.info {
 border-left: 0px solid transparent;
}
.others {
 display: none;
}
}
`