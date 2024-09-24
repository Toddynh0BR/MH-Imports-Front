import * as S from "./style";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';

import { FiX, FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import Icon from "../../assets/Icon.svg";

export function Signarea({close, isactive= false}){
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [signin, setSignIn] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const { signIn } = useAuth();
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

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    async function handleLogin() {
      if (!email.trim() || !password.trim()) {
          return Toast.fire({
            icon: "warning",
            title: 'Preencha todos os campos'
          }); 
      }
  
      try {
          setLoading(true);
          await signIn({ email, password, close });
          
         
      } catch (error) {
          
          if (error.response) {
            Toast.fire({
              icon: "error",
              title: error.response.data.message
            });  
          } else {
            Toast.fire({
              icon: "error",
              title: 'Não foi possível fazer login'
            }); 
          }
      } finally {
          setLoading(false);
      }
    };

    async function handleCreate(){
     if (!name.trim() && !email.trim() && !password.trim()){
      
        return Toast.fire({
          icon: "warning",
          title: 'Preencha todos os campos'
        }); 
     };

     if (!validateEmail(email)){
      return Toast.fire({
        icon: "warning",
        title: 'Digite um email válido'
      }); 
         
     };

     if (password.trim().length < 6) {
        return  Toast.fire({
          icon: "warning",
          title: "Senha deve ter no mínimo 6 caracteres"
        });  
     }

     setLoading(true) 

     await api.post("/users", {name, email, password})
        
     .then(()=> {
            Toast.fire({
              icon: "success",
              title: "Usuário cadastrado com sucesso!"
            });  
            setLoading(false)
            
            signIn({ email, password, close})
          })
     .catch(error => {
       if(error.response){
        Toast.fire({
          icon: "error",
          title: error.response.data.message
        });  
       }else {
         Toast.fire({
           icon: "error",
           title: "Não foi possivel cadastrar o usuário."
         });  
       }
       setLoading(false)
     })
     
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
            <input 
             type="text" 
             name="name" 
             placeholder="Nome" 
             onChange={(e)=> setName(e.target.value)}
            />
           </div>
          </div>
        </>
        }

        <label htmlFor="email">Email</label>
        <div className="gradiantBorder">
         <div className="input-wrapper">
          <FiMail />
          <input 
           type="email" 
           name="email" 
           placeholder="Seu Email" 
           onChange={(e)=> setEmail(e.target.value)}
          />
         </div>
        </div>
         
        <label htmlFor="senha">Senha</label>
        <div className="gradiantBorder">
         <div className="input-wrapper">
          <FiLock />
          <input 
           name="senha" 
           placeholder={ signin ? 'Sua senha' : 'No mínimo 6 caracteres'}
           autoComplete="off"
           type={passwordVisible ? "text" : "password"} 
           onChange={(e)=> setPassword(e.target.value)}
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
        </div>

        { signin ?  <Link to="/forgot" className="forgot"><strong className="forgot">Esqueceu sua senha?</strong></Link> : null}
       

      
         <button 
          onClick={ signin ? handleLogin : handleCreate}
          disabled={loading} 
         >
          <p>{ loading ? 'carregando...' : signin ? 'Login' : 'Criar conta'}</p>
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