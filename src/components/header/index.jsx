import * as S from "./style";

import { Link } from "react-router-dom";
import { useState } from "react";

import { FiSearch, FiShoppingCart } from "react-icons/fi";
import defaultUser from "../../assets/default.svg";
import { RiEmotionSadLine } from "react-icons/ri";
import Logo from "../../assets/Header.svg";
import { IoMenu } from "react-icons/io5";

import product1 from "../../assets/1.jpg";
import product2 from "../../assets/2.jpg";
import product3 from "../../assets/3.jpg";

import { Input } from "../Input";

export function Header({conta, openMenu}){
  const [asLogin, setAsLogin] = useState(true);
  /*verifica se o usuario esta ou nao logado*/
  const [results, setResults] = useState([

  ]);
  const [orders, setOrders] = useState([
    { id: 1, img: product1, name: 'Carregador multifunções ', price: 120.50, promotion: 50},
    { id: 2, img: product2, name: 'Relogio all Black', price: 250, promotion: 30},
    { id: 3, img: product3, name: 'Caixa de som Bluetooth ', price: 70.50}, 
    { id: 2, img: product2, name: 'Relogio all Black', price: 250, promotion: 30},
    { id: 3, img: product3, name: 'Caixa de som Bluetooth ', price: 70.50}, 
  ])

   function formatarComoDecimal(valor) {
       const formatador = new Intl.NumberFormat('pt-BR', {
           minimumFractionDigits: 2,
           maximumFractionDigits: 2
       });
   
       return formatador.format(valor);
   };

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
         <div class="arrow-up"></div>


        { orders.length ? 
         <div className="FilledCart">
          { orders.map(item => (
            <Link to={`preview/${item.id}`} key={item.id}>
             <div className="item" >
              <img src={item.img} alt="imagem do produto" />
              <strong>{item.name}</strong>
              <p>R${ item.promotion ? 
                  formatarComoDecimal( item.price - (item.price * item.promotion) / 100 )
                 :
                  formatarComoDecimal(item.price)
              }</p>
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
       <img src={defaultUser} alt="Imagem do usuario" className="userIcon"/>

        <div className="HoverUser">
        <div class="arrow-up"></div>
        { asLogin ? <Link to='/user/profile'><span>Minha conta</span></Link> : <span onClick={conta}>Fazer login</span>}
        { asLogin ? <Link to='/user/shopping'><span>Minhas Compras</span></Link> : <span onClick={conta}>Minhas Compras</span>}
        { asLogin ? <span>Sair</span> :  <span>Sair</span>}
        
        </div>
       </div>
      </div>

      <IoMenu className="menu" onClick={openMenu}/>
      
     </S.Container>
    )
};