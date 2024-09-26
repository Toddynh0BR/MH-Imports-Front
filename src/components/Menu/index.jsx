import * as S from "./style";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { FiX, FiSearch, FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/Header.svg";

import { Input } from "../Input";

export function Menu({menuopen= false, close, login}){
    const { user, Logout } = useAuth();
    const navigate = useNavigate();

    const [typingTimeout, setTypingTimeout] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categoryOpen, setOpen] = useState(false);
    const [asLogin, setAsLogin] = useState(false);
    const [results, setResults] = useState([]);
    const [index, setIndex] = useState('');

   function handleLogin(){
     close()
     login()
   };

   async function handleSearch(value) {
    if (!value.trim()) return;


    Response = await api.post("/items/index", { index: value })

    if (Response.data) {
      const filteredResponse = Response.data.filter(item => item.status !== 0)
      setResults(filteredResponse)
    }
   };

   function handleInputChange(event) {
    const value = event.target.value;
    if (!value.trim()) setResults([])
    setIndex(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      handleSearch(value);
    }, 500); 

    setTypingTimeout(newTimeout);
   };

   function handleEnterPress(event) {

    if (event.key === 'Enter' || event.key === 'Tab' || event.key === 'ArrowRight' ) {
     if (!index.trim()) return;

     close()
     setIndex('')
     setResults([])
     navigate(`/search/${index}`)
    }
   };

   function handleClickSearch() {
    if (!index.trim()) return;

    close()
    setIndex('')
    setResults([])
    navigate(`/search/${index}`)
   };

   async function fetchCategory(){
    const Response = await api.get("/category/")

    console.log(Response.data)

    setCategories(Response.data)
  };

   useEffect(()=> {
    setAsLogin( user ? true : false )
    fetchCategory()
   },[user]);

    return(
     <S.Container data-menuopen={menuopen} data-category={categoryOpen}>
      <header>
       <img src={Logo} alt="MH Imports" />
       <FiX onClick={close}/>
      </header>

      <main>
       <div className="InputArea">
        <Input
          icon={FiSearch}
          value={index}
          clickIcon={handleClickSearch}
          onKeyDown={handleEnterPress}
          onChange={handleInputChange}
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
        { asLogin ? <li onClick={()=> {
           Logout()
           window.location.reload();
         }}>Sair</li> 
        :
         <li>Sair</li> 
        }

        { categories.length ?
         <div className="CategoryArea" onClick={()=> setOpen(prevState => !prevState)}>
          <div className="header">
           <span>Categorias</span>
           <FiChevronDown/>
          </div>
        
          <ul>
           { categories.map(item => (
            <Link to={`/category/${item.name}`} key={item.id}>
             <li>{item.name}</li>
            </Link>
           ))}
          </ul>
        
         </div>
        :
         null
        }
       </ul>


      </main>
     </S.Container>
    )
}