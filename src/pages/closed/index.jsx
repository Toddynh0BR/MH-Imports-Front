import * as S from './style';

import { FaInstagram } from "react-icons/fa";
import Logo from "../../assets/Header.svg";

import { Footer } from "../../components/footer"

export function Closed() {
    return (
     <S.Container>
      <header>
       <img src={Logo} alt="MH Imports" />
      </header>

      <main>
       <div className="notice">
        <h2>Estamos fechados no momento, visite nossas redes sociais para mais informações.</h2>

        <div className="icon">
         <a href="https://www.instagram.com/mhimportseacessorios?igsh=MTZwaDdtMjR2NnhhZQ%3D%3D" target='blank'>
          <FaInstagram/>
         </a>
        </div>
       </div>
      </main>

      <Footer/>
     </S.Container>
    )
}