import styled from "styled-components";

export const Container = styled.div`

`

export const Main = styled.main`
height: 100vh;
width: 100%;

margin-top: 13rem;
padding: 5rem;

.return {
 font-size: 1.8rem;
 color: #1e3483;
 cursor: pointer;
}

.box {
 height: 25rem;
 width: 40rem;

 flex-direction: column;
 display: flex;
 gap: 1rem;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f0f7fb;
 border-radius: .5rem;
 align-items: center;
 text-align: center;
 padding: 3rem;
 margin: auto;

 margin-top: 5rem;

 h3 {
  font-size: 2.5rem;
  color: #1e3483;

  margin-bottom: 1rem;
 }

 input {
 height: 5rem;
 width: 100%;

 outline: none;
 border: none;

 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 border: 1px solid #dad6d6c2;
 background-color: #f0f7fb;
 border-radius: .5rem;
 padding: 1rem;

 font-size: 1.4rem;
 color: #1e3483;

 &::placeholder {
  opacity: .7;
 }
 }

 button {
 height: 5rem;
 width: 100%;

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

 &:disabled {
 opacity: 50%;
 cursor: no-drop;
 }
 }

 svg {
  font-size: 7rem;
  color: #001358;
 }

 span {
 font-size: 1.4rem;
 color: #001358;
 }
}

@media (max-width: 450px){
 padding: 2rem;
.box {
 height: 20rem;
 width: 100%;
}
}
`