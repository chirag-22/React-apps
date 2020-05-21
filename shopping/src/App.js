import React,{Component} from 'react';
import './jumbotron.css';
import Cart from './Cart'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import Phone from './Phone' 
//import CartList from './CartList'


class App extends Component{
  render(){
    return(
      <div>
        <div className="jumbotron text-center">      
          <h1>CRAFTIC ECHOES</h1>
          <p>Mission, Vission & Values</p>
         </div>
         <BrowserRouter>
         <div>
           <Cart />
           <Switch>
           <Route path="/" exact component = {Home} />
           <Route path="/about" component = {About} />
           <Route path="/contact" component = {Contact} />
           </Switch>
         </div>
         
         </BrowserRouter>
  
         </div>
         
    );
  }
}
export default App;
