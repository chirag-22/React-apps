import React from 'react'
import 'tachyons';

const Phone = (props) =>{
    return(
     
        <div className="ma4 dib pa4 grow ">
            <img id="1" src="phone1.jpeg" alt="Phone"/>
    <h4>{props.name}</h4>
    <p>{props.work}</p>
        </div>
    )
}
export default Phone