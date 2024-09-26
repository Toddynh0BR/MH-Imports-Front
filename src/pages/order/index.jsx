import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";

import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import Swal from "sweetalert2";

export function Order(){
    const { user } = useAuth();
    const navigate = useNavigate();

    const [signArea, setSign] = useState(false);
    const [orderEffect, setOrderEffect] = useState(1);
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const [orders, setOrders] = useState([]);
    const [payment, setPayment] = useState("pix");
    const [menuOpen, setMenu] = useState(false);
    const [stage, setStage] = useState(1);
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');

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

    function fetchOrders() {
      let nowItems = JSON.parse(localStorage.getItem('@Items')) || [];

      if (nowItems) {
        setOrders(nowItems)
      }
    };

    async function fetchUser() {
      const Response = await api.get("/users")
      
      setName(Response.data.user.name)
      setEmail(Response.data.user.email)

      const ResponseInfo = await api.get("/usersinfo")
      
      if (ResponseInfo.data) {
        setPhone(ResponseInfo.data.user_info.phone || '')
        setAddress(ResponseInfo.data.user_info.address || '')
        setComplement(ResponseInfo.data.user_info.complement || '')
      }
    };

    function formatarComoDecimal(valor) {
      const formatador = new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
      });
  
      return formatador.format(valor);
    };

    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    const validatePhone = (phone) => {
      const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
      return phoneRegex.test(phone);
    };

    const calculateTotal = () => {
      const total = orders.reduce((acc, order) => {
        const discount = order.promotion ? (order.promotion / 100) * order.price : 0;
        const discountedPrice = order.price - discount;
        return acc + discountedPrice * order.quantity;
      }, 0);
  
      return total.toFixed(2);
    };

    function handleDelete(index) {
      let nowItems = JSON.parse(localStorage.getItem('@Items')) || [];
      
      nowItems.splice(index, 1);
    
      localStorage.setItem('@Items', JSON.stringify(nowItems));
      setOrderEffect(prevState => prevState + 1);
      fetchOrders();
    }

    async function handleConfirm(){
     try {
      if (user) {
        Response = await api.post("/orders/", { payment, total: calculateTotal(), items: orders})
      }else {
        Response = await api.post("/orders/createnon", { payment, total: calculateTotal(), items: orders})
      }

      const order_id = Response.data.id;

      const phoneNumber = "5581999507813"
      const message = `
${user ? 'Usuário cadastrado' : 'Usuário não cadastrado'}
Nome: ${name},
Email: ${email},
Telefone: ${phone},
Endereço:
 ${address},
 ${complement}.

Código do pedido: #${String(order_id).padStart(5, '0')},
Total do pedido: R$${formatarComoDecimal(calculateTotal())},
Itens do pedido:  ${orders.map(item => (
 `

 Nome do item: ${item.name},
 Preço do item: R$${formatarComoDecimal(item.price)},
 Em promoção: ${ item.promotion ? `-%${item.promotion}` : "Não"},
 Variação: ${item.variation ? item.variation : 'Padrão'},
 Quantidade de itens: ${item.quantity},
 Total do item: R$${formatarComoDecimal(item.total)}.
 `
)).join('')}
`
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      Toast.fire({
        icon: "success",
        title: "Pedido feito"
      }); 
      localStorage.removeItem('@Items');

      window.open(whatsappUrl, '_blank');
      navigate("/")

     } catch(error){
      console.error(error)
     }
    };

    async function passToThree(){
     if (!name || !email || !phone || !address || !complement) return  Toast.fire({
      icon: "warning",
      title: "Preencha todos os campos!"
    }); 
     
     if (!validatePhone(phone)) return Toast.fire({
      icon: "warning",
      title: "Digite um número de telefone válido"
    }); 
     
     if (!validateEmail(email)) return Toast.fire({
      icon: "warning",
      title: "Digite um email válido"
    }); 

     setStage(3)
     window.scrollTo(0, 100)
    };

    useEffect(()=> {
      fetchOrders()
      fetchUser()
    }, [])

    function Open(){
      setSign(true)
    }
    function Close(){
      setSign(false)
    }

    return(
     <S.Container>
      <Header 
       orderEffect={orderEffect}
       conta={Open}
       openMenu={()=> setMenu(true)}
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
         <span className="return" >Voltar</span>
        </Link>

       { stage == 1 ? 
        <S.First>
         <header >
          <h2>Carrinho</h2>

          <div className="stages">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>

            <div className="bar">
                <div className="progress"></div>
            </div>
          </div>
         </header>

         <div className="header">
            <span className="name">Produto</span>
            <span className="price">Preço unitário</span>
            <span className="total">Total</span>
            <span className="action">Ações</span>
         </div>

         <ul>
          {orders.length ? 
            orders.map((item, index) => (
              <li key={item.id}>
                <img src={item.img} alt="imagem do produto" />
                <span>{item.quantity}X</span> 
                <strong>{item.name} <span>{item.variation}</span></strong>
                <div className="price">
                  {item.promotion ? 
                    <>
                      <p className="cut">-{item.promotion}%</p> 
                      <p>R${formatarComoDecimal(item.price)}</p>
                    </>
                    : <p>R${formatarComoDecimal(item.price)}</p>
                  }
                </div> 
                <span className="total">R${formatarComoDecimal(item.total)}</span>
                <FaRegTrashAlt onClick={() => handleDelete(index)} />
              </li>
            )) 
          : 
           <h3>Nenhum item adicionado ao carrinho ainda</h3>
          } 
         </ul>

         <button onClick={()=> { if(!orders.length) return; setStage(2); window.scrollTo(0, 100);}}>
          <p>Avançar</p>
         </button>

        </S.First>
       :
        null
       }

       { stage == 2 ?
        <S.Second>
         <header >
          <h2>Identificação e Endereço</h2>

          <div className="stages">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>

            <div className="bar">
                <div className="progress"></div>
            </div>
          </div>
         </header>
         
         <main>
          <form>
            <h3>Identificação</h3>
            <div className="input-wrapper">
             <label htmlFor="name">Nome</label>
             <input 
              type="text" id="name" 
              defaultValue={ name ? name : ''}
              placeholder="Digite seu nome completo"
              onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
             <label htmlFor="email">Email</label>
             <input 
              type="email" 
              id="email" 
              defaultValue={ email ? email : ''}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
             />
            </div>

            <div className="input-wrapper">
             <label htmlFor="fone">Fone</label>
             <InputMask
              id="phone"
              mask="(99)99999-9999"
              defaultValue={ phone ? phone : ''}
              placeholder="(00)00000-0000"
              onChange={(e) => setPhone(e.target.value)}
             >
              {(inputProps) => <input {...inputProps} type="text" />}
             </InputMask>
            </div>
          </form>

          <form>
          <h3>Entrega</h3>
            <div className="input-wrapper">
             <label htmlFor="address">Endereço</label>
             <input 
              type="text" 
              id="address" 
              defaultValue={ address ? address : ''}
              placeholder="Digite seu endereço"
              onChange={(e) => setAddress(e.target.value)}
             />
            </div>

            <div className="input-wrapper">
             <label htmlFor="complement">Complemento</label>
             <input 
              type="text" 
              id="complement" 
              defaultValue={ complement ? complement : ''}
              placeholder="Complemento/ponto de referencia"
              onChange={(e) => setComplement(e.target.value)}
             />
            </div>

          </form>
         </main>

         <p>Observações e coleta do pedido serão realizadas pelo whatsapp.</p>


         <div className="buttons">
          <button onClick={()=> {setStage(1); window.scrollTo(0, 100)}}>
          <p>Retornar</p>
          </button>
 
          <button onClick={passToThree}>
          <p>Avançar</p>
          </button>
         </div>
        </S.Second>
       :
        null
       }

       { stage == 3 ?
        <S.Third>
         <header >
          <h2>Carrinho</h2>

          <div className="stages">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>

            <div className="bar">
                <div className="progress"></div>
            </div>
          </div>
         </header>

         <main>
          <h3>Forma de pagamento</h3>

          <div className="payment">
            <div className="checkBox" onClick={()=> { payment == 'cartão' ? setPayment(null) : setPayment('cartão')}}>
              { payment == 'cartão' ?
               <div className="check"></div>
              :
               null
              }
            </div>

            <span>Cartão de crédito</span>
          </div>

          <div className="payment">
            <div className="checkBox" onClick={()=> { payment == 'dinheiro' ? setPayment(null) : setPayment('dinheiro')}}>
              { payment == 'dinheiro' ?
               <div className="check"></div>
              :
               null
              }
            </div>

            <span>Dinheiro</span>
          </div>

          <div className="payment">
            <div className="checkBox" onClick={()=> { payment == 'pix' ? setPayment(null) : setPayment('pix')}}>
              { payment == 'pix' ?
               <div className="check"></div>
              :
               null
              }
            </div>

            <span>Pix</span>
          </div>
         </main>

         <div className="buttons">
          <button onClick={()=> {setStage(2); window.scrollTo(0, 100)}}>
          <p>Retornar</p>
          </button>
 
          <button onClick={()=> {setStage(4); window.scrollTo(0, 100)}}>
          <p>Avançar</p>
          </button>
         </div>
        </S.Third>
       :
        null
       }

       { stage == 4 ?
        <S.Fourth>
         <header >
          <h2>Carrinho</h2>

          <div className="stages">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>

            <div className="bar">
                <div className="progress"></div>
            </div>
          </div>
         </header>

         <main> 
         <div className="orders">
          <span>{`${orders.length} itens`}</span>

          <ul>
           { orders.map(item => (
            <li key={item.id}>
             <img src={item.img} alt="imagem do produto" />
             <span>{item.quantity}X</span> 
             <strong>{item.name} <span>{item.variation}</span></strong>
             <div className="price">
              { item.promotion ? 
               <>
                <p>R${formatarComoDecimal(item.price - (item.price * item.promotion) / 100)}</p>
               </>
              :
                <p>R${formatarComoDecimal(item.price)}</p> 
              }
             
             </div> 
             <span className="total">{ item.promotion ?
                    `R$ ${formatarComoDecimal(item.quantity * (item.price - (item.price * item.promotion) / 100))}`
                   :
                    `R$ ${formatarComoDecimal(item.quantity * item.price)}`
                   }</span>
           
            </li>
           )) 
          } 

          </ul>

          <span>Total do Pedido: R$ {formatarComoDecimal(calculateTotal())}</span>
         </div>

         <div className="info">
          <div className="identification">
            <h3>Identificação <MdOutlineModeEdit onClick={()=> {setStage(2); window.scrollTo(0, 100)}}/></h3>

            <span>{name}</span>
            <span>{email}</span>
            <span>{phone}</span>

          </div>

          <div className="address">
            <h3>Endereço <MdOutlineModeEdit onClick={()=> {setStage(2); window.scrollTo(0, 100)}}/></h3>

            <span>{address}</span>
            <span>{complement}</span>

          </div>

          <div className="payment">
            <h3>Forma de pagamento <MdOutlineModeEdit onClick={()=> {setStage(3); window.scrollTo(0, 100)}}/></h3>

            <span>{payment}</span>
          </div>

          <span className="text">
            A confirmação da compra, pagamento e entrega do pedido serão feitas pelo whatsapp ao clicar no botão abaixo.
          </span>
         </div>
         </main>

         <div className="buttons">
          <button onClick={()=> {setStage(3); window.scrollTo(0, 100)}}>
          <p>Retornar</p>
          </button>
 
          <button onClick={handleConfirm}>
          <p>Confirmar pedido</p>
          </button>
         </div>
        </S.Fourth>
       :
        null
       }
       
      </S.Main>

      <Footer/>
     </S.Container>
    )
}