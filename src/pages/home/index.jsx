import * as S from "./style";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Card } from "../../components/Card";
import { Menu } from "../../components/Menu";

import { FiCheck, FiArrowUp } from "react-icons/fi";

import NonMobal from "../../assets/Icon.svg";
import Non from "../../assets/MHblack.svg";

import WHATSAPP from "../../assets/whatsapp.svg";

export function Home() {
  const [signArea, setSign] = useState(false);
  const [orderEffect, setEffect] = useState(1)
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  /*ativa ou desativa a barra de rolagem quando o usuario for fazer login ou criar conta*/
  const [scrollPosition, setScrollPosition] = useState(false);
  /*define se os componentes Category, OrdeBy e Swiper quando a scroll estiver na posição scrollDefine(1100)*/
  const [slidesPerView, setSlidesPerView] = useState(5.5);
  //
  const [scrollDefine, setScrollDefine] = useState(500);
  /*posição do scroll quando chegar em products*/
  const [filteredProducts, setFilter] = useState([]);
  /*Array dos produtos filtrados por categoria e ordem,para nao precisar alterar os products*/
  const [category, setCategory] = useState('tudo');
  /*Categoria selecionada para mostrar produtos*/
  const [order, setOrder] = useState('Aleatorio');
  /*Ordem selecionada para mostrar os produtos*/
  const [Products, setFinal] = useState([]);
  /*Produtos recebidos da API, nunca devem ser alterados*/
  const [categories, setCategories] = useState([]);
  /*categorias recebidas da API, nunca devem ser alteradas*/
  const [menuOpen, setMenu] = useState(false);
  const [postersMobal, setMobalPoster] = useState([])
  const [posterDesk, setDeskPoster] = useState([])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  /*Leva o usuario para o topo da tela*/

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

  async function fetchCategory(){
    const Response = await api.get("/category/")

    setCategories(Response.data)
  };

  async function fetchItems(){
   const Response = await api.post("/items/index")

   const filteredResponse = Response.data.filter(item => item.status !== 0)
   setFinal(filteredResponse)
  };

  async function fetchPosters(){
   const Response = await api.get("/poster")

   if (Response.data) {
    const MobalFilter = Response.data.filter(item => item.img.includes("mobal"));
    const DesktopFilter = Response.data.filter(item => !item.img.includes("mobal"));

    setDeskPoster(DesktopFilter.length ? DesktopFilter : []);
    setMobalPoster(MobalFilter.length ? MobalFilter : []);

   }
  };

  useEffect(() => {
    fetchCategory()  
    fetchPosters()
    fetchItems()
    // Verifica o tamanho da tela na montagem do componente
    updateSlidesPerView();
    // Adiciona o event listener para redimensionamento da janela
    window.addEventListener("resize", updateSlidesPerView);
    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  function Open(){
    setSign(true)
  }
  function Close(){
    setSign(false)
  }

  const sortedCategories = categories.sort((a, b) => b.name.length - a.name.length);
  /*organia as categorias da maior a menor para manter organizadas*/
  const promotionProducts = Products.filter(product => product.promotion !== 0 && product.promotion !== null);
  /*separa e guarda dentro de uma const apenas os produtos da array Products que possuem promotion*/
  const highProducts = Products.filter(product => product.high == 1);
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
            { slidesPerView === 5.5 ? 
                <Swiper
                pagination={false}
                slidesPerView={1}
                spaceBetween={30} 
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 2000, disableOnInteraction: false }} 
                speed={1000} 
                >
                {posterDesk.length ?
                 posterDesk.map(poster => (
                  <SwiperSlide key={poster.id}>
                   <img src={`${api.defaults.baseURL}/files/${poster.img}`} alt="anuncio" />
                  </SwiperSlide>
                  ))
                            
                :
                  <div className="nonADS">
                   <img src={Non} alt="MHimports" />
                  </div>
                }
                </Swiper>
   
            :
             
              <Swiper
               pagination={false}
               slidesPerView={0}
               spaceBetween={30} 
               loop={true}
               modules={[Autoplay, Pagination, Navigation]}
               autoplay={{ delay: 5000, disableOnInteraction: false }} 
               speed={1000} 
               direction="horizontal"
              >
              {postersMobal.length ?
                postersMobal.map(poster => (
                 <SwiperSlide key={poster.id}>
                  <img src={`${api.defaults.baseURL}/files/${poster.img}`} alt="anuncio" />
                 </SwiperSlide>
                ))
              :
               <div className="nonADSM">
                <img src={NonMobal} alt="MHimports" />
               </div>
              }
             </Swiper>
        
            }     

         </div>
      </S.Ads>

      <S.Main>
        { highProducts.length ?
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
                          img={`${api.defaults.baseURL}/files/${item.img1}`}
                          high={item.high}
                          name={item.name}
                          price={item.price}
                          promotion={item.promotion}
                          effect={()=> setEffect(prevState => [prevState + 1])}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </S.High>
        :
         null
        }


        { promotionProducts.length ?
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
                           img={`${api.defaults.baseURL}/files/${item.img1}`}
                           name={item.name}
                           price={item.price}
                           promotion={item.promotion}
                           effect={()=> setEffect(prevState => [prevState + 1])}
                         />
                       </SwiperSlide>
                     ))}
                   </Swiper>
                 </div>
               </S.Offer>
        :
         null 
        }

        <S.Products>
          <div className="title">
            <span>PRODUTOS</span>
          </div>

          <div className="products">
            {filteredProducts.map(item => (
              <Card
                key={item.id}
                id={item.id}
                img={`${api.defaults.baseURL}/files/${item.img1}`}
                high={item.high}
                name={item.name}
                price={item.price}
                promotion={item.promotion}
                effect={()=> setEffect(prevState => [prevState + 1])}
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