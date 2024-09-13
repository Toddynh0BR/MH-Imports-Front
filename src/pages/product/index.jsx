import * as S from "./style";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Menu } from "../../components/Menu";

export function Product() {
  const [signArea, setSign] = useState(false);
  const [orderEffect, setEffect] = useState('');
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const [selectedImg, setImg] = useState(null);
  const [variation, setVariation] = useState([]);
  const [selectedVar, setSelectedVar] = useState(null);

  const [finalPrice, setFinal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');

  const [promotion, setPromotion] = useState('');
  const [semelhantes, setSemelhantes] = useState([
  ]);
  const [menuOpen, setMenu] = useState(false);

  const { id } = useParams();

  async function fetchSames() {
     const Response = await api.post("/category/same", { category, id: Number(id) })
     if (Response.data) {
      setSemelhantes(Response.data)
     } else {
      setSemelhantes([])
     }
  };

  async function fetchItem() {
    const response = await api.get(`/items/${id}`);
    const item = response.data.item;

    setName(item.name);
    setPrice(item.price);
    setCategory(item.category);
    setPromotion(item.promotion || '');

    if (item.promotion) {
      setFinal(item.price - (item.price * item.promotion) / 100);
    } else {
      setFinal(item.price);
    }

    setVariation(response.data.variation || []);
    
    const imgArray = [
      { id: 1, src: `${api.defaults.baseURL}/files/${item.img1}` },
      { id: 2, src: `${api.defaults.baseURL}/files/${item.img2}` },
      { id: 3, src: `${api.defaults.baseURL}/files/${item.img3}` },
      { id: 4, src: `${api.defaults.baseURL}/files/${item.img4}` },
      { id: 5, src: `${api.defaults.baseURL}/files/${item.img5}` },
    ];

    setImages(imgArray);
    setImg(imgArray[0]);
    fetchSames()
  };

  useEffect(() => {
    fetchItem();
    window.scrollTo(0, 100);
  }, []);

  useEffect(()=> {
    fetchSames()
  },[category])

  useEffect(() => {
    const newPrice = promotion ? price - (price * promotion) / 100 : price;
    setFinal(newPrice * quantity);
  }, [quantity, price, promotion]);

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

  function Open(){
    setSign(true)
  }
  
  function Close(){
    setSign(false)
  }

  async function handleAddOrder() {

    const itemPrice = promotion ? price - (price * promotion) / 100 : price;

    const Order = {
      id: Number(id),
      img: images[0]?.src || "", 
      name,
      price: itemPrice,
      promotion,
      quantity,
      total: itemPrice * quantity
    };


    let nowItems = JSON.parse(localStorage.getItem('@Items')) || [];

    const existingItemIndex = nowItems.findIndex(item => item.id === Number(id));
    console.log(existingItemIndex)

    if (existingItemIndex !== -1) {

      nowItems[existingItemIndex].quantity += quantity;
      nowItems[existingItemIndex].total = nowItems[existingItemIndex].quantity * itemPrice;
    } else {
   
      nowItems.push(Order);
    }

    setEffect(prevState => [prevState + 1])
    alert("Item adicionado ao carrinho")
    localStorage.setItem('@Items', JSON.stringify(nowItems));
  };

  if (!name) {
    return (
      <p>Carregando...</p>
    )
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
        login={toggleOverlay}
        menuopen={menuOpen}
      />

      <Signarea 
        isactive={signArea}
        close={Close}
      /> 

      <S.Main data-selectedimg={selectedImg?.id}>
        <div className="Principal">
          <div className="Item">
            <div className="imgs">
              {selectedImg && <img src={selectedImg.src} alt="img" className="img0" />}
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
              <h2>{name}</h2>
              <div className="price">
                <p>R$ {formatarComoDecimal(finalPrice)}</p>
                {promotion && <p className="promotion">-%{promotion}</p>}
              </div>

              {variation.length > 0 && (
                <div className="variation">
                  <span>Variação:</span>
                  <div className="variations">
                    {variation.map(item => (
                      <div 
                        className="item" 
                        key={item.id} 
                        onClick={() => setSelectedVar(selectedVar === item.name ? null : item.name)}
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
                  <FiMinus onClick={() => setQuantity(prevState => Math.max(prevState - 1, 1))} />
                  <strong>{String(quantity).padStart(2, '0')}</strong>
                  <FiPlus onClick={() => setQuantity(prevState => prevState + 1)} />
                </div>

                <button onClick={handleAddOrder}>Adicionar</button>
              </div>
              
              <div className="return">
                <Link to="/">Voltar</Link>
              </div>
            </div>
          </div>

          { semelhantes.length ? (
            <div className="others">
              <span>Produtos semelhantes:</span>
              <div className="semelhantes">
                { semelhantes.map(item => (
                  
                  <Link to={`/preview/${item.id}`} key={item.id}> 
                    <div className="product">
                      <img src={`${api.defaults.baseURL}/files/${item.img1}`} alt="imagem do produto" />
                      <strong>{item.name}</strong>
                      <p>R$ {formatarComoDecimal(item.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
          :
          null
          }
        </div>
      </S.Main>
    </S.Container>
  );
}
