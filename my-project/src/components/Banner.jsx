import React, { useState } from 'react';
import BgShadow from '../assets/bg-shadow.png';
import BannerMain from '../assets/banner-main.png'
const Banner = ({handleTheBtn}) => {
    
    
    return (
        <div className='bk'>
          
            <div className='ben'>
              <img src={BannerMain} alt="" />
            </div>
            <div className='okbk'>
            <h1 className='ok'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h2 className='ck'>Beyond Boundaries Beyond Limits</h2>
            <button onClick={handleTheBtn} className='ops'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;