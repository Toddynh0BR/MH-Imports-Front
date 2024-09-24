import * as S from "./style";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import Swal from "sweetalert2";

import defaultUser from "../../assets/default.svg";
import HeaderLogo from "../../assets/Header.svg";
import MHblack from "../../assets/MHblack.svg";

import $ from 'jquery';
import 'jquery-mask-plugin';

import { ProgressCircle } from '../../components/progressCircle';
import { FiCamera, FiEye, FiEyeOff } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

export function User(){
    const { local } = useParams();
    
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const [status, setStatus] = useState('tudo');
    const [menuOpen, setMenu] = useState(false);
    const [progress, setProgress] = useState(0);
    const [page, setPage] = useState(local);
    const [save, setSave] = useState(false);

    const [avatar, setAvatar] = useState(defaultUser);
    const [avatarFile, setAvatarFile] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [phone, setPhone] = useState('');
    const [address, setAddres] = useState('');
    const [complement, setComplement] = useState('');

    const [password, setPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [Orders, setOrders] = useState([  
    ]);
    const [orders, setFilter] = useState(Orders)

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


    useEffect(()=> {
     if (!Orders.length) return
     if (status == 'tudo') setFilter(Orders);
     if (status == 'pendente') setFilter( Orders.filter(Orders => Orders.info.status == 'pendente'))
     if (status == 'preparando') setFilter( Orders.filter(Orders => Orders.info.status == 'preparando'))
     if (status == 'pronto') setFilter( Orders.filter(Orders => Orders.info.status == 'pronto'))
     if (status == 'finalizado') setFilter( Orders.filter(Orders => Orders.info.status == 'finalizado'))
     if (status == 'cancelado') setFilter( Orders.filter(Orders => Orders.info.status == 'cancelado'))

    }, [status])//filtrar os items do historico


    function formatCurrency(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };//formatar valores como 11.5 para 11,50 e mostra-los no historico

    function formatDate(dateString) {
      const date = new Date(dateString.replace(' ', 'T'));
      const formattedDate = date.toLocaleDateString('pt-BR');
      const formattedTime = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      return { formattedDate, formattedTime };
    };//formatar o horario e data

    function cutName(Name) {
        const nameParts = Name.split(' ');
      
        if (nameParts.length === 1) {
            return nameParts[0];
        }
        return `${nameParts[0]} ${nameParts[1]}`;
    };//cortar o nome de usuario para mostrar apenas primeiro e segundo nome


    useEffect(() => {
        let calculatedProgress = 0;
      
        if (name) calculatedProgress += 20;
        if (email) calculatedProgress += 20;
        if (phone) calculatedProgress += 20;
        if (address) calculatedProgress += 20;
        if (complement) calculatedProgress += 20;
      
        setProgress(calculatedProgress);
    }, [name, email, phone, address, complement]);//calcular progresso
  

    const validatePhone = (phone) => {
      const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
      return phoneRegex.test(phone);
    };//verificar se telefone é valido

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email); 
    };//verificar se email está correto
    

    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };
    const handleTouchEnd = () => {
      if (touchStart - touchEnd > 50) {
       setMenu(false)
      }
    };//funçoes mobal para fechar nav apenas deslizando o dedo


    async function fetchUser(){
      const Response = await api.get("/users")
      
      setName(Response.data.user.name)
      setEmail(Response.data.user.email)

      if (Response.data.user.avatar) {
        setAvatar(`${api.defaults.baseURL}/files/${Response.data.user.avatar}`);
      }
      const ResponseInfo = await api.get("/usersinfo")
      
      if (ResponseInfo.data) {
        setPhone(ResponseInfo.data.user_info.phone || '')
        setAddres(ResponseInfo.data.user_info.address || '')
        setComplement(ResponseInfo.data.user_info.complement || '')
      }
    };//pegar informaçoes do usuario 

    async function fetchOrders(){
      const Response = await api.get('/orders');

      if (!Response.data) return setOrders([]);
      setOrders(Response.data)
      setFilter(Response.data)
    };//pegar orders do usuario

    async function handleUpdate(){
      if (!name.trim())  return Toast.fire({
        icon: "warning",
        title: 'Nome não pode ficar vazio'
      }); 
      if (!email.trim()) return Toast.fire({
        icon: "warning",
        title: 'Email não pode ficar vazio'
      }); 

      if (phone || address || complement){
        if (!validatePhone(phone)) return Toast.fire({
          icon: "warning",
          title: 'Digite um numero de telefone válido'
        });  

        await api.post("/usersinfo", { phone, address, complement})
      };

      if (!validateEmail(email)) return  Toast.fire({
        icon: "warning",
        title: 'Digite um email válido'
      });  
      
      await api.put("/users", { name, email })

      if (avatarFile) {
        const fileForm = new FormData();
        fileForm.append("avatar", avatarFile);

        await api.patch("/users/avatar", fileForm);
        
      }

      Toast.fire({
        icon: "success",
        title: "Dados atualizados com sucesso"
      });  
      setSave(false);
      fetchUser();
    };//atualizar informaçoes do usuario

    async function handleUpdatePass(){
     if (!password || !oldPassword || !confirmPassword) return Toast.fire({
      icon: "warning",
      title: 'Preencha todos os campos'
    }); 

     if (password != confirmPassword) return Toast.fire({
      icon: "warning",
      title: 'Senha de confirmação não condiz com nova senha'
    }); 

     if (password.length < 6) return Toast.fire({
      icon: "warning",
      title: 'Senha deve ter no mínimo 6 caracteres'
    }); 
     try {
      await api.put("/users", { email, password, old_password: oldPassword });

      Toast.fire({
        icon: "success",
        title: "Senha alterada com sucesso"
      }); 
     } catch (error) {
      if (error.response) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message
        }); 
      } else {
        Toast.fire({
          icon: "error",
          title: 'Erro ao alterar senha'
        }); 
      }
     }
   

    };//mudar senha

    useEffect(() => {
        fetchOrders()
        fetchUser()
       
        $('#phone').mask('(99)99999-9999');
    }, []);//adiciona a mascara no input de telefone

    return(
     <S.Container data-menu={menuOpen}>
      <header> 
       <Link to="/">
        <img src={HeaderLogo} alt="MH imports" />
       </Link> 

       <IoMenu className="menu" onClick={()=> setMenu(true)}/>
      </header>

      <nav       
       onTouchStart={handleTouchStart}
       onTouchMove={handleTouchMove}
       onTouchEnd={handleTouchEnd}>
       <div className="img">
        <img src={avatar} alt="imagem do usuario" />
        <label htmlFor="avatar">
         <FiCamera />
         <input 
          type="file" 
          name="avatar" 
          accept="image/*" 
          id="avatar"
          onChange={e => {
            const file = e.target.files[0];
            setAvatarFile(file);

            const imagePreview = URL.createObjectURL(file);
            setAvatar(imagePreview);
            setSave(true)
          }} 
         />
        </label>
       </div>

       <h2>{cutName(name)}</h2>

       <ul>
        <li data-li={ page == 'profile' ? true : false} onClick={()=> setPage('profile')}>Perfil</li>
        <li data-li={ page == 'password' ? true : false} onClick={()=> setPage('password')}>Trocar senha</li>
        <li data-li={ page == 'shopping' ? true : false} onClick={()=> setPage('shopping')}>Compras</li>
       </ul>

       <Link to={-1}>
        <span>Voltar</span>
       </Link>
      </nav>

      <main>

       { page == 'profile' ?
        <div className="profile">
         <h1>Perfil</h1>

         <div className="form">

          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <input 
            id="name" 
            type="text" 
            defaultValue={name}
            placeholder="Seu nome completo"
            onChange={(e) => {setName(e.target.value); setSave(true)}} 
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
             type="email" 
             id="email" 
             defaultValue={email}
             placeholder="Seu email"
             onChange={(e) => {setEmail(e.target.value); setSave(true)}} 
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="phone">Telefone</label>
            <input
             id="phone" 
             defaultValue={phone} 
             placeholder="(99)99999-9999" 
             onChange={(e) => {setPhone(e.target.value); console.log(e.target.value); setSave(true)}} 
            />

          </div>

          <div className="input-wrapper">
            <label htmlFor="address">Endereço</label>
            <input 
             type="text" 
             id="address" 
             defaultValue={address}
             placeholder="Seu endereço para entrega"
             onChange={(e) => {setAddres(e.target.value); setSave(true)}} 
            />
          </div>
          
          <div className="input-wrapper">
            <label htmlFor="complement">Complemento</label>
            <input 
             type="text" 
             maxLength={30}
             id="complement" 
             defaultValue={complement}
             placeholder="Complemento/Referéncia"
             onChange={(e) => {setComplement(e.target.value); setSave(true)}} 
            />
          </div>

         </div>
         
         <div className="circle">
          <ProgressCircle progress={progress}/>
         </div>
    
         <div className="save" data-save={save} onClick={handleUpdate}>
           <p>Salvar</p>
         </div> 
        
        </div> 
        :
        null
       }

       { page == 'shopping' ? 
        <div className="shopping">
          <div className="header">
            <span 
             onClick={()=> setStatus('tudo')}
             data-status={ status == 'tudo' ? true : false}
            >Tudo</span>

            <span 
             onClick={()=> setStatus('pendente')}
             data-status={ status == 'pendente' ? true : false}
            >Pendente</span>

            <span 
             onClick={()=> setStatus('preparando')}
             data-status={ status == 'preparando' ? true : false}
            >Preparando</span>

            <span 
             onClick={()=> setStatus('pronto')}
             data-status={ status == 'pronto' ? true : false}
            >Pronto</span>

            <span 
             onClick={()=> setStatus('finalizado')}
             data-status={ status == 'finalizado' ? true : false}
            >Finalizado</span>

            <span 
             onClick={()=> setStatus('cancelado')}
             data-status={ status == 'cancelado' ? true : false}
            >Cancelado</span>

          </div>

          <div className="main">

            { orders.length ? 
             orders.map(order => (
              <S.Order>
              <div className="orderHeader">
                <img src={MHblack} alt="MH imports" />
  
                <span>{order.info.status}</span>
              </div>
  
              <div className="orderContent">
                <div className="orderCode">
                 <span>#{String(order.info.id).padStart(5, '0')}</span>

                  { order.info.status == 'Cancelado' ? <p>{ order.info.canceled == 'user' ? 'cancelado por você' : 'cancelado'}</p> : null} 
                </div>
  
                <div className="orderItens">
                 <p>
                 {order.items
                 .map((item) => `${item.quantity} x ${item.name}`)
                 .join(', ')}
                 </p>
                </div>

                <div className="orderTotal">
                 <strong>{formatDate(order.info.updated_at).formattedDate}</strong>
                 <p>{formatDate(order.info.updated_at).formattedTime}</p>
                 <span>{formatCurrency(Number(order.info.total))}</span>
                </div>
              </div>
  
             
             </S.Order>
             ))

             :
             <h3 className="nonOrders">Nenhum pedido realizado ainda</h3>
            }

          </div>
        </div>
        :
        null }
       { page == 'password' ? 
        <div className="password">
          <h2>Trocar senha</h2>

          
          <div className="input-wrapper">
           <label htmlFor="senhaAntiga">Senha antiga</label>
           <input 
            type="password" 
            name="senhaAntiga" 
            placeholder="Senha antiga" 
            onChange={(e)=> setOldPassword(e.target.value)}
           />
         </div>

         <div className="input-wrapper">
           <label htmlFor="senhaNova">Nova senha</label>
           <input 
            type="password" 
            name="senhaNova" 
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Deve ter no mínimo 6 caracteres" 
           />
         </div>

         <div className="input-wrapper">
           <label htmlFor="senhaConfirm">Confirme a senha</label>
           <input 
            type="password" 
            name="senhaConfirm" 
            placeholder="Confirme a senha" 
            onChange={(e)=> setConfirmPassword(e.target.value)}
           />
         </div>

         <button onClick={handleUpdatePass}>
           Salvar
         </button>
        </div>
        :
        null
       }
      </main>
     </S.Container>
    )
}/**/