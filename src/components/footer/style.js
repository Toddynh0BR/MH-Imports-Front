import styled from "styled-components";

export const Container = styled.footer`
height: 45rem;
width: 100%;

padding: 7rem 7rem 0rem 7rem;

box-shadow: 0 -0px 6px rgba(0, 0, 0, 0.1);
border-top:  5px solid #1e3483;
background-color: #f0f7fb;

.Utils {
 width: 100%;

 border-bottom: 2px solid #dad6d6c2;
 padding-bottom: 5rem;

 justify-content: space-evenly;
 display: flex;

 span {
 font-size: 2rem;
 font-weight: 700;
 color: #1e3483;
 }

 li {
 font-size: 1.4rem;
 font-weight: 400;
 color: #000517;
 
 position: relative;
 width: fit-content;
 margin-top: .8rem;
 list-style: none;

 align-items: center;
 display: flex;
 gap: .3rem;

 svg {
 font-size: 2.5rem;
 color: #1e3483;
 }

 img {
 width: 4rem;
 height: 4rem;
 }
 }

 li:hover {
 filter: brightness(50%);
 font-weight: 500;
 cursor: pointer;
 }

 .icons {
 justify-content: center;
 align-items: center;
 display: flex;
 gap: 1rem;
 
 margin-top: 1rem;


 .box {
 width: 8rem;
 height: 4rem;

 box-shadow: 0 -0px 6px rgba(0, 0, 0, 0.1);
 border-radius: .2rem;
 padding: .5rem;
 }

 img {
 width: 100%;
 height: 100%;
 }

 svg {
 width: 100%;
 height: 100%;
 color: #4d4d4d;
 }
 }

 .app {
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 2rem;
 
 img {
 height: 20rem;
 width: 20rem;

 box-shadow: 0 -0px 6px rgba(0, 0, 0, 0.1);
 }
 }

 .Pay-Follow {
 flex-direction: column;
 display: flex;
 gap: 3rem;
 }
}

.Description {
 width: 100%;

 font-size: 1.4rem;
 font-weight: 400;
 color:rgba(77, 77, 77, 0.61) ;

 padding-top: 2rem;

 justify-content: center;
 flex-direction: column;
 align-items: center;
 display: flex;
 gap: 1rem;

 a{
 text-decoration: none;
 font-size: 1.4rem;
 font-weight: 400;
 color: rgba(77, 77, 77, 0.61);

 align-items: center;
 display: flex;
 gap: .5rem;

 img {
 height: 2rem;
 width: 2rem;
 }
 }

 a:last-child {
 margin-top: 2rem;
 }
}

@media (max-width: 450px) {
 height: 75rem;
 padding: 5rem 3rem 0rem 3rem;

 .Utils {
 flex-direction: column;
 display: flex;
 gap: 2rem;
 }

 .Description {
 a {
 font-size: 1.3rem;
 }
 }
}
`