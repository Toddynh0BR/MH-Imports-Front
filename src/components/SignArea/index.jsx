import * as S from "./style";

import { Link } from "react-router-dom";
import { useState } from "react";

import { FiX, FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import Icon from "../../assets/Icon.svg";

export function Signarea({close, isactive= false}){
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [signin, setSignIn] = useState(true)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return(
     <S.Container data-isactive={isactive}  data-eye={passwordVisible}>
      <main>
        <FiX className="close" onClick={close}/>
        <img src={Icon} alt="MH" />

        <h2>Bem vindo a MH Imports</h2>
        <span>
            Faça login ou crie uma conta para acompanhar seus pedidos e salvar seus dados para mais compras futuras.
        </span>

        { signin ? null : 
        <>
         <label htmlFor="name">Nome</label>
          <div className="gradiantBorder">
           <div className="input-wrapper">
            <FiUser />
            <input type="text" name="name" placeholder="Nome" />
           </div>
          </div>
        </>
        }

        <label htmlFor="email">Email</label>
        <div className="gradiantBorder">
         <div className="input-wrapper">
          <FiMail />
          <input type="email" name="email" placeholder="Email" />
         </div>
        </div>
         
        <label htmlFor="senha">Senha</label>
        <div className="gradiantBorder">
         <div className="input-wrapper">
          <FiLock />
          <input type={passwordVisible ? "text" : "password"} name="senha" placeholder="Senha" autocomplete="off"/>
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
        </div>

        { signin ?  <Link to="/forgot" className="forgot"><strong className="forgot">Esqueceu sua senha?</strong></Link> : null}
       

      
         <button>
          <p>{ signin ? 'Login' : 'Criar conta'}</p>
         </button>

         { signin ? 
         <p className="BottomSpan">Não tem uma conta na MH ainda? <strong onClick={()=> setSignIn(false)}>Criar conta</strong></p>
          : 
         <p className="BottomSpan">Já tem uma conta na MH? <strong onClick={()=> setSignIn(true)}>Fazer login</strong></p>
         }
      </main>
     </S.Container>
    )
}