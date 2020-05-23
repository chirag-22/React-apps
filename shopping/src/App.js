import React,{Component} from 'react';
import './jumbotron.css';
import Cart from './Cart'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Realme from './Realme'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Honor from './Honor';
import Samsung from './Samsung';
import Samsung1 from './Samsung1';
import Poco from './Poco';
import Tecno from './Tecno';
import Handset from './Handset';
import Headphone from './Headphone';
import Trimmer from './Trimmer';
import Earphone from './Earphone';
import Dekstop from './Dekstop';
import Header from './Header';

//import Phone from './Phone' 
//import CartList from './CartList'


class App extends Component{
  render(){
    return(
      <div>
        <Header /> 
         <BrowserRouter>
         <div>
           <Cart />
           <Switch>
           <Route path="/" exact component = {Home} />
           <Route path="/about" component = {About} />
           <Route path="/contact" component = {Contact} />
           <Route path="/Realme" component = {Realme} />
           <Route path="/Honor" component = {Honor}/>
           <Route path="/Samsung" component = {Samsung}/>
           <Route path="/Samsung1" component = {Samsung1}/>
           <Route path="/Tecno" component = {Tecno}/>
           <Route path="/Poco" component = {Poco}/>
           <Route path="/Handset" component = {Handset}/>
           <Route path="/Headphone" component = {Headphone}/>
           <Route path="/Trimmer" component = {Trimmer}/>
           <Route path="/Earphone" component = {Earphone}/>
           <Route path="/Dekstop" component = {Dekstop}/>
           </Switch>
         </div>
         
         </BrowserRouter>
  
         </div>
         
    );
  }
}
export default App;
