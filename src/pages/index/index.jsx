import * as S from "./style";

import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Signarea } from "../../components/SignArea";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Card } from "../../components/Card";


import WHATSAPP from "../../assets/whatsapp.svg";

export function Search() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [results, setResults] = useState([]);
  const { index } = useParams();

  function toggleOverlay() {
    setIsOverlayActive(!isOverlayActive);
  };

  useEffect(() => {
    if (isOverlayActive) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOverlayActive]);


  return (
    <S.Container >
      <Header 
       conta={toggleOverlay}
      />

      <Signarea 
       isactive={isOverlayActive}
       close={toggleOverlay}
      />


      <S.Main>

        <Link to={-1}>
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
