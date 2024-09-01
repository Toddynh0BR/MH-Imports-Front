import * as S from "./style";

import { FiMinus, FiPlus } from "react-icons/fi";
import product2 from "../../assets/2.jpg";
import product3 from "../../assets/3.jpg";
import product4 from "../../assets/4.jpg";


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Menu } from "../../components/Menu";

import img1 from "../../assets/3.jpg";
import img2 from "../../assets/6.jpg";
import img3 from "../../assets/7.jpg";
import img4 from "../../assets/8.jpg";
import img5 from "../../assets/4.jpg";

export function Product() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [selectedImg, setImg] = useState({ id: 1, src: img1 });
  const [variation, setVariation] = useState([
    {
     id: 1,
     name: "amarelo"
    },
    {
     id: 2,
     name: "azul"
    },
    {
     id: 3,
     name: 'verde'
    }
  ]);
  const [selectedVar, setSelectedVar] = useState();
  const [finalPrice, setFinal] = useState(32.5);
  const [quantity, setQuantity] = useState(0);
  const price = 32.5;
  const [semelhantes, setSemelhantes] = useState([
    { id: 2, img: product2, name: 'Relogio all Black', price: 250 },
    { id: 3, img: product3, name: 'Caixa de som Bluetooth ', price: 70.50 }, 
    { id: 4, img: product4, name: 'Rádio C/Bluetooth', price: 50 }, 
  ])
  const [menuOpen, setMenu] = useState(false);

  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
  ];

  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);

  useEffect(() => {
    if (quantity === 0) {
      setFinal(price);
      return;
    }
    setFinal(quantity * price);
  }, [quantity, price]);

  useEffect(() => {
    if (isOverlayActive) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOverlayActive]);

  function formatarComoDecimal(valor) {
    const formatador = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatador.format(valor);
  };

  function toggleOverlay() {
    setIsOverlayActive(!isOverlayActive);
  };

  return (
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
      <S.Main data-selectedimg={selectedImg.id}>
  
        <div className="Principal">
          <div className="Item">
            <div className="imgs">
              <img src={selectedImg.src} alt="img" className="img0" />
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`img${image.id}`}
                  className={`img${image.id}`}
                  onClick={() => setImg(image)}
                />
              ))}
            </div>

            <div className="info">
              <h2>Caixa de som Bluetooth</h2>
              <div className="price">
                <p>R$ {formatarComoDecimal(finalPrice)}</p>
              </div>

              { variation.length ?
               <div className="variation">
                <span>Variação:</span>

                <div className="variations">
                 { variation.map(item => (
                  <div className="item" key={item.id} onClick={()=> {
                    if (selectedVar == item.name) return setSelectedVar(null);
                    setSelectedVar(item.name)
                  }}>
                    <div className="checkBox">{ selectedVar == item.name ? <div className="selected"></div> : null }</div>
                    <p>{item.name}</p>  
                  </div>
                 ))}
                </div> 

               </div>
              :
               null
              }

              <textarea name="info" placeholder="Inclua algum detalhe para este produto (opcional)" />

              <div className="config">
                <div className="quantity">
                  <FiMinus onClick={() => {
                    if (quantity > 0) {
                      setQuantity(prevState => prevState - 1);
                    }
                  }} />
                  <strong>{String(quantity).padStart(2, '0')}</strong>
                  <FiPlus onClick={() => {
                    setQuantity(prevState => prevState + 1);
                  }} />
                </div>

                <button>Adicionar</button>
              </div>
              
              <div className="return">
                <Link to="/">
                 Voltar
                </Link>
              </div>
            </div>
          </div>

          { semelhantes.length ? 
           <div className="others">
            <span>Produtos semelhantes:</span>

             <div className="semelhantes">

              { semelhantes.map(item => (
                <Link to={`/preview/${item.id}`}> 
                 <div className="product" key={item.id}>
                  <img src={item.img} alt="imagem do produto" />
                  <strong>{item.name}</strong>
                  <p>R$ {formatarComoDecimal(item.price)}</p>
                 </div>
                </Link>
              ))}
           
             </div>

           </div>
          :
            null  
          }
       
        </div>
      </S.Main>
    </S.Container>
  );
};
