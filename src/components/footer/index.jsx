import * as S from './style';
import { FiMail, FiPhone } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

import INSTAGRAM from "../../assets/Instagram.svg";
import QRCODE from "../../assets/qrcode.png";
import MONEY from "../../assets/money.svg";
import MAPS from "../../assets/maps.png";
import PIX from "../../assets/pix.svg";

export function Footer(){
    return(
     <S.Container>
      <div className="Utils">

        <ul>
         <span>Atendimento ao cliente</span>
         <a href="mailto:mhimports007@gmail.com?subject=Contato%20via%20site&body=Olá,%20gostaria%20de%20entrar%20em%20contato%20com%20você." target="_blank">
          <li><FiMail/> mhimport@gmail.com</li>
         </a>
         <li><FiPhone/> 81 99950 7813</li>
         <a href="https://wa.me/5581999507813?text=Olá,%20gostaria%20de%20falar%20com%20você!" target="_blank" >
          <li><FaWhatsapp/> MH IMPORTS</li>
         </a>
         <a  href="https://wa.me/5581999507813?text=Ol%C3%A1!%20Tenho%20uma%20reclama%C3%A7%C3%A3o%20a%20fazer" target="_blank">
          <li><CgDanger/> Reclamações</li>
         </a>
        </ul>

        <ul>
         <span>Sobre a MH IMPORTS</span>
         <li>Sobre nós</li>
         <li>Política</li>
        </ul>

        <div className="Pay-Follow">
        <div className="payment">
         <span>Formas de pagamento</span>

         <div className="icons">
          <div className="box">
           <img src={PIX} alt='pix'/>
          </div>

          <div className="box">
           <img src={MONEY} alt="dinheiro" />
          </div>

          <div className="box">
           <FaCreditCard/>
          </div>
         </div>

        </div>
        
        <ul>
        <span>Siga-nos</span>
        <a href="https://www.instagram.com/mhimportseacessorios?igsh=MTZwaDdtMjR2NnhhZQ%3D%3D" target='blank'>
         <li><img src={INSTAGRAM} alt="logo" /></li>
        </a>
        </ul>
        </div>

      
      </div>

      <div className="Description">
        <p>MH IMPORTS</p>
        <a href="https://maps.app.goo.gl/MGqPigqRmyN5ZRWs9"  target='blank'><img src={MAPS} alt="maps" /> AV. Severino Manoel dos Santos, GALERIA Ferreira, 04, Pão de Açucar, PE</a>
         <a href="https://portfolio-toddy.netlify.app/" target='blank'>Feito por Matheus Augusto</a>
       
      </div>
     </S.Container>   
    )
}