import React from "react"
import "./fa-color.css"

const Realme6 = () =>{
   return(
       <div className="col-lg-8 dib"> 
           <h3 className="ma3">Realme 6 Pro (Lightning Blue, 64 GB)  (6 GB RAM)</h3>
           <h2 className="ma3">₹17,999</h2>
           <h2 className="ma3">Available offers</h2>
           <div className="ma3 dib">
           <i className="fas fa-tag fas-color"></i> <h6 className="dib"> <span className="font-weight-bolder">Bank Offer </span>5% Unlimited Cashback on FlipKart Axis Bank Credit Card</h6>
         <br/><i className="fas fa-tag  fas-color" ></i>  <h6 className="dib"> <span className="font-weight-bolder">Bank Offer </span>Extra 5% off* with Axis Bank Buzz Credit Card</h6>
         <br/><i className="fas fa-sync  fas-color" ></i> <h6 className="dib"> Get upto <span className="font-weight-bolder"> ₹13250 </span>off on exchange</h6>
         <br/><i className="far fa-calendar-check   fas-color"></i> <h6 className="dib"> <span className="font-weight-bolder">No cost EMI ₹1,500/month. </span>Standard EMI also available</h6>
         <br/><i className="fas fa-tag  fas-color" ></i> <h6 className="dib"> <span className="font-weight-bolder">Partner Offer</span>Get 6-month YouTube Premium free trial with any Smartphone purchase</h6>
       </div>
              
       <div className="row shadow-4">
           <h1>Product Description</h1>
           <div>
               <hr/>
           <img src="phonereal1.jpeg"alt="1"/>
           <div className="col-lg-6 mr-1 float-left">
           <h5 className="dib ml-2">90 Hz Ultra Smooth Display</h5>
           <p className="dib">Get ready for a smooth and seamless interaction experience, every time you slide or tap your finger on the realme 6 Pro’s screen. By refreshing 90 times per second and featuring a fast refresh rate, this phone’s screen is as smooth as it comes.</p>
           </div>
           </div>
           
           <div className="col-lg-2 pr-1">  
               <img src="phonereal2.jpeg"alt="2"/>
           </div>
           <div className="col-lg-9">
               <h5 className="dib">Dual In-display Selfie</h5>
               <p className="dib">Take your selfie game to a whole ‘nother level with the realme 6 Pro’s 16 MP wide-angle lens, a 105° ultra-wide-angle lens, and a dual-camera combination that provides a 3x wider field of view.</p>
           </div>
       </div>

       </div>
   )
}
export default Realme6