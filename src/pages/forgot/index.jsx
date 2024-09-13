import * as S from "./style";

import { MdOutlineMailLock } from "react-icons/md";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

export function Forgot(){
  const [signArea, setSign] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [stage, setStage] = useState(1);
  const [menuOpen, setMenu] = useState(false);

  async function handleSend(){
   if (!email.trim()) return alert('Digite seu email para prosseguir');
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)) return alert('Digite um email válido.')

    try {
      setLoading(true)
      await api.post("/usersinfo/forgot", { email });
      setStage(2); 
    } catch (error) {
      setStage(1); 
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao redefinir senha");
      }
    } finally {
      setLoading(false)
    }
  }


  function toggleOverlay() {
    setIsOverlayActive(!isOverlayActive);
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
       close={()=> setMenu(false)}
       login={toggleOverlay}
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