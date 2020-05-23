import React from 'react';
import Phone from './Phone'
import './carousel.css'
import Electronic from './Electronic';
//import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import {Carousel} from 'react-responsive-carousel'
const Home = (props) =>{
   
    return(
        <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         </ol>
         <div className="carousel-inner">
          <div className="carousel-item active">
             <img src="zoom1.jpg" className="d-block w-100" alt="..."/>
           </div>
           <div className="carousel-item">
             <img src="zoom2.jpg" className="d-block w-100" alt="..."/>
           </div>
           <div className="carousel-item">
             <img src="zoom4.jpg" className="d-block w-100" alt="..."/>
           </div>
           <div className="carousel-item">
             <img src="zoom3.jpg" className="d-block w-100" alt="..."/>
           </div>
           <div className="container">
             <img src="phone1.jpeg" alt="phn"/>
             </div>
         </div>
         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
           <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="sr-only">Next</span>
         </a>
         <div className="ma1 pa4 shadow-4">
            <h2>Best Selling Phones</h2>
            <h5 className="text-secondary">Trending Now</h5>
            <hr/>
       <Phone id="1" src="phone1.jpeg" hr="Realme" name="RealMe 6 Pro" work="64+12+8+2MP Quad Cam"/>
       <Phone id="2" src="phone2.jpeg" name="Honor 9X" work="16MP Pop-Up Selfie"/>
       <Phone id="2" src="phone6.jpeg" name="POCO X2" work="4500 mAh Battery"/>
       <Phone id="3" src="phone3.jpeg" name="Samsung Galaxy S20" work="108MP Triple cam"/>
       <Phone id="4" src="phone4.jpeg" name="Samsung Galaxy A51" work="48MP Quad cam"/>
       <Phone id="5" src="phone5.jpeg" name="Tecno Camon 15" work="48MP Rear Camera"/>
       </div>
       <div className="ma1 pa4 shadow-4">
            <h2>Best Electronic Devices</h2>
            <h5 className="text-secondary">Devices and Accessories</h5>
            <hr/>
       <Electronic id="6" sr="gaminghead.jpeg"nam="Gaming Headset" wok="Hyper X & Cosmic Byte"/>
       <Electronic id="7" sr="headphones.jpeg"nam="Bluetooth Headphone" wok="JBL,boAt & more"/>
       <Electronic id="8" sr="trimer1.jpeg"nam="Trimmer" wok="By Nova,Philips & more"/>
       <Electronic id="9" sr="earphone.jpeg"nam="Bluetooth Earphone" wok="realme,boAt & more"/>
       <Electronic id="10" sr="dekstop.jpeg"nam="Dekstops" wok="All in One's,Towers & more"/>
       </div>
       </div>
      </div>
    );
}
export default Home;