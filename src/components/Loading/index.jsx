import { Container } from "./style";

import PacmanLoader from 'react-spinners/PacmanLoader';

export function LoadingPage(){
    return(
     <Container>
       <PacmanLoader color="#1e3483" loading={true} size={50} />
       <h2>Carregando...</h2>
     </Container>
    )
}