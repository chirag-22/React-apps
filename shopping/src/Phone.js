import React from 'react'
import 'tachyons';


const Phone = (props) =>{
    return(
     
        <div className="ma2 dib pa4 grow ">
           <a href={props.hr}> <img id="1"  src={props.src} alt="Phone"/></a>
    <h4>{props.name}</h4>
    <p>{props.work}</p>
        </div>
    )
}
export default Phone