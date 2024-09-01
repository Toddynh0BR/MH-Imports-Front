import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'Roboto', sans-serif;
 transition: .3s ease-in-out;

 ::-webkit-scrollbar {
  width: .5rem;
}

::-webkit-scrollbar-track {
  background: #000517;
}

::-webkit-scrollbar-thumb {
  background: #1e3483; 
  border-radius: 1rem;
}


::-webkit-scrollbar-thumb:hover {
  background: #0f1f57;
}
}

:root {
 font-size: 62.5%;
}

body {
 background-color:  #e2f5ff;

}

a {
 text-decoration: none;
}
`

