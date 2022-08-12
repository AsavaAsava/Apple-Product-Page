import logo from './logo.svg';
import './App.css';
import img1 from './iphone/img1.jpg';
import img2 from './iphone/img2.jpg';
import img3 from './iphone/img3.jpg';
import img4 from './iphone/img4.jpg';
import img5 from './iphone/img5.jpg';
import img6 from './iphone/img6.jpg';
import img7 from './iphone/img7.jpg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div>
      <Parallax pages={6}>
        <ParallaxLayer sticky={{start: 0, end:1.2}}  >
          <div class="white1">
            <img src={img1}/>
            <h4>Oh. So. Pro.</h4>

          </div> 
          <div class="black1">
          <img src={img2}/>
          </div> 
        </ParallaxLayer>
        <ParallaxLayer  sticky={{start: 0.5, end: 2.8}} speed={0.6} >
          <div class="white2">
          <img src={img4}/>
          <h5> Surgical-grade</h5>
          <h5> stainless steel</h5>
          </div>
          <div class="black2">
          <img src={img3}/>
          </div> 
        </ParallaxLayer>
      <ParallaxLayer sticky={{start: 3.0, end:4.5}} speed={0.4} >
          <div class="white3">
          <img src={img5}/>
          <h5>Ceramic Shield, tougher than</h5>
          <h5>any smartphone glass</h5>
          </div> 
          <div class="black3">
          <img src={img6}/>
          </div> 
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 4.2, end:5.8}} speed={0.2} >
          <div class="nextDiv">
          <h5>Industry-leading IP68</h5>
          <h5>water resistance</h5>
          <img src={img7}/>
          </div> 
        </ParallaxLayer>
       
      </Parallax>
    </div>
  );
}

export default App;
