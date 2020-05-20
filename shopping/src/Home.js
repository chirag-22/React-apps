import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
const Home = () =>{
    return(
    <div>
        <Carousel>
       <div>
           <img src="logo192.png" alt="img1"/>
           <h2>Sample</h2>
       </div>
       <div>
           <img src="logo512.png" alt="img2"/>
           <h2>sample</h2>
       </div>
      </Carousel>
</div>
    );
}
export default Home;