import React from 'react';
import Phone from './Phone'
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
             <img src="zoom3.jpg" className="d-block w-100" alt="..."/>
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
       </div>
       
       <div className="ma1 pa4 shadow-4">
            <h2>Best Selling Phones</h2>
            <h5 className="text-secondary">Trending Now</h5>
            <hr/>
       <Phone id="1" name="RealMe 6 Pro" work="64+12+8+2MP Quad Cam"/>
       <Phone id="2" name="Honor 9X" work="16MP Pop-Up Selfie"/>
       <Phone id="3" name="Samsung Galaxy S20" work="108MP Triple cam"/>
       <Phone id="4" name="Samsung Galaxy A51" work="48MP Quad cam"/>
       <Phone id="5" name="Tecno Camon 15" work="48MP Rear Camera"/>
       </div>
      </div>
    );
}
export default Home;