import * as  S from "./style";
import { useState } from "react";

export function Input({icon: Icon, ...rest}){
    const [inputFocus, setFocus] = useState(false)

    return(
     <S.Container data-input-focus={inputFocus}>
      <input 
       onChange={()=> inputFocus ? setFocus(false) : setFocus(true)}
       type="text" 
       {...rest}
      />
     {Icon && <Icon size={20} />}
     </S.Container>
    )
}