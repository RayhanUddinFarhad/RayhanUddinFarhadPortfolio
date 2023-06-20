import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const MyProjects = () => {
    return (
        <div id='projects' className='text-base-content py-32 '>

            <h1 className='text-3xl text-white font-bold text-center'>My Recent Projects</h1>


            <div className='grid lg:grid-cols-3 my-5 gap-10 max-w-screen-lg mx-auto justify-center'>
            <Project2></Project2>

            <Project1></Project1>
            <Project3></Project3>





            </div>
            
        </div>
    );
};

export default MyProjects;