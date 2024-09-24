import * as S from "./style";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Swal from "sweetalert2";

import { LoadingPage } from "../../components/Loading";
import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Menu } from "../../components/Menu";

import { FiMinus, FiPlus } from "react-icons/fi";

export function Product() {
  const [signArea, setSign] = useState(false);
  const [orderEffect, setEffect] = useState('');
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const [selectedVar, setSelectedVar] = useState(null);
  const [variation, setVariation] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const [finalPrice, setFinal] = useState(0);
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [promotion, setPromotion] = useState('');
  
  const [numberSelected, setNumber] = useState(1);
  const [selectedImg, setImg] = useState(null);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [img5, setImg5] = useState(null);

  const [semelhantes, setSemelhantes] = useState([]);
  const [menuOpen, setMenu] = useState(false);

  const { id } = useParams();
  
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

  async function fetchItem() {
    try {
      const response = await api.get(`/items/${id}`);

      const item = response.data.item;
      setName(item.name);
      setPrice(item.price);
      setCategory(item.category);
      setPromotion(item.promotion || '');

      const newFinalPrice = item.promotion
        ? item.price - (item.price * item.promotion) / 100
        : item.price;
      setFinal(newFinalPrice);

      setVariation(response.data.variations || []);
    
      if (item.img1) setImg1(`${api.defaults.baseURL}/files/${item.img1}`);
      if (item.img2) setImg2(`${api.defaults.baseURL}/files/${item.img2}`);
      if (item.img3) setImg3(`${api.defaults.baseURL}/files/${item.img3}`);
      if (item.img4) setImg4(`${api.defaults.baseURL}/files/${item.img4}`);
      if (item.img5) setImg5(`${api.defaults.baseURL}/files/${item.img5}`);
      
      setImg(`${api.defaults.baseURL}/files/${item.img1}`);
      if (!item.img1) setImg(`${api.defaults.baseURL}/files/${item.img2}`);
      if (!item.img2 && !item.img1) setImg(`${api.defaults.baseURL}/files/${item.img3}`);
      if (!item.img3 && !item.img1) setImg(`${api.defaults.baseURL}/files/${item.img4}`);
      if (!item.img4 && !item.img1) setImg(`${api.defaults.baseURL}/files/${item.img5}`);
      

      fetchSames(item.category, Number(id));
    } catch (error) {
      console.error('Erro ao buscar item:', error);
    }
  };

  useEffect(() => {
    fetchItem();
    window.scrollTo(0, 100);
  }, [id]);

  useEffect(() => {
    async function fetchSames(category, itemId) {
      try {
        const response = await api.post("/category/same", { category, id: itemId });
        setSemelhantes(response.data || []);
      } catch (error) {
        console.error('Erro ao buscar produtos semelhantes:', error);
        setSemelhantes([]);
      }
    }

    if (category) fetchSames(category, Number(id));
  }, [category, id]);

  useEffect(() => {
    const newPrice = promotion ? price - (price * promotion) / 100 : price;
    setFinal(newPrice * quantity);
  }, [quantity, price, promotion]);

  useEffect(() => {
    document.body.style.overflow = isOverlayActive ? 'hidden' : 'auto';
  }, [isOverlayActive]);

  function formatarComoDecimal(valor) {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(valor);
  }

  function handleAddOrder() {
    if (variation.length && !selectedVar) return Toast.fire({
      icon: "warning",
      title: "Selecione uma variação"
    });
    const itemPrice = promotion ? price - (price * promotion) / 100 : price;

    const actualVariation = variation.length ? selectedVar : '';

    const order = {
      id: Number(id),
      img: img1,
      name,
      price: itemPrice,
      promotion,
      variation: actualVariation,
      quantity,
      total: itemPrice * quantity
    };

    let nowItems = JSON.parse(localStorage.getItem('@Items')) || [];
    const existingItemIndex = nowItems.findIndex(item => item.id === Number(id) && item.variation == actualVariation);

    if (existingItemIndex !== -1) {
      nowItems[existingItemIndex].quantity += quantity;
      nowItems[existingItemIndex].total = nowItems[existingItemIndex].quantity * itemPrice;
    } else {
      nowItems.push(order);
    }

    setEffect(prevState => prevState + 1);
    Toast.fire({
      icon: "success",
      title: "Item adicionado ao carrinho"
    });

    localStorage.setItem('@Items', JSON.stringify(nowItems));
  }

  if (!name) {
    return <LoadingPage/>;
  }

  function Open(){
    setSign(true)
  }
  function Close(){
    setSign(false)
  }

  return (
    <S.Container>
      <Header 
        orderEffect={orderEffect}
        conta={Open}
        openMenu={() => setMenu(true)}
      />

      <Menu
        close={() => setMenu(false)}
        login={Open}
        menuopen={menuOpen}
      />

      <Signarea 
        isactive={signArea}
        close={Close}
      /> 

      <S.Main data-selectedimg={numberSelected}>
        <div className="Principal">
          <div className="Item">
            <div className="imgs">
              <img src={selectedImg} alt="Imagem principal" className="img0" />

             <div className="lateralImg">
              { img1 ? 
               <img
                src={img1}
                alt={`Imagem 1`}
                className={`img1`}
                onClick={() => { setImg(img1), setNumber(1)}}
               />
              :
               null
              }

              { img2 ? 
               <img
                src={img2}
                alt={`Imagem 2`}
                className={`img2`}
                onClick={() => { setImg(img2), setNumber(2)}}
               />
              :
               null
              }

              { img3 ? 
               <img
                src={img3}
                alt={`Imagem 3`}
                className={`img3`}
                onClick={() => { setImg(img3), setNumber(3)}}
               />
              :
               null
              }
              
              { img4 ? 
               <img
                src={img4}
                alt={`Imagem 4`}
                className={`img4`}
                onClick={() => { setImg(img4), setNumber(4)}}
               />
              :
               null
              }

              { img5 ? 
               <img
                src={img5}
                alt={`Imagem 5`}
                className={`img5`}
                onClick={() => { setImg(img5), setNumber(5)}}
               />
              :
               null
              }
             </div>
            </div>

            <div className="info">
              <h2>{name}</h2>
              <div className="price">
                <p>R$ {formatarComoDecimal(finalPrice)}</p>
                {promotion && <p className="promotion">-{promotion}%</p>}
              </div>

              {variation.length > 0 && (
                <div className="variation">
                  <span>Variação:</span>
                  <div className="variations">
                    {variation.map(item => (
                      <div 
                        className="item" 
                        key={item.id} 
                        onClick={() => setSelectedVar(prev => prev === item.name ? null : item.name)}
                      >
                        <div className="checkBox">{selectedVar === item.name && <div className="selected"></div>}</div>
                        <p>{item.name}</p>  
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <textarea name="info" placeholder="Inclua algum detalhe para este produto (opcional)" />

              <div className="config">
                <div className="quantity">
                  <FiMinus onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} />
                  <strong>{String(quantity).padStart(2, '0')}</strong>
                  <FiPlus onClick={() => setQuantity(prev => prev + 1)} />
                </div>

                <button onClick={handleAddOrder}>Adicionar</button>
              </div>
              
              <div className="return">
                <Link to="/">Voltar</Link>
              </div>
            </div>
          </div>

          {semelhantes.length > 0 && (
            <div className="others">
              <span>Produtos semelhantes:</span>
              <div className="semelhantes">
                {semelhantes.map(item => (
                  <Link to={`/preview/${item.id}`} key={item.id}>
                    <div className="product">
                      <img src={`${api.defaults.baseURL}/files/${item.img1}`} alt={`Imagem do produto ${item.id}`} />
                      <strong>{item.name}</strong>
                      <p>R$ {formatarComoDecimal(item.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </S.Main>
    </S.Container>
  );
}
