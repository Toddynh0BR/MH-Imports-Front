import * as S from "./style";

import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";
import Swal from "sweetalert2";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";

export function Redefine(){
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [signArea, setSign] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [stage, setStage] = useState(1)
  const [menuOpen, setMenu] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };

  async function handleDefine() {
   if (!password.trim()) return Toast.fire({
    icon: "warning",
    title: "Digite sua nova senha para continuar."
  }); 

   if (password.length<6) return Toast.fire({
    icon: "warning",
    title: 'Senha deve ter no mínimo 6 caracteres.'
  });  

    try {
      setLoading(true)
      await api.post(`/usersinfo/reset-password/${token}`, { newPassword: password });
      setStage(2); 
    } catch (error) {
      setStage(1); 
      if (error.response) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message
        });  
      } else {
        Toast.fire({
          icon: "error",
          title: "Erro ao redefinir senha"
        });  
      }
    } finally {
      setLoading(false)
    }
  };

  function Open(){
    setSign(true)
  }
  function Close(){
    setSign(false)
  }

  return(
   <S.Container>
      <Header 
        conta={Open}
        openMenu={() => setMenu(true)}
      />

      <Menu
        close={() => setMenu(false)}
        login={Open}
        menuopen={menuOpen}
      />

      <Signarea 
       isactive={signArea}
       close={Close}
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

          <button 
           onClick={handleDefine}
           disabled={loading}
          >
           { loading ? "Carregando..." : "Confirmar"}
          </button>
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