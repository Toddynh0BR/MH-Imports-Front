import styled from "styled-components";

export const Container = styled.div`
width: 22rem;
height: 100%;



flex-direction: column;
align-items: center;
position: relative;
text-align: center;
display: flex;

box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
border:  1px solid #dad6d6c2;
transition: .3s ease-in-out;
border-radius: .4rem;



.descount {
 position: absolute;
 right: 0;
 top: 0;
 
 display: flex;
 align-items: center;
 justify-content: center;

 height: 1.6rem;
 width: 4.5rem;

 border-radius: 0 .3rem 0 0;
 background-color: #40a9ff;

 p {
  font-size: 1.4rem;
  font-weight: 500;
  color: #f0f7fb;

  margin-left: .5rem;
 }

 svg {
 position: absolute;
 font-size: 1.7rem;
 color: #1e3483;
 left: -.7rem;
 }


};

.popular {
 height: fit-content;
 width: fit-content;

 font-size: 1.6rem;
 font-weight: 400;
 color: #f0f7fb;

 background-image: linear-gradient(to left, #40a9ff, #368ae1, #2d6cc2, #2650a2, #1e3483);
 border-radius: 3rem;
 padding: .1rem 1rem;
 margin-bottom: .2rem;

 position: absolute;
 bottom: 0;
};

.IMAGE {
min-height: 60%;
width: 100%;

justify-content: center;
align-items: center;
position: relative;
display: flex;

border-radius: .4rem .4rem 0 0;
padding: 0 1rem;

span {
 height: 4rem;
 width: 4rem;

 display: flex;

 border: 3px solid #d8f0fd;
 border-right-color: #40a9ff;
 border-radius: 50%;


 animation: loading .9s linear infinite;
}

@keyframes loading {
    0% {
     transform: rotate(0deg);
    }

    100% {
     transform: rotate(360deg);
    }
}

img {
 height: 100%;
 width: 100%;

 transition: .3s ease-in-out;
 object-fit: cover;
}

.add {
 position: absolute;
 bottom: -1.5rem;
 z-index: 5;
 right: 0;

 justify-content: center;
 align-items: center;
 display: flex;

 height: 4.5rem;
 width: 4.5rem;

 background-color: #40a9ff;
 border: 2px solid #f0f7fb;
 border-radius: 50%;

 svg {
 font-size: 2rem;
 color: #f0f7fb;
 }

 &:hover {
 filter: brightness(85%);
 }
}
};

.description {
 height: 100%;
 width: 100%;
 box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
 flex-direction: column;
 display: flex;


 padding: 1rem .5rem;
};

span {
 font-size: 1.6rem;
 font-weight: 400;
 color: #000517;

 -webkit-box-orient: vertical;
 text-overflow: ellipsis; 
 -webkit-line-clamp: 2;
 display: -webkit-box;
 overflow: hidden;


 
 height: 3.7rem;
 width: 100%;

 padding: 0 .5rem;
};
p {
  font-size: 1.4rem;
  font-weight: 400;
  color: #1e3483;
  strong {
  font-size: 2.2rem;
  filter: brightness(98%);
  font-weight: 500;
  }
};

.normalPrice {

  font-size: 1.2rem;
  font-weight: 400;

  opacity: .8;
  
  color: #40a9ff;
  strong {
  text-decoration: line-through ;
  font-size: 1.6rem;
  opacity: .8;
  filter: brightness(98%);
  font-weight: 500;
  }
};

&:hover {
 cursor: pointer;

 border-color:#1e3483;
 transform: scale(102%);
 .IMAGE {
  filter: saturate(1.5) contrast(1.1);
  background-color: #d8f0fd;

  span {
  border: 3px solid #f0f7fb;
  border-right-color: #40a9ff;
  }

  .add {
   opacity: 1;
  }
 }
};

margin: 0;
@media (max-width: 450px){
 width: 100%;
}
`