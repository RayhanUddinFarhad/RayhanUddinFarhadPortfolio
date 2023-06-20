import React from 'react';
import img1 from '../assets/MYXJ_20221019174719215_save(1).jpg'
import { FaCircle, FaDownload, FaFacebook, FaGithub, FaHeart, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { Button, IconButton } from 'ui-neumorphism';
import mongoDb from '../assets/mongodb.png'
import reactIcon from '../assets/react.svg'
import expressJs from '../assets/expressjss.svg'
import { Typewriter } from 'react-simple-typewriter';



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



        <div id='welcome' style={{ background: 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)' }} className=" min-h-96 p-5 mx-auto  ">
            <div className="lg:flex space-y-10 lg:space-y-0 lg:space-x-10 items-center justify-center ">
                <div className='relative'>

                    <img src={img1} className=" h-96 rounded-lg shadow-2xl" />

                    <div className='bg-purple-800 bg-opacity-50 text-white p-2 py-3 rounded-lg absolute top-60 shadow-2xl'> <p className='flex items-center'><FaHeart className='text-red-500 mr-2'></FaHeart> Projects</p>

                        <h3 className='text-2xl  font-bold whitespace-nowrap'>50+ projects</h3> </div>


                    {/* <div className='absolute right-0 bottom-20 flex items-center  bg-white p-2 py-3 rounded-lg'>

                        <p className='flex items-center font-bold'> <FaCircle className='mr-2 text-green-700 '></FaCircle> MERN Stack Developer</p>
                    </div> */}


                </div>

                <div className='text-white space-y-3 max-w-lg'>
                    <h1 className="text-5xl font-bold">Hi 👋 I'm Rayhan Uddin Farhad</h1>
                    <h1 className='text-4xl font-bold' style={{ margin: 'auto 0' }}>
                        I am a{' '}
                        <span className='text-red-400' style={{ fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['WEB DEVELOPER', 'MERN STACK DEVELOPER', 'FRONT-END DEVELOPER']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>                    <p className="py-6">I have a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love for learning, keen attention to detail, and a strong commitment to my work.</p>
                  

                    <div>
                        <p className='text-gray-300'>FIND WITH ME</p>

                        <div className='flex  space-x-2 my-2'>
                            <button className=' flex justify-center items-center btn-circle bg-purple-800 border-0 text-white shadow-2xl'>

                                <a href="https://www.linkedin.com/in/rayhan-uddin-farhad-23a593267/"> <FaLinkedin className='text-xl'></FaLinkedin></a>
                            </button>
                            <button className=' flex justify-center items-center btn-circle bg-purple-800 border-0 text-white shadow-2xl'>

                                <a href="https://github.com/RayhanUddinFarhad?tab=repositories"> <FaGithub className='text-xl'></FaGithub></a>
                            </button>
                            <button className=' flex justify-center items-center btn-circle bg-purple-800 border-0 text-white shadow-2xl'>

                                <a href="https://www.facebook.com/md.rayhan.uddin.farhad.7"> <FaFacebook className='text-xl'></FaFacebook></a>
                            </button>

                            <button className=' flex justify-center items-center btn-circle bg-purple-800 border-0 text-white shadow-2xl'>

                                <a href="https://www.instagram.com/rayhanuddinfarhad/"> <FaInstagram className='text-xl'></FaInstagram></a>
                            </button>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;