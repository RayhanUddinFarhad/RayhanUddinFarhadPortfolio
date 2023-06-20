import React from 'react';
import img1 from '../assets/MYXJ_20221019174719215_save(1).jpg'
import { FaCircle, FaFacebook, FaHeart } from "react-icons/fa";
import { Button, IconButton } from 'ui-neumorphism';
import mongoDb from '../assets/mongodb.png'
import reactIcon from '../assets/react.svg'
import expressJs from '../assets/expressjss.svg'



const Banner = () => {
    return (
        // <div style={{background : 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)'}} className=' flex justify-center items-center'>


        //     <div>

        //         <img className='h-96 w-96 object-contain  ' src= {img1} alt="" />


        //     </div>



        //     <div className='text-white space-y-8'>

        //         <h1 className='text-5xl  font-extrabold'>Hello, I am Rayhan Uddin Farhad</h1>
        //         <h2 className='text-4xl'>I am a Mern Stack Developer</h2>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum, atque accusantium nobis labore corporis quia repellat at ipsam asperiores, sint repudiandae enim nulla possimus assumenda quod ipsa corrupti. Provident.</p>


        //     </div>

        // </div>



        <div style={{ background: 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)' }} className=" min-h-96 p-5 mx-auto  ">
            <div className="lg:flex  lg:space-x-10 items-center justify-center ">
                <div className='relative'>

                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />

                    <div className='bg-white p-2 py-3 rounded-lg absolute top-60 shadow-2xl'> <p className='flex items-center'><FaHeart className='text-red-500 mr-2'></FaHeart> Project</p>

                        <h3 className='text-xl  font-bold whitespace-nowrap'>50+ projects</h3> </div>


                    <div className='absolute right-0 bottom-20 flex items-center  bg-white p-2 py-3 rounded-lg'>

                        <p className='flex items-center font-bold'> <FaCircle className='mr-2 text-green-700 '></FaCircle> MERN Stack Developer</p>
                    </div>


                </div>

                <div className='text-white space-y-3 max-w-lg'>
                    <h1 className="text-5xl font-bold">Hello, I am Rayhan Uddin Farhad</h1>
                    <h3 className='text-4xl font-bold'>I am a <span className='text-red-400'>MERN stack Developer</span></h3>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Download Resume</button>

                    <div>
                        <p className='text-gray-300'>FIND WITH ME</p>

                        <div>
                            <IconButton text={false}
                                size='large'
                                className='ma-12'
                                color='var(--warning)' >
                                <FaFacebook className=''></FaFacebook>
                            </IconButton>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;