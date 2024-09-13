import * as S from "./style";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

import { BsLightningFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

export function Card({ id, img, name, price, promotion, effect}) {
    const [finalPrice, setFinal] = useState(promotion ? addPromotion() : price);
    const { user } = useAuth();

    function addPromotion() {
        const valor = price; 
        const porcentagem = promotion;
        const diminuicao = valor - (valor * porcentagem) / 100;
        return diminuicao;
    }

    function formatarComoDecimal(valor) {
        const formatador = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return formatador.format(valor);
    };

    async function handleAddOrder() {

        const itemPrice = promotion ? addPromotion() : price;

        const Order = {
            id,
            img,
            name,
            price,
            promotion,
            quantity: 1,
            total: itemPrice 
        };

       

            let nowItems = JSON.parse(localStorage.getItem('@Items')) || [];

            const existingItemIndex = nowItems.findIndex(item => item.id === id);

            if (existingItemIndex !== -1) {

                nowItems[existingItemIndex].quantity += 1;
                nowItems[existingItemIndex].total = nowItems[existingItemIndex].quantity * itemPrice;
            } else {

                nowItems.push(Order);
            }

            effect()
            alert("Item adicionado ao carrinho")
            localStorage.setItem('@Items', JSON.stringify(nowItems));

    };

    return (
        <Link to={`/preview/${id}`}>
            <S.Container>
                <div className="IMAGE">
                    {img ? <img src={img} alt="imagem do produto" /> : <span></span>}

                    <div className="add" onClick={(event) => {
                        event.preventDefault();
                        handleAddOrder();
                    }}>
                        <FiPlus />
                    </div>
                </div>
                <div className="description">
                    <span>{name}</span>
                    <p>R$<strong>{formatarComoDecimal(finalPrice)}</strong></p>
                    {promotion ? <p className="normalPrice">R$<strong>{formatarComoDecimal(price)}</strong></p> : null}
                </div>
                {promotion ? <div className="descount"> <BsLightningFill /> <p>-{promotion}%</p></div> : null}
            </S.Container>
        </Link>
    );
}
