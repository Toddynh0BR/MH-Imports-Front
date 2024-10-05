import * as S from "./style";

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { BsLightningFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

export function Card({ id, img, name, price, promotion, effect }) {
    const [finalPrice, setFinal] = useState(promotion ? addPromotion() : price);
    const { user } = useAuth();
    const [variation, setVariation] = useState([
    ]);

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

    async function fetchVariation() {
     const Response = await api.get(`/variation/${id}`);

     if (Response.data) setVariation(Response.data)
    };

    async function handleAddOrder() {

        const itemPrice = promotion ? addPromotion() : price;

        const actualVariation = variation.length ? variation[0].name : '';


        const Order = {
            id,
            img,
            name,
            price,
            promotion,
            observation: '',
            variation: actualVariation,
            quantity: 1,
            total: itemPrice 
        };

       

            let nowItems = JSON.parse(localStorage.getItem('@Items')) || [];
            const existingItemIndex = nowItems.findIndex(item => item.id === Number(id) && item.variation == actualVariation && item.observation == '');

            if (existingItemIndex !== -1) {

                nowItems[existingItemIndex].quantity += 1;
                nowItems[existingItemIndex].total = nowItems[existingItemIndex].quantity * itemPrice;
            } else {

                nowItems.push(Order);
            }

            Toast.fire({
                icon: "success",
                title: "Item adicionado ao carrinho"
              }); 
                        
            effect()
            localStorage.setItem('@Items', JSON.stringify(nowItems));
            
    };

    useEffect(()=> {
     fetchVariation() 
    }, [])

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
