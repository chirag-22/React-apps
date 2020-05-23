import React from 'react'
import 'tachyons';

const Electronic = (props) =>{
    return(
     
        <div className="ma3 dib pa4 grow ">
           <a href={props.hr}> <img id="1" src={props.sr} alt="Phone"/></a>
    <h4>{props.nam}</h4>
    <p>{props.wok}</p>
        </div>
    )
}
export default Electronic;