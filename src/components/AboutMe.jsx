import React from 'react';
import myPic2 from '../assets/mypic2.jpg'
import { FaCircle, FaFoursquare } from 'react-icons/fa';

const AboutMe = () => {
    return (

<div className=" min-h-96 bg-gray-900 text-white py-32 mx-auto ">
  <div className="flex lg:space-x-5 flex-col lg:flex-row-reverse  items-center justify-center">
    <img src={myPic2} className="max-w-sm rounded-lg shadow-2xl" />
    <div className=' max-w-lg'>
        <p className='bg-gray-700 w-20 text-center rounded-md mx-auto flex items-center whitespace-nowrap p-1'>   About me</p>
        <p>My Name is Rayhan Uddin Farhad</p>
      <h1 className="text-5xl font-bold text-red-400">I am available for your web Project</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
    );
};

export default AboutMe;