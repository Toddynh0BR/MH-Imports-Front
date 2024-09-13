import * as S from "./style";

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

import { FiSearch, FiShoppingCart } from "react-icons/fi";
import defaultUser from "../../assets/default.svg";
import { RiEmotionSadLine } from "react-icons/ri";
import Logo from "../../assets/Header.svg";
import { IoMenu } from "react-icons/io5";

import { Input } from "../Input";

export function Header({conta, openMenu, orderEffect}){
  const { user, Logout } = useAuth();

  const [avatar, setAvatar] = useState(defaultUser);

  async function fetchAvatar(){
    const Response = await api.get("/users")

    if (Response.data.user.avatar) {
      setAvatar(`${api.defaults.baseURL}/files/${Response.data.user.avatar}`);
    } else {
      setAvatar(defaultUser)
    }
  };

  const [asLogin, setAsLogin] = useState(false);
  const [results, setResults] = useState([

  ]);
  const [orders, setOrders] = useState([
  ])

   function formatarComoDecimal(valor) {
       const formatador = new Intl.NumberFormat('pt-BR', {
           minimumFractionDigits: 2,
           maximumFractionDigits: 2
       });
   
       return formatador.format(valor);
   };

   function fetchOrders(){

    const nowItems = JSON.parse(localStorage.getItem('@Items')) || [];

    if(nowItems) {
      setOrders(nowItems)
    } else {
      setOrders([])
    }
   }

   useEffect(()=> {
    setAsLogin( user ? true : false )

    if (!user) {
      setAvatar(defaultUser)
    }
    if (user) {
      fetchAvatar()
    }
   },[user])

   useEffect(()=> {
    fetchOrders()
   },[orderEffect])

    return(
     <S.Container>
      <Link to="/">
       <img src={Logo} alt="MH Imports" />
      </Link>

      <div className="inputArea">
       <Input
        icon={FiSearch}
        placeholder="Buscar na MH Imports"
       />
       
       { results.length ?  
        <div className="results">
         { results.map(item => (
          <Link to={`/preview/${item.id}`}>
           <div className="result" key={item.id}>
            <p>{item.name}</p>
           </div>
          </Link>
         ))}
        
        </div>
       :
        null 
       }
     
      </div>

      <div className="Utils">

       <div className="Cart">
        <Link to="/order">
         <FiShoppingCart />
        </Link>
        <div className="HoverCart">
         <div className="arrow-up"></div>


        { orders.length ? 
         <div className="FilledCart">
          { orders.map(item => (
            <Link to={`preview/${item.id}`} key={item.id}>
             <div className="item" >
              <img src={item.img} alt="imagem do produto" />
              <span>{item.quantity}x </span>
              <strong>{item.name}</strong>
              <p>R${formatarComoDecimal(item.total)}</p>
             </div>
            </Link>
          ))}
         </div>
        :
         <div className="EmptyCart">
          <RiEmotionSadLine/>
           <span>
            Nenhum item adicionado ao carrinho ainda
           </span>
         </div>
        }
          

         
        </div>
       </div>

       <div className="User">
       <img src={avatar} alt="Imagem do usuario" className="userIcon"/>

        <div className="HoverUser">
        <div className="arrow-up"></div>
        { asLogin ? <Link to='/user/profile'><span>Minha conta</span></Link> : <span onClick={conta}>Fazer login</span>}
        { asLogin ? <Link to='/user/shopping'><span>Minhas Compras</span></Link> : <span onClick={conta}>Minhas Compras</span>}
        { asLogin ? <span onClick={()=> {
          Logout()
          window.location.reload();
          setAvatar(defaultUser)
        }}>Sair</span> :  <span>Sair</span>}
        
        </div>
       </div>
      </div>

      <IoMenu className="menu" onClick={openMenu}/>
      
     </S.Container>
    )
};