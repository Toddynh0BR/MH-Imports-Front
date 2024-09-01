import * as S from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Card } from "../../components/Card";
import { Menu } from "../../components/Menu";

import { FiCheck, FiArrowUp } from "react-icons/fi";

import product1 from "../../assets/1.jpg";
import product2 from "../../assets/2.jpg";
import product3 from "../../assets/3.jpg";
import product4 from "../../assets/4.jpg";
import product5 from "../../assets/5.jpg";
import product6 from "../../assets/6.jpg";
import product7 from "../../assets/7.jpg";
import product8 from "../../assets/8.jpg";
import product9 from "../../assets/9.jpg";
import product10 from "../../assets/10.jpg";
import product11 from "../../assets/11.jpg";
import poster from "../../assets/poster.png";

import WHATSAPP from "../../assets/whatsapp.svg";

export function Home() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  /*ativa ou desativa a barra de rolagem quando o usuario for fazer login ou criar conta*/
  const [scrollPosition, setScrollPosition] = useState(false);
  /*define se os componentes Category, OrdeBy e Swiper quando a scroll estiver na posição scrollDefine(1100)*/
  const [slidesPerView, setSlidesPerView] = useState(5.5);
  //
  const [scrollDefine, setScrollDefine] = useState(1100);
  /*posição do scroll quando chegar em products*/
  const [filteredProducts, setFilter] = useState([]);
  /*Array dos produtos filtrados por categoria e ordem,para nao precisar alterar os products*/
  const [category, setCategory] = useState('tudo');
  /*Categoria selecionada para mostrar produtos*/
  const [order, setOrder] = useState('Aleatorio');
  /*Ordem selecionada para mostrar os produtos*/
  const [Products, setFinal] = useState([
    { id: 1, img: product1, name: 'Carregador multifunções ', price: 120.50, promotion: 50, high: false, category: 'Acessórios de Celular' },
    { id: 2, img: product2, name: 'Relogio all Black', price: 250, promotion: 30, high: false, category: 'Utilidade' },
    { id: 3, img: product3, name: 'Caixa de som Bluetooth ', price: 70.50, promotion: 30, high: false, category: 'Caixas de Som' }, 
    { id: 4, img: product4, name: 'Rádio C/Bluetooth', price: 50, promotion: 10, high: true, category: 'Caixas de Som' }, 
    { id: 5, img: product5, name: 'Copo Stanley', price: 40, promotion: 20, high: false, category: 'Utilidade' }, 
    { id: 6, img: product6, name: 'Mini Caixa de som bluetooth', price: 30.50, promotion: 10, high: true, category: 'Caixas de Som' }, 
    { id: 7, img: product7, name: 'Caixa de som média', price: 60., promotion: 10, high: false, category: 'Caixas de Som' }, 
    { id: 8, img: product8, name: 'Caixa de som All Black', price: 60, promotion: null, high: true, category: 'Caixas de Som' }, 
    { id: 9, img: product9, name: 'Relogio de escritório digital', price: 150, promotion: null, high: true, category: 'Utilidade' }, 
    { id: 10, img: product10, name: 'Bolsa bege Gucci', price: 55.50, promotion: null, high: true, category: 'Bolsas' }, 
    { id: 11, img: product11, name: 'Bolsa bege claro Gucci', price: 100, promotion: null, high: true, category: 'Bolsas' }, 
    { id: 12, img: product5, name: 'Copo Stanley', price: 40, promotion: null, high: true, category: 'Utilidade' }, 
    { id: 13, img: product6, name: 'Mini Caixa de som bluetooth', price: 30.50, promotion: null, high: false, category: 'Caixas de Som' }, 
    { id: 14, img: product7, name: 'Caixa de som média', price: 60., promotion: null, high: false, category: 'Caixas de Som' },
  ]);
  /*Produtos recebidos da API, nunca devem ser alterados*/
  const [categories, setCategories] = useState([
    { id: 1, name: 'Acessórios de Celular' }, { id: 2, name: 'Fones de ouvido' }, { id: 3, name: 'Carregadores' }, { id: 4, name: 'Utilidade' }, { id: 5, name: 'Caixas de Som' }, { id: 6, name: 'Informática' }, { id: 7, name: 'Bolsas' },
  ])
  /*categorias recebidas da API, nunca devem ser alteradas*/
  const [menuOpen, setMenu] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  /*Leva o usuario para o topo da tela*/

  function toggleOverlay() {
    setIsOverlayActive(!isOverlayActive);
  };
  /*seta a const IsOverleyActive para desativar a scroll*/

  useEffect(() => {
    if (isOverlayActive) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOverlayActive]);
  /*ativa e desativa o scrol de acordo com a const isOverlayActive*/

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollPos >= scrollDefine) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  /*verifica sempre que o usuario mexe o scroll se a posiçao dele é igual a 1100*/

  const updateSlidesPerView = () => {
    if (window.innerWidth <= 450) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(5.5);
    }
  };

  useEffect(() => {
    // Verifica o tamanho da tela na montagem do componente
    updateSlidesPerView();
    // Adiciona o event listener para redimensionamento da janela
    window.addEventListener("resize", updateSlidesPerView);
    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const sortedCategories = categories.sort((a, b) => b.name.length - a.name.length);
  /*organia as categorias da maior a menor para manter organizadas*/
  const promotionProducts = Products.filter(product => product.promotion !== null);
  /*separa e guarda dentro de uma const apenas os produtos da array Products que possuem promotion*/
  const highProducts = Products.filter(product => product.high !== false);
 /*separa e guarda dentro de uma const apenas os produtos da array Products que possuem high*/

  useEffect(() => {
    let sortedProducts = [...Products];

    if (order === 'Menor preço') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'Maior preço') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === 'A-Z') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'Z-A') {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (category !== 'tudo') {
      sortedProducts = sortedProducts.filter(product => product.category === category);
    }

    setFilter(sortedProducts);
  }, [order, Products, category]);
  /*Reoganizae e e seta o filtered products de acordo com a categoria e orde selecionada*/

  return (
    <S.Container data-show-category={scrollPosition}>
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

      <S.Categories data-show-category={scrollPosition}>
        <div className="swiper">
          <span>Os Melhores produtos você só encontra aqui!</span>
        </div>

        <div className="Others">
          <div className="HoverCategory">
            <div className="Category">
              <span>Categoria</span>

              <div className="Categories">
                <span onClick={() => setCategory('tudo')}>
                  Tudo {category === 'tudo' ? <FiCheck /> : null}
                </span>

                {sortedCategories.map(Category => (
                  <span key={Category.id} onClick={() => setCategory(Category.name)}>
                    {Category.name}
                    {category === Category.name ? <FiCheck /> : null}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="HoverOrder">
            <div className="OrdeBy">
              <span>Ordenar por</span>

              <div className="Orders">
                <span onClick={() => setOrder('Aleatorio')}>
                  Aleatório {order === 'Aleatorio' ? <FiCheck /> : null}
                </span>

                <span onClick={() => setOrder('Menor preço')}>
                  Menor preço {order === 'Menor preço' ? <FiCheck /> : null}
                </span>

                <span onClick={() => setOrder('Maior preço')}>
                  Maior preço {order === 'Maior preço' ? <FiCheck /> : null}
                </span>

                <span onClick={() => setOrder('A-Z')}>
                  A-Z {order === 'A-Z' ? <FiCheck /> : null}
                </span>

                <span onClick={() => setOrder('Z-A')}>
                  Z-A {order === 'Z-A' ? <FiCheck /> : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </S.Categories>

      <S.Ads>
        <div className="ads">
          <img src={poster} alt="anuncio" />
        </div>
      </S.Ads>

      <S.Main>
        <S.High>
          <div className="title">
            <span>DESTAQUES</span>
          </div>

          <div className="highs">
            <Swiper
              pagination={false}
              slidesPerView={slidesPerView}
              spaceBetween={1}
              loop={true}
              navigation
              
            >
              {highProducts.map(item => (
                <SwiperSlide key={item.id}>
                  <Card
                    id={item.id}
                    img={item.img}
                    high={item.high}
                    name={item.name}
                    price={item.price}
                    promotion={item.promotion}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </S.High>

        <S.Offer>
          <div className="title">
            <span>OFERTAS </span>
          </div>
          <div className="offers">
            <Swiper
              pagination={false}
              slidesPerView={slidesPerView}
              spaceBetween={1}
              loop={true}
              navigation
            >
              {promotionProducts.map(item => (
                <SwiperSlide key={item.id}>
                  <Card
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    promotion={item.promotion}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </S.Offer>

        <S.Products>
          <div className="title">
            <span>PRODUTOS</span>
          </div>

          <div className="products">
            {filteredProducts.map(item => (
              <Card
                key={item.id}
                id={item.id}
                img={item.img}
                high={item.high}
                name={item.name}
                price={item.price}
                promotion={item.promotion}
              />
            ))}
          </div>
        </S.Products>
      </S.Main>

      <div className="UP" onClick={scrollToTop}>
        <FiArrowUp />
      </div>

      <a href="https://wa.me/5581999507813?text=Olá,%20gostaria%20de%20falar%20com%20você!" target="_blank">
        <img src={WHATSAPP} alt="whatsapp" className="whatsapp" />
      </a>
      <Footer />
    </S.Container>
  );
}
