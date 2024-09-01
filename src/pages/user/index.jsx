import * as S from "./style";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import defaultUser from "../../assets/default.svg";
import HeaderLogo from "../../assets/Header.svg";
import MHblack from "../../assets/MHblack.svg";


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

    const [name, setName] = useState('Matheus Augusto Gomes da Silva');
    const [email, setEmail] = useState('galaxyplay41@gmail.com');
    const [phone, setPhone] = useState('(81) 9970-4376');

    const [address, setAddres] = useState('AV. Ciriaco Ramos, Manhosa, 532');
    const [complement, setComplement] = useState('Casa com poste na frente');


    const [Orders, setOrders] = useState([
      {
          id: 1,
          status: 'Finalizado',
          total: '950.4',
          updated_at: '2024-08-26 16:34:15',
          canceled: 'none',
          order_itens: [
              { id: 1, name: 'fone de ouvido', quantity: 2 },
              { id: 2, name: 'carregador', quantity: 10 },
              { id: 3, name: 'capinha', quantity: 5 },
              { id: 4, name: 'celular', quantity: 2 },
              { id: 5, name: 'copo stanley', quantity: 15 }
          ]
      },
      {
          id: 2,
          status: 'Cancelado',
          total: '310.3',
          updated_at: '2024-08-26 16:34:15',
          canceled: 'user',
          order_itens: [
            { id: 1, name: 'fone de ouvido', quantity: 2 },
            { id: 2, name: 'carregador', quantity: 10 },
            { id: 3, name: 'capinha', quantity: 5 },
            { id: 4, name: 'celular', quantity: 2 },
            { id: 5, name: 'copo stanley', quantity: 15 }
        ]
      },
      {
          id: 3,
          status: 'Pronto',
          total: '10.4',
          updated_at: '2024-08-26 16:34:15',
          canceled: 'none',
          order_itens: [
            { id: 1, name: 'fone de ouvido', quantity: 2 },
            { id: 2, name: 'carregador', quantity: 10 },
            { id: 3, name: 'capinha', quantity: 5 },
            { id: 4, name: 'celular', quantity: 2 },
            { id: 5, name: 'copo stanley', quantity: 15 }
        ]
      },
      {
          id: 4,
          status: 'Pendente',
          total: '950.4',
          updated_at: '2024-08-26 16:34:15',
          canceled: 'none',
          order_itens: [
            { id: 1, name: 'fone de ouvido', quantity: 2 },
            { id: 2, name: 'carregador', quantity: 10 },
            { id: 3, name: 'capinha', quantity: 5 },
            { id: 4, name: 'celular', quantity: 2 },
            { id: 5, name: 'copo stanley', quantity: 15 }
        ]
      }
    ]);
    const [orders, setFilter] = useState(Orders)

    useEffect(()=> {
     if (status == 'tudo') setFilter(Orders);
     if (status == 'pendente') setFilter( Orders.filter(Orders => Orders.status == 'Pendente'))
     if (status == 'preparando') setFilter( Orders.filter(Orders => Orders.status == 'Preparando'))
     if (status == 'pronto') setFilter( Orders.filter(Orders => Orders.status == 'Pronto'))
     if (status == 'finalizado') setFilter( Orders.filter(Orders => Orders.status == 'Finalizado'))
     if (status == 'cancelado') setFilter( Orders.filter(Orders => Orders.status == 'Cancelado'))

    }, [status])

    function formatCurrency(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    function formatDate(dateString) {
      const date = new Date(dateString.replace(' ', 'T'));
      const formattedDate = date.toLocaleDateString('pt-BR');
      const formattedTime = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      return { formattedDate, formattedTime };
    };

    function cutName(Name) {
        const nameParts = Name.split(' ');
      
        if (nameParts.length === 1) {
            return nameParts[0];
        }
        return `${nameParts[0]} ${nameParts[1]}`;
    };

    useEffect(() => {
        let calculatedProgress = 0;
      
        if (name) calculatedProgress += 20;
        if (email) calculatedProgress += 20;
        if (phone) calculatedProgress += 20;
        if (address) calculatedProgress += 20;
        if (complement) calculatedProgress += 20;
      
        setProgress(calculatedProgress);
    }, [name, email, phone, address, complement]);
  
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
    };

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
        <img src={defaultUser} alt="imagem do usuario" />
        <label htmlFor="avatar">
         <FiCamera />
         <input type="file" name="avatar" accept="image/*" id="avatar"/>
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
             type="text" 
             id="phone" 
             defaultValue={phone}
             placeholder="Seu numero de telefone"
             onChange={(e) => {setPhone(e.target.value); setSave(true)}} 
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
    
         <div className="save" data-save={save}>
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

            {
             orders.map(order => (
              <S.Order>
              <div className="orderHeader">
                <img src={MHblack} alt="MH imports" />
  
                <span>{order.status}</span>
              </div>
  
              <div className="orderContent">
                <div className="orderCode">
                 <span>#{String(order.id).padStart(5, '0')}</span>

                  { order.status == 'Cancelado' ? <p>{ order.canceled == 'user' ? 'cancelado por você' : 'cancelado'}</p> : null} 
                </div>
  
                <div className="orderItens">
                 <p>
                 {order.order_itens
                 .map((item) => `${item.quantity} x ${item.name}`)
                 .join(', ')}
                 </p>
                </div>

                <div className="orderTotal">
                 <strong>{formatDate(order.updated_at).formattedDate}</strong>
                 <p>{formatDate(order.updated_at).formattedTime}</p>
                 <span>{formatCurrency(Number(order.total))}</span>
                </div>
              </div>
  
             
             </S.Order>
             ))
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
           <input type="password" name="senhaAntiga" placeholder="Senha antiga" />
         </div>

         <div className="input-wrapper">
           <label htmlFor="senhaAntiga">Nova senha</label>
           <input type="password" name="senhaAntiga" placeholder="Deve ter no mínimo 8 caracteres" />
         </div>

         <div className="input-wrapper">
           <label htmlFor="senhaAntiga">Confirme a senha</label>
           <input type="password" name="senhaAntiga" placeholder="Confirme a senha" />
         </div>

         <button>
           Salvar
         </button>
        </div>
        :
        null
       }
      </main>
     </S.Container>
    )
}