import * as S from "./style";

import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/Menu";
import { Card } from "../../components/Card";

import WHATSAPP from "../../assets/whatsapp.svg";

export function Search() {
  const [signArea, setSign] = useState(false);
  const [orderEffect, setEffect] = useState(1);
  const [menuOpen, setMenu] = useState(false);
  const [results, setResults] = useState([
    
   ]);
  const { index } = useParams();

  async function fetchResults(){
    Response = await api.post("/items/index", { index })

    if (Response.data) {
      const filteredResponse = Response.data.filter(item => item.status !== 0)
      setResults(filteredResponse)
    }
  };


  useEffect(()=> {
    fetchResults()
  },[index])

    
  function Open(){
    setSign(true)
  }
  function Close(){
    setSign(false)
  }


  return (
    <S.Container >
      <Header 
       orderEffect={orderEffect}
       conta={Open}
       openMenu={() => setMenu(true)}
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

        <Link to='/'>
         <p className="return">
          Voltar
         </p>
        </Link>

        <S.Products>
          <div className="title">
            <span>Resultados para: {index}</span>
          </div>

           { results.length ?
            <div className="products">
             { results.map(item => (
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
           : 
            <h2>Nenhum resultado encontrado</h2>
           }
        </S.Products>
      </S.Main>

      <a href="https://wa.me/5581999507813?text=Olá,%20gostaria%20de%20falar%20com%20você!" target="_blank">
        <img src={WHATSAPP} alt="whatsapp" className="whatsapp" />
      </a>
      <Footer />
    </S.Container>
  );
}
