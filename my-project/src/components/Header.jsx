 import React, { useState } from 'react';
 import logoFooter from '../assets/logo-footer.png';
 import download from '../assets/download.jpeg';
 
const Header = ({addMoney}) => { 
    
    return (
        <div className='flex '>
         <img src={logoFooter} alt="" />
         <div className='box'>
            <h1 className='home'>Home</h1>
            <h2 className='home'> Fixture</h2>
            <h3 className='home'>Teams</h3>
            <h4 className='home'> Schedules</h4>
         </div>
        <div> <button className='pick'> <h1>{addMoney} coin</h1> <img src={download} alt="" /></button></div>
        </div>
        
    );
};



export default Header;