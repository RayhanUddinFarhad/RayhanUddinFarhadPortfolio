import React from 'react';
import myPic2 from '../assets/mypic2.jpg'
import { FaCircle, FaDownload, FaFoursquare } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AboutMe = () => {
  return (

    <div  className=" p-5 bg-gray-900 text-white  mx-auto  ">
      <div className="flex lg:space-x-5 flex-col lg:flex-row-reverse  items-center justify-center">
        <img data-aos="fade-left"
          data-aos-duration="1000"
           src={myPic2} className=" h-96 object-cover rounded-lg shadow-2xl" />
        <div data-aos="fade-right"
          data-aos-duration="1000" className=' max-w-xl lg:mr-5 p-2'>
          <p className='font-bold text-3xl mb-5'>    About me</p>
          <h1 className="text-5xl font-bold text-red-400">I am available for your  Project</h1>
          <p className="py-6">Hello! I'm Rayhan Uddin Farhad, from Chittagong, Bangladesh. <br />  I am dedicated to learning and mastering new technologies, and coding has become my true passion. <br /> I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills.

            If you have an exciting project in mind, I'm all ears! Feel free to explore my resume below to gain a better understanding of my skills and experience.

            Let's connect and bring your project to life together!</p>
          <button className="button-primary"> <a className='flex items-center' href="https://drive.google.com/file/d/1ue1QtCEDJ8LBbxiomAF45S8Q194ba5aY/view?usp=sharing"><FaDownload className='mr-2'></FaDownload> Download Resume</a></button>        </div>
      </div>
    </div>

  );
};

export default AboutMe;