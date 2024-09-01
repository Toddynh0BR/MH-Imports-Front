import * as S from "./style";

import { Link } from "react-router-dom";
import { useState } from "react";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";

export function Redefine(){
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [stage, setStage] = useState(1)

  const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };

  function toggleOverlay() {
    setIsOverlayActive(!isOverlayActive);
  };

  async function handleDefine() {
   if (!password.trim()) return alert("Digite sua nova senha para continuar.")
   
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

      <S.Main data-eye={passwordVisible}>
        <Link to={-1}>
         <span className="return">Voltar</span>
        </Link>
         <div className="box">
         { stage == 1 ?
          <>
           <h3>Definir senha</h3>
          
          <div className="input-wapper">
           <input 
            type={passwordVisible ? "text" : "password"} 
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Senha" 
            autocomplete="off"
            name="senha" 
           />
           <div className="Eyes">
           <FiEye 
            className="eye"
            color="#1e3483" 
            onClick={togglePasswordVisibility}
           /> 
           <FiEyeOff
            className="eyeoff"
            color="#1e3483"
            onClick={togglePasswordVisibility} 
           />
           </div>
          </div>

          <button onClick={handleDefine}>Continuar</button>
          </>
         : 
          <>
           <h3>Definir senha</h3>
           <RiLockPasswordLine />
           <span>Senha redefinida com sucesso!</span>
          </>
         }
         </div>
        
      </S.Main>

      <Footer />

   </S.Container>
  )
}