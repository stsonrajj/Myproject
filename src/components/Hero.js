import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../scssfile/hero.scss'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'

const Hero = () => {
  return (
    <div>
         <Carousel className = 'hero'>
                <div>
                    <img src={img1} />
                    <p className="legend">Destination 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Destination 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Destination 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Destination 4</p>
                </div>
            </Carousel>
      
    </div>
  );
}

export default Hero;
