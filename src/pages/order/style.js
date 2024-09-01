import styled from "styled-components";

export const Container = styled.div`

`

export const Main = styled.main`
 min-height: 100vh;
 flex: 1;

 padding: 4rem;

 margin-top: 12rem;

 .return {
  font-size: 1.8rem;
  color: #1e3483;
  cursor: pointer;
 }

@media (max-width: 450px){
  padding: 1rem;
}
`

export const First = styled.div`
height: 100%;
width: 100%;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
background-color: #f0f7fb;
border-radius: .5rem;
padding: 2rem;

flex-direction: column;
display: flex;
gap: 2rem;

header {
 height: 4rem;
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 h2 {
 font-size: 3.5rem;
 font-weight: 500;
 color: #1e3483;
 }

 .stages {
 width: 25rem;
 height: 4rem;

 align-items: center;
 position: relative;
 display: flex;
 gap: 3rem;

 span {
 font-weight: 500;
 font-size: 2rem;
 color: #1e3483;

 height: 4rem;
 width: 4rem;

 border-radius: 50%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 justify-content: center;
 align-items: center;
 display: flex;
 z-index: 1;
 }

 span:nth-child(1){
  background-color: #1e3483;
  color: #f0f7fb;
 }


 .bar {
 height: 1rem;
 width: 95%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 
 position: absolute;
 left: 1rem;
 z-index: 0;
 }
 }
}

.header {
 height: 4rem;
 width: 100%;

 align-items: center;
 display: flex;

 span {
 font-size: 1.8rem;
 font-weight: 500;
 color: #1e3483;
 }

 .name {
 width: 32rem;
 margin-left: 1rem;

 }

 .price {
 flex: 1;
 }

 .total {
  width: 10rem;
 }

 .action {
 margin-right: 4rem;
 }

}

ul {
 flex: 1;
 overflow: auto;



 li {
 height: 10rem;
 width: 100%;

 align-items: center;
 display: flex;
 gap: 1rem;

 padding: 1rem;

 img {
  height: 8rem;
  width: 8rem;

  border-radius: .5rem;
 }

 span {
  font-size: 1.6rem;
  font-weight: 600;
  color: #1e3483;
 }

 strong {
 font-size: 1.6rem;
 color: #1e3483;

 width: 20rem;
 display: flex;
 }

 .price {
 align-items: center;
 display: flex;
 gap: 1rem;
 flex: 1;

 p {
  font-size: 1.8rem;
  font-weight: 400;
  color: #40a9ff;
 }
 
 .cut {
 text-decoration: line-through;
 font-size: 1.4rem;
 opacity: .7;
 }
 }

 .total {
 display: flex;
 width: 10rem;
 }

 svg {
 font-size: 2.2rem;
 color: #1e3483;

 margin-right: 4rem;

 &:hover {
 cursor: pointer;
 filter: brightness(60%);
 }
 }

&:nth-child(odd) {
  background-color: #f0f7fb;
}
&:nth-child(even) {
  background-color:#f5fbff;
}
 }


}

button {
 width: 20rem;
 height: 4rem;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 1px solid #f0f7fb;
 border-radius: .5rem;
 align-self: flex-end;

 font-size: 1.5rem;
 color: #f0f7fb;

 p {
 transition: .0s;
 }

 &:hover {
 background-image: linear-gradient(to top, #f0f7fb, #f0f7fb);
 border: 1px solid #001358;
 cursor: pointer;
 color: #001358;
 }
}

@media (max-width: 450px){
 height: 60rem;
 padding: 1rem;
 margin-top: 2rem;
 margin-bottom: 2rem;

header {
 .stages {
  display: none;
 }
}

.header {
 display: none;
}

ul {

li {
 gap: .5rem;
 span, strong {
  font-size: 1.4rem;
 }

 img {
  height: 6rem;
  width: 6rem;
 }

 .price {
  display: none;
 }
 strong {
  width: 15rem;
 }
 .total {
  width: 9rem;
 }

 svg {
  font-size: 1.8rem;
  margin-right: 1rem;
 }
}
}
}
`

export const Second = styled.div`
height: 100%;
width: 80%;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
background-color: #f0f7fb;
border-radius: .5rem;
padding: 2rem;
margin: auto;

flex-direction: column;
display: flex;
gap: 2rem;

header {
 height: 4rem;
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 h2 {
 font-size: 3.5rem;
 font-weight: 500;
 color: #1e3483;
 }

 .stages {
 width: 25rem;
 height: 4rem;

 align-items: center;
 position: relative;
 display: flex;
 gap: 3rem;

 span {
 font-weight: 500;
 font-size: 2rem;
 color: #1e3483;

 height: 4rem;
 width: 4rem;

 border-radius: 50%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 justify-content: center;
 align-items: center;
 display: flex;
 z-index: 1;
 }

 span:nth-child(1), span:nth-child(2){
  background-color: #1e3483;
  color: #f0f7fb;
 }

 .bar {
 height: 1rem;
 width: 95%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 
 position: absolute;
 left: 1rem;
 z-index: 0;

 .progress {
  height: 100%;
  width: 30%;

  background-color: #1e3483;

 }
 }
 }
}

main {
 flex: 1;
 display: flex;



 form {
 flex: 1;

 padding: 2rem;

 flex-direction: column;
 display: flex;
 gap: 2rem;


 h3 {
 font-size: 2rem;
 color: #1e3483;
 margin-bottom: 1rem;
 }

 .input-wrapper {
 width: 100%;

 flex-direction: column;
 display: flex;
 gap: .5rem;

 label {
 font-size: 1.4rem;
 color: #1e3483;
 }
 input {
  height: 4.5rem;
  width: 70%;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #dad6d6c2;
  border-radius: .5rem;
  padding: 1rem;
  outline: none;
  border: none;

  font-size: 1.4rem;
  color: #1e3483;

  &::placeholder {
  color: #1e3483;
  opacity: .7;
  }
 }
 }
 }

 form:nth-child(1){
 border-right: 1px solid #dad6d6c2;
 }
}

p {
 font-size: 1.5rem;
 color: #001358;
 opacity: .8;

 align-self: center;
}

.buttons {
 justify-content: space-between;
 align-items: center;
 display: flex;
}

button {
 width: 20rem;
 height: 4rem;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 1px solid #f0f7fb;
 border-radius: .5rem;
 align-self: flex-end;

 p {
 font-size: 1.5rem;
 transition: .0s;
 color: #f0f7fb;
 opacity: 1;
 }

 &:hover {
 background-image: linear-gradient(to top, #f0f7fb, #f0f7fb);
 border: 1px solid #001358;
 cursor: pointer;

 p {
  color: #001358;
 }
 }
}

@media (max-width: 450px){
 width: 100%;
 padding: 1rem;
 margin-top: 2rem;
 margin-bottom: 2rem;

header {
 h2 {
  font-size: 2.5rem;
 }
 .stages {
  display: none;
 }
}

.header {
 display: none;
}

main {
 flex-direction: column;

 form {
  padding: 1rem;
  gap: 1rem;

  .input-wrapper {

  input {
   width: 100%;
  }
  } 
 }

 form:nth-child(1){
 border-right: 0px solid transparent;
 }
}
}
`

export const Third = styled.div`
height: 100%;
width: 50%;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
background-color: #f0f7fb;
border-radius: .5rem;
margin: auto;
padding: 2rem;

flex-direction: column;
display: flex;
gap: 2rem;

header {
 height: 4rem;
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 h2 {
 font-size: 3.5rem;
 font-weight: 500;
 color: #1e3483;
 }

 .stages {
 width: 25rem;
 height: 4rem;

 align-items: center;
 position: relative;
 display: flex;
 gap: 3rem;

 span {
 font-weight: 500;
 font-size: 2rem;
 color: #1e3483;

 height: 4rem;
 width: 4rem;

 border-radius: 50%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 justify-content: center;
 align-items: center;
 display: flex;
 z-index: 1;
 }

 span:nth-child(1), span:nth-child(2), span:nth-child(3){
  background-color: #1e3483;
  color: #f0f7fb;
 }

 .bar {
 height: 1rem;
 width: 95%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 
 position: absolute;
 left: 1rem;
 z-index: 0;

 .progress {
  height: 100%;
  width: 60%;

  background-color: #1e3483;
 }
 }
 }
}

main {
 flex-direction: column;
 display: flex;
 padding: 2rem;
 gap: 2rem;
 flex: 1;

h3 {
 font-size: 2rem;
 color: #1e3483;
 margin-bottom: 1rem;
}

.payment {
 align-items: center;
 display: flex;
 gap: 1rem;
}

span {
 font-size: 1.5rem;
 color: #001358;
}

.checkBox {
 height: 1.8rem;
 width: 1.8rem;
 
 box-shadow: 0 0px 4px rgba(0, 0, 0, .8);
 border: 3px solid #f0f7fb;
 border-radius: 50%;
 cursor: pointer;

 .check {
 height: 100%;
 width: 100%;
 border-radius: 50%;
 background-color: #001358;
 }
}
}

.buttons {
 justify-content: space-between;
 align-items: center;
 display: flex;
}

button {
 width: 20rem;
 height: 4rem;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 1px solid #f0f7fb;
 border-radius: .5rem;
 align-self: flex-end;

 p {
 font-size: 1.5rem;
 transition: .0s;
 color: #f0f7fb;
 opacity: 1;
 }

 &:hover {
 background-image: linear-gradient(to top, #f0f7fb, #f0f7fb);
 border: 1px solid #001358;
 cursor: pointer;

 p {
  color: #001358;
 }
 }
}

@media (max-width: 450px){
 width: 100%;
 padding: 1rem;
 margin-top: 2rem;
 margin-bottom: 2rem;

header {
 h2 {
  font-size: 2.5rem;
 }
 .stages {
  display: none;
 }
}

.header {
 display: none;
}
}
`

export const Fourth = styled.div`
height: 100%;
width: 60%;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
background-color: #f0f7fb;
border-radius: .5rem;
padding: 2rem;
margin: auto;

flex-direction: column;
display: flex;
gap: 2rem;

header {
 height: 4rem;
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 h2 {
 font-size: 3.5rem;
 font-weight: 500;
 color: #1e3483;
 }

 .stages {
 width: 25rem;
 height: 4rem;

 align-items: center;
 position: relative;
 display: flex;
 gap: 3rem;

 span {
 font-weight: 500;
 font-size: 2rem;
 color: #f0f7fb;

 height: 4rem;
 width: 4rem;

 border-radius: 50%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #1e3483;
 justify-content: center;
 align-items: center;
 display: flex;
 z-index: 1;
 }

 .bar {
 height: 1rem;
 width: 95%;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 
 position: absolute;
 left: 1rem;
 z-index: 0;

 .progress {
 height: 100%;
 width: 100%;
 background-color: #1e3483;
 }
 }
 }
}

main {
 display: flex;
 flex: 1;
 gap: 5rem;

 .orders {
 flex-direction: column;
 display: flex;
 height: 40rem;
 flex: 1;

 gap: 1rem;

 span {
 font-size: 1.6rem;
 color: #001358;
 }

 ul {
 height: 100%;
 flex: 1;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 overflow: auto;

 li {
 align-items: center;
 display: flex;
 gap: .5rem;

 img {
 height: 5rem;
 width: 5rem;

 border-radius: .5rem;
 }

 span, strong {
 font-size: 1.2rem;
 color: #001358;
 }

 strong {
 width: 10rem;
 overflow: hidden;
 }

 .price {
 align-items: center;
 display: flex;
 width: 6rem;
  p {
   font-size: 1.3rem;
   color: #40a9ff;
  }
 }

 .total {
 width: 6rem;

 font-size: 1.3rem;
 color: #001358;
 }

 svg {
 font-size: 1.8rem;
 margin-left: .5rem;
 margin-right: .5rem;
 color: #001358;

 &:hover {
 filter: brightness(50%);
 cursor: pointer;
 }
 }
 }
 }
 }

 .info {
  flex-direction: column;
  display: flex;
  gap: 2rem;
  flex: 1;

  h3 {
  font-size: 1.8rem;
  color: #10236d;

  align-items: center;
  display: flex;
  gap: .5rem;

  margin-bottom: .5rem;

  svg {
   font-size: 2.2rem;
   cursor: pointer;
  }
  }

  span {
   font-size: 1.4rem;
   color: #001358;
  }

  .identification {
  flex-direction: column;
  display: flex;
  gap: 1rem;


  }
  .address {
  flex-direction: column;
  display: flex;
  gap: 1rem;


  }
  .payment {
  span {
  text-transform: uppercase;
  font-weight: 500;
  }
  }

  .text {
   font-size: 1.6rem;
   margin-top: 2rem;
   
   width: 30rem;
   display: flex;
  }
 }

}

.buttons {
 justify-content: space-between;
 align-items: center;
 display: flex;
}

button {
 width: 20rem;
 height: 4rem;

 background-image: linear-gradient(to top, #1e3483, #172b78, #10236d, #081b63, #001358);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 1px solid #f0f7fb;
 border-radius: .5rem;
 align-self: flex-end;

 p {
 font-size: 1.5rem;
 transition: .0s;
 color: #f0f7fb;
 opacity: 1;
 }

 &:hover {
 background-image: linear-gradient(to top, #f0f7fb, #f0f7fb);
 border: 1px solid #001358;
 cursor: pointer;

 p {
  color: #001358;
 }
 }
}

@media (max-width: 450px){
 width: 100%;
 padding: 1rem;
 margin-top: 2rem;
 margin-bottom: 2rem;

header {
 h2 {
  font-size: 2.5rem;
 }
 .stages {
  display: none;
 }
}

.header {
 display: none;
}

main {
 flex-direction: column;
 gap: 2rem;

 .orders {
   flex: none;
  height: 50rem;
 }

}
}
`