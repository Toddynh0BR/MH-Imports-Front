import styled from "styled-components";

export const Container = styled.div`
  height: 4.5rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;

  border: 2px solid transparent;
  background-color: #f0f7fb;
  border-radius: .3rem;
  padding: 0rem 2rem;


  &:focus-within {
    border-color: #40a9ff;

    svg {
     color: #40a9ff;
    }
  }

  input {
    background: none;
    outline: none;
    border: none;

    font-size: 1.4rem;
    font-weight: 500;
    color: #000517; 

    height: 100%;
    flex: 1;

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
      color: rgb(73, 73, 73); 
    }
  }

  svg {
    color: rgb(73, 73, 73);
    cursor: pointer;
  }
`;
