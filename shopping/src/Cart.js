import React from 'react';
//import CartList from 'CartList'
import {Link} from 'react-router-dom'

const Cart = () =>{
    
     
        return( 
            <div>
            <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
					<li><Link to ="/">Home</Link></li>
					<li><Link to="Contact">Contact</Link></li>
					<li><Link to="About">About</Link></li>
				</ul>
            </nav>
        </div>
        )
}
export default Cart;