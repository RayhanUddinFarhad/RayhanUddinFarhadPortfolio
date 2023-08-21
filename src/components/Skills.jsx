import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import htmlPic from '../assets/html-5.png'
import css from '../assets/css-3.png'
import tailwindpic from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import javascript from '../assets/js.png'
import reactPic from '../assets/react.svg'
import nodejs from '../assets/nodejs.png'
import mongoDb from '../assets/mongodb.png'
import android from '../assets/android.png'
import github from '../assets/Github.png'
import firebase from '../assets/firebase.png'
import nextjs from '../assets/next-js.svg'
import redux from '../assets/redux.svg'
import figma from '../assets/figma.svg'
import postman from '../assets/postman.svg'

const Skills = () => {
    return (
        <div className='text-white w-full p-5' style={{ background: 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)' }}>
            <h1 className='text-white text-3xl font-bold text-center  p-2'>Skills</h1>
            <div className='divider-horizontal'></div>


            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" className=' grid lg:grid-cols-4 grid-cols-2  items-center justify-center space-y-5 mx-auto gap-5 max-w-screen-lg '>



                {/* <div className=' font-bold'>
                    HTML

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={98}></ProgressBar>
                </div>

                <div className='  font-bold'>
                    CSS

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={90}></ProgressBar>
                </div>
                <div className='  font-bold'>
                    Bootstrap

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={90}></ProgressBar>
                </div>
                <div className='  font-bold'>
                    Tailwind CSS

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={90}></ProgressBar>
                </div>
                <div className='  font-bold'>
                    Javascript

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={80}></ProgressBar>
                </div>
                <div className='  font-bold'>
                    React Js

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={92}></ProgressBar>
                </div>
                <div className='  font-bold'>
                    Mongodb

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={70}></ProgressBar>
                </div>
                <div className='  font-bold'>
                    Express Js

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={80}></ProgressBar>
                </div>
                <div className='  font-bold'>
                    Android App Development

                    <ProgressBar animateOnRender={true} bgColor='#f87171' className='max-w-sm ' completed={50}></ProgressBar>
                </div> */}



                <div className='flex items-center justify-center space-x-3'>





                    {/* <div className="radial-progress text-red-400 font-extrabold" style={{ "--value": "98", "--size": "8rem", "--thickness": "1rem" }}> 98%</div> */}
                    <img className='w-8' src={htmlPic} alt="" />
                    <h1 className='text-2xl font-bold'>HTML</h1>
                </div>

                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-[#718af0] font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 90%</div> */}
                    <img className='w-8' src={css} alt="" />

                    <h1 className='text-2xl font-bold'>CSS</h1>
                </div>
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-teal-500 font-extrabold" style={{ "--value": "95", "--size": "8rem", "--thickness": "1rem" }}> 95%</div> */}
                    <img className='w-8' src={tailwindpic} alt="" />

                    <h1 className='text-2xl font-bold'>Tailwind</h1>

                </div>

                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-purple-300 font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 90%</div> */}
                    <img className='w-8' src={bootstrap} alt="" />

                    <h1 className='text-2xl font-bold'>Bootstrap</h1>
                </div>

                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-yellow-300 font-extrabold" style={{ "--value": "80", "--size": "8rem", "--thickness": "1rem" }}> 80%</div> */}
                    <img className='w-8' src={javascript} alt="" />

                    <h1 className='text-2xl font-bold'>Javascript</h1>

                </div>
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-blue-300 font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 88%</div> */}
                    <img className='w-8' src={reactPic} alt="" />

                    <h1 className='text-2xl font-bold'>React</h1>
                </div>
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-blue-300 font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 88%</div> */}
                    <img  className='w-8 bg-white rounded-full border-0 outline-0 ' src={nextjs} alt="" />
                    

                    <h1 className='text-2xl font-bold'>Next.js</h1>
                </div>
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-blue-300 font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 88%</div> */}
                    <img className='w-8' src={redux} alt="" />

                    <h1 className='text-2xl font-bold'>Redux</h1>
                </div>

              
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-emerald-600 font-extrabold" style={{ "--value": "70", "--size": "8rem", "--thickness": "1rem" }}> 70%</div> */}
                    <img className='w-8' src={nodejs} alt="" />
                    <h1 className='text-2xl font-bold'>Node.js</h1>

                </div>
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-green-300 font-extrabold" style={{ "--value": "85", "--size": "8rem", "--thickness": "1rem" }}> 85%</div> */}
                    <h1 className='text-2xl font-bold'>Express Js</h1>

                </div>

                <div className='flex items-center justify-center space-x-3'>



{/* <div className="radial-progress text-emerald-600 font-extrabold" style={{ "--value": "70", "--size": "8rem", "--thickness": "1rem" }}> 70%</div> */}
<img className='w-8' src={mongoDb} alt="" />
<h1 className='text-2xl font-bold'>MongoDB</h1>

</div>

                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-yellow-500 font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 90%</div> */}
                    <img className='w-8' src={firebase} alt="" />

                    <h1 className='text-2xl font-bold'>Firebase</h1>

                </div>
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-green-500 font-extrabold" style={{ "--value": "85", "--size": "8rem", "--thickness": "1rem" }}> 85%</div> */}
                    <img className='w-8' src={android} alt="" />

                    <h1 className='text-2xl font-bold'>Android </h1>
                </div>

                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-white font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 90%</div> */}
                    <FaGithub className='text-4xl'></FaGithub>

                    <h1 className='text-2xl font-bold'>Github</h1>

                </div>
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-white font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 90%</div> */}
                    <img className='w-8' src={figma} alt="" />

                    <h1 className='text-2xl font-bold'>Figma</h1>

                </div>
                <div className='flex items-center justify-center space-x-3'>



                    {/* <div className="radial-progress text-white font-extrabold" style={{ "--value": "90", "--size": "8rem", "--thickness": "1rem" }}> 90%</div> */}
                    <img className='w-8' src={postman} alt="" />

                    <h1 className='text-2xl font-bold'>Postman</h1>

                </div>

                
            </div>
        </div>
    );
};

export default Skills;