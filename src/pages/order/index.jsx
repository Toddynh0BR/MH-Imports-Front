import * as S from "./style";

import { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";

import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";

import product1 from "../../assets/1.jpg";
import product2 from "../../assets/2.jpg";
import product3 from "../../assets/3.jpg";

export function Order(){
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const [orders, setOrders] = useState([
        { id: 1, img: product1, name: 'Carregador multifunções ', price: 120.50, promotion: 50, quantity: 1,},
        { id: 2, img: product2, name: 'Relogio all Black', price: 250, promotion: 30, quantity: 1, },
        { id: 3, img: product3, name: 'Caixa de som Bluetooth ', price: 70.50, quantity: 5,  }, 
        { id: 2, img: product2, name: 'Relogio all Black', price: 250, promotion: 30, quantity: 2,  },
        { id: 3, img: product3, name: 'Caixa de som Bluetooth ', price: 70.50, quantity: 3, }, 
        { id: 2, img: product2, name: 'Relogio all Black', price: 250, promotion: 30, quantity: 1, },
        { id: 3, img: product3, name: 'Caixa de som Bluetooth ', price: 70.50, quantity: 5,  }, 
        { id: 2, img: product2, name: 'Relogio all Black', price: 250, promotion: 30, quantity: 2,  },
        { id: 3, img: product3, name: 'Caixa de som Bluetooth ', price: 70.50, quantity: 3, }, 
    ]);
    const [payment, setPayment] = useState("pix");
    const [menuOpen, setMenu] = useState(false);
    const [stage, setStage] = useState(1);


    function toggleOverlay() {
     setIsOverlayActive(!isOverlayActive);
    };

    function formatarComoDecimal(valor) {
      const formatador = new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
      });
  
      return formatador.format(valor);
    };

    const calculateTotal = () => {
      const total = orders.reduce((acc, order) => {
        const discount = order.promotion ? (order.promotion / 100) * order.price : 0;
        const discountedPrice = order.price - discount;
        return acc + discountedPrice * order.quantity;
      }, 0);
  
      return total.toFixed(2);
    };

    return(
     <S.Container>
      <Header 
       conta={toggleOverlay}
       openMenu={()=> setMenu(true)}
      />

      <Menu
       close={()=> setMenu(false)}
       login={toggleOverlay}
       menuopen={menuOpen}
      />

      <Signarea 
       isactive={isOverlayActive}
       close={toggleOverlay}
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

          { orders.length ? 
           orders.map(item => (
            <li key={item.id}>
             <img src={item.img} alt="imagem do produto" />
             <span>{item.quantity}X</span> 
             <strong>{item.name}</strong>
             <div className="price">
              { item.promotion ? 
               <>
                <p className="cut">R${formatarComoDecimal(item.price)}</p> 
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
             <FaRegTrashAlt/>
            </li>
           )) 
          : 
           <h3>Nenhum item adicionado ao carrinho ainda</h3>
          } 

         </ul>

         <button onClick={()=> setStage(2)}>
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
             <input type="text" id="name" placeholder="Digite seu nome completo"/>
            </div>

            <div className="input-wrapper">
             <label htmlFor="email">Email</label>
             <input type="email" id="email" placeholder="Digite seu email"/>
            </div>

            <div className="input-wrapper">
             <label htmlFor="fone">Fone</label>
             <InputMask
              id="phone"
              mask="(99) 99999-9999"
              placeholder="(00) 00000-0000"
             >
              {(inputProps) => <input {...inputProps} type="text" />}
             </InputMask>
            </div>
          </form>

          <form>
          <h3>Entrega</h3>
            <div className="input-wrapper">
             <label htmlFor="address">Endereço</label>
             <input type="text" id="address" placeholder="Digite seu endereço"/>
            </div>

            <div className="input-wrapper">
             <label htmlFor="complement">Complemento</label>
             <input type="text" id="complement" placeholder="Complemento/ponto de referencia"/>
            </div>

          </form>
         </main>

         <p>Observações e coleta do pedido serão realizadas pelo whatsapp.</p>


         <div className="buttons">
          <button onClick={()=> setStage(1)}>
          <p>Retornar</p>
          </button>
 
          <button onClick={()=> setStage(3)}>
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
          <button onClick={()=> setStage(2)}>
          <p>Retornar</p>
          </button>
 
          <button onClick={()=> setStage(4)}>
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
             <strong>{item.name}</strong>
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
             <FaRegTrashAlt/>
            </li>
           )) 
          } 

          </ul>

          <span>Total do Pedido: R$ {formatarComoDecimal(calculateTotal())}</span>
         </div>

         <div className="info">
          <div className="identification">
            <h3>Identificação <MdOutlineModeEdit /></h3>

            <span>Matheus Augusto Gomes da Silva</span>
            <span>galaxyplay41@gmail.com</span>
            <span>81 99970-4376</span>

          </div>

          <div className="address">
            <h3>Endereço <MdOutlineModeEdit /></h3>

            <span>Av. Inocéncio Lima, Rodoviaria, 04</span>
            <span>Casa Branca de esquina</span>

          </div>

          <div className="payment">
            <h3>Forma de pagamento <MdOutlineModeEdit /></h3>

            <span>{payment}</span>
          </div>

          <span className="text">
            A confirmação da compra, pagamento e entrega do pedido serão feitas pelo whatsapp ao clicar no botão abaixo.
          </span>
         </div>
         </main>

         <div className="buttons">
          <button onClick={()=> setStage(3)}>
          <p>Retornar</p>
          </button>
 
          <button>
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