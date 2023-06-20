import React from 'react';
import image from '../assets/mypic3.jpg'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-white  rounded ">

            <img className='w-32 h-32 object-cover ring ring-red-400 rounded-full ' src= {image} alt="" />
 
 
  <div>
    <p>Copyright © 2023 - All right reserved by Rayhan Uddin Farhad</p>
  </div>
</footer>
    );
};

export default Footer;