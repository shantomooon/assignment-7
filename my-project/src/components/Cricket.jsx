import React, { useEffect, useState } from 'react';
import images from '../assets/images.jpeg'
import download from '../assets/download.png'
import flag  from '../assets/flag.png'
import fake from './fake/fake';
const Cricket = () => {
  const[Cricket, setCricket] = useState()
  useEffect(()=>{
    fetch('./fake')
    .then(fake=>fake.json())
    .then(data=> setCricket(data))
  },[] )
  console.log(fake)
    return (
        <div>
        
        </div>

        
    );
};

export default Cricket;