import * as S from './style';

import { Link } from "react-router-dom";

import Logo from "../../assets/Header.svg";
import erro from "../../assets/404.png";


export function ERROR404(){
    return (
     <S.Container>
      <header>
       <img src={Logo} alt="MH Imports" />
      </header>

      <main>
        <img src={erro} alt="404" />
        
        <div className="text">
         <h2>Página não encontrada</h2>
         <Link to='/'>
          <button>Voltar</button>
         </Link>
        </div>

      </main>
     </S.Container>
    )
};