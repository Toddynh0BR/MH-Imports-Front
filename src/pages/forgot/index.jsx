import * as S from "./style";

import { MdOutlineMailLock } from "react-icons/md";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function Forgot(){
  const [loading, setLoading] = useState(false);
  const [signArea, setSign] = useState(false);
  const [menuOpen, setMenu] = useState(false);
  const [stage, setStage] = useState(1);

  const [email, setEmail] = useState('');

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

  async function handleSend(){
   if (!email.trim()) return Toast.fire({
    icon: "warning",
    title: 'Digite seu email para prosseguir'
  }); 
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)) return Toast.fire({
    icon: "warning",
    title: 'Digite um email válido'
  }); 

    try {
      setLoading(true)
      await api.post("/usersinfo/forgot", { email });
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
  }

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
       close={()=> setMenu(false)}
       login={Open}
       menuopen={menuOpen}
      />

      <Signarea 
       isactive={signArea}
       close={Close}
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
             id="email"
             name="email"
             type="email" 
             placeholder="Digite seu email"
             onChange={(e)=> setEmail(e.target.value)} 
            />
            <button 
             onClick={handleSend}
             disabled={loading}
            >
            { loading ? "Carregando..." : "Proximo"}
            </button>
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