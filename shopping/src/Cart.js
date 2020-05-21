import React from 'react';
//import CartList from 'CartList'
import {Link} from 'react-router-dom'

const Cart = () =>{
    
     
        return( 
            <div>      
            <nav className="navbar navbar-dark bg-dark">
            <ul className="nav justify-content-start">
					<li className="nav-item"><Link className="nav-link text-light" to ="/">Home</Link></li>
					<li className="nav-item"><Link className="nav-link text-light" to="Contact">Contact</Link></li>
					<li className="nav-item"><Link className="nav-link text-light" to="About">About</Link></li>
				</ul>
            </nav>
        </div>
        )
}
export default Cart;