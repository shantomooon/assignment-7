import React from 'react';
import images from '../assets/images.jpeg'
import download from '../assets/download.png'
import flag  from '../assets/flag.png'
const click = () => {
    return (
        <div>
         <div className='moni'>
           
           <div className='kohli'>
           <img
     src={images}
     alt="kholi" />
      <div className="bog">
   <img src={download} alt="" />
   <h1>Virat Kohli</h1>
 </div>
 <div className='virat'>
   <img src={flag} alt="" /> <h1>india</h1> <button className='bp'>batsman</button>
 </div>

           </div>
           <div className='kohli'>
           <img
     src={images}
     alt="kholi" />
      <div className="bog">
   <img src={download} alt="" />
   <h1>Virat Kohli</h1>
 </div>
 <div className='virat'>
   <img src={flag} alt="" /> <h1>india</h1> <button className='bp'>batsman</button>
 </div>

           </div>
           <div className='kohli'>
           <img
     src={images}
     alt="kholi" />
      <div className="bog">
   <img src={download} alt="" />
   <h1>Virat Kohli</h1>
 </div>
 <div className='virat'>
   <img src={flag} alt="" /> <h1>india</h1> <button className='bp'>batsman</button>
 </div>

           </div>
           
           
 
   
 
</div>

        </div>
    );
};

export default click;