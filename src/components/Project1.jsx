import React from 'react';
import dramatix from '../assets/DramatixLab.png'
import { FaArrowRight, FaCircle, FaExternalLinkAlt } from 'react-icons/fa';
import dramatixFull from '../assets/DramatixLabFull.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import StudentDashboard from '../assets/DramatixLabImages/StudentDashboard.png'
import instructorDashboard from '../assets/DramatixLabImages/InstructorDashboard.png'
import adminManageClass from '../assets/DramatixLabImages/adminManageClass.png'

import adminUserManeg from '../assets/DramatixLabImages/AdminManageUsers.png'
import updateProfile from '../assets/DramatixLabImages/UpdateProfile.png'


const Project1 = () => {
    return (
        <>
            <div className="card  bg-transparent text-gray-100 shadow-xl h-full">
                <figure><img className='hover:scale-125 ease-in duration-500' src={dramatix} alt="Shoes" /></figure>
                <div className="card-body justify-end">
                    <h1> <span className='text-2xl font-bold'>DramatixLab</span> -  A Summer School Camp Website</h1>

                    <div className="card-actions justify-end">
                        <button className="btn btn-circle  hover:bg-inherit hover:text-white" onClick={() => window.my_modal_4.showModal()}> <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>


            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-900">


                    <div className='lg:flex justify-between space-y-5 lg:space-y-0 lg:space-x-5 '>



                        <div className='lg:w-[50%]'>


                            <Carousel className=' text-white' showArrows={true} >
                                <div>
                                    <img src={StudentDashboard} />
                                    <p className="legend">Student Dashbard</p>
                                </div>
                                <div>
                                    <img src={instructorDashboard} />
                                    <p className="legend">Instructor Can add class</p>
                                </div>
                                <div>
                                    <img src={adminUserManeg} />
                                    <p className="legend">Admin can manage users</p>
                                </div>
                                <div>
                                    <img src={adminManageClass} />
                                    <p className="legend">Admin can manage classes</p>
                                </div>
                                <div>
                                    <img src={updateProfile} />
                                    <p className="legend">Anyone can update profile</p>
                                </div>
                            </Carousel>

                            <div className='flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col'>


                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://dramatixlab.web.app/">Live link <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/RayhanUddinFarhad/DramatixLab-Client"> Client side  code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/RayhanUddinFarhad/DramatixLab-Server">Server Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                            </div>


                        </div>
                        <div className='border '>


                        </div>


                        <div className='text-white lg:w-[50%] space-y-5 '>



                            <h1 className='text-xl font-bold'>Technologies</h1>
                            <p>React js, React router, React query, axios, Tailwind  CSS, DaisyUI, MongoDb, Exrpess js, Firebase, Stripe and JWT</p>

                            <h1 className='text-xl font-bold'>Details</h1>


                            <p>I have completed a website called "DramatixLab" for summer school camps. <br /> The website offers various features to enhance the experience for students, instructors, and admins. <br /> Students can easily enroll in summer school camps by logging in and making payments through Stripe integration. <br />They can also track their payment history and view their enrolled classes. <br /> Instructors have their own dashboard where they can add classes, monitor class status, and receive feedback from the admin. Admins have full control over user and class management, including approving or denying class requests, assigning roles, and providing feedback. <br /> The website boasts a user-friendly interface and provides the option to choose between dark and light themes for a personalized experience. It showcases a seamless and efficient system for managing summer school camps, making it a valuable addition to my portfolio.</p>




                            <h1 className='text-xl font-bold'>Key Features</h1>
                            <ul className='list-disc p-2 space-y-5'>
                                <li>Student Enrollment: Students can log in and enroll in summer school camps using Stripe payment integration, ensuring a seamless enrollment process.</li>
                                <li>Payment History Tracking: Students can view their payment history, providing transparency and easy access to past transactions.</li>
                                <li>Instructor Dashboard: Instructors have access to a dedicated dashboard where they can add classes, track class status, and receive valuable feedback from the admin.</li>
                                <li>Admin Management: Admins can manage users and classes, including approving or denying class requests, assigning roles (student/instructor/admin), and providing feedback.</li>
                                <li>User-Friendly Interface: The website offers a user-friendly interface that ensures a smooth and intuitive experience for all users.</li>
                                <li>Dark/Light Theme Options: Users have the ability to switch between dark and light themes, enhancing personalization and visual preferences.</li>
                            </ul>

                        </div>



                    </div>

                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-white text-2xl absolute right-0 -top-2">✕</button>
                    </div>
                </form>
            </dialog>

        </>

    );
};

export default Project1;