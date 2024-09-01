import * as S from "./style";

import { Link } from "react-router-dom";
import { useState } from "react";

import { FiX, FiSearch } from "react-icons/fi";
import Logo from "../../assets/Header.svg";

import { Input } from "../Input";

export function Menu({menuopen= false, close, login}){
    const [asLogin, setAsLogin] = useState(false);
    const [results, setResults] = useState([
    ]);

    function handleLogin(){
     close()
     login()
    }

    return(
     <S.Container data-menuopen={menuopen}>
      <header>
       <img src={Logo} alt="MH Imports" />
       <FiX onClick={close}/>
      </header>

      <main>
       <div className="InputArea">
        <Input
         icon={FiSearch}
         placeholder="Buscar na MH Imports"
        />

       { results.length ?  
        <div className="results">
         { results.map(item => (
          <Link to={`/preview/${item.id}`}>
           <div className="result" key={item.id}>
            <p>{item.name}</p>
           </div>
          </Link>
         ))}
        
        </div>
       :
        null 
       }
       </div>

       <ul>
        { asLogin ?  <Link to='/user/profile'><li>Minha conta</li></Link>  : <li onClick={handleLogin}>Fazer login</li>}
        { asLogin ?  <Link to='/user/shopping'><li>Minhas Compras</li></Link> : <li onClick={handleLogin}>Minhas Compras</li>}
        <Link to='/order'>
         <li>Carrinho</li>
        </Link>
        { asLogin ? <li>Sair</li> : <li>Sair</li> }
       </ul>
      </main>
     </S.Container>
    )
}