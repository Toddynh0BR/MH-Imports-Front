import * as S from "./style";

import { Link } from "react-router-dom";
import { useState } from "react";

import { BsLightningFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

export function Card({id ,img, name, price, promotion, high}){
    const [finalPrice, setFinal] = useState( promotion ? addPromotion() : price);

    function addPromotion(){
     const valor = price;
     const porcentagem = promotion;
        
     const diminuicao = valor - (valor * porcentagem) / 100;
     return diminuicao
    };

    function formatarComoDecimal(valor) {
        const formatador = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    
        return formatador.format(valor);
    };

    return(
      <Link to={`/preview/${id}`}>
       <S.Container>
     
      <div className="IMAGE">
        { img ?< img src={img} alt="imagem do produto" /> :  <span></span>}   

        <div className="add" onClick={(event)=> {
          event.preventDefault();
        }}>
         <FiPlus />
        </div>  

      </div>
      <div className="description">
        <span>{name}</span>
        <p>R$<strong>{formatarComoDecimal(finalPrice)}</strong></p>
        { promotion ? <p className="normalPrice">R$<strong>{formatarComoDecimal(price)}</strong></p> : null}
      </div>
      { promotion ? <div className="descount"> <BsLightningFill/> <p>-{promotion}%</p></div> : null}
     
       </S.Container>   
     </Link>
    )
}