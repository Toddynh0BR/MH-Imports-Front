import * as S from "./style";

import { MdOutlineMailLock } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Forgot(){
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [email, setEmail] = useState('');
  const [stage, setStage] = useState(1);

  function toggleOverlay() {
    setIsOverlayActive(!isOverlayActive);
  };

  async function handleSend(){
   if (!email.trim()) return alert('Digite seu email para proseguir');
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)) return alert('Digite um email válido.')

   setStage(2)
  }

  return(
   <S.Container>
      <Header 
       conta={toggleOverlay}
      />

      <Signarea 
       isactive={isOverlayActive}
       close={toggleOverlay}
      />

      <S.Main>
        <Link to={-1}>
         <span className="return">Voltar</span>
        </Link>
         <div className="box">
          { stage == 1 ?
           <>
            <h3>Redefinir senha</h3>
         
            <input 
             type="email" 
             placeholder="Digite seu email"
             onChange={(e)=> setEmail(e.target.value)} 
            />
            <button onClick={handleSend}>Proximo</button>
           </>
          :
           <>
           <h3>Redefinir senha</h3>
           <MdOutlineMailLock />
           <span>Um email de verificação foi enviado para <strong>{email}</strong>. <br /> Por favor verifique.</span>
           </>
          }
         </div>
        
      </S.Main>

      <Footer />

   </S.Container>
  )
}