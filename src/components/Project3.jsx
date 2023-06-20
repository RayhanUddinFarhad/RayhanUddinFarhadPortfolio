import React from 'react';
import brainbox from '../assets/BrainBoxKiddo.png'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import collections from '../assets/Toys/ToysCollections.png'
import details from '../assets/Toys/ToysDetails.png'
import myToys from '../assets/Toys/ToysMy.png'
import allToys from '../assets/Toys/ToysAll.png'
import addToys from '../assets/Toys/ToysAdd.png'

const Project3 = () => {
    return (
        <>

            <div className="card  bg-base-content text-gray-100 shadow-xl h-full">
                <figure><img className='w-' src={brainbox} alt="Shoes" /></figure>
                <div className="card-body justify-end">
                    <h1> <span className='text-2xl font-bold'>BrainboxKiddo</span> -  A Toys Marketplace Website</h1>

                    <div className="card-actions justify-end">
                        <button className="btn btn-circle" onClick={() => window.my_modal_7.showModal()}> <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>






            <dialog id="my_modal_7" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-900">


                    <div className='lg:flex justify-between space-x-5 '>



                        <div className='lg:w-[50%]'>


                            <Carousel className=' text-white' showArrows={true} >
                                <div>
                                    <img src={collections} />
                                    <p className="legend">Collections</p>
                                </div>
                                <div>
                                    <img src={details} />
                                    <p className="legend">Check details and add it to your cart</p>
                                </div>
                                <div>
                                    <img src={allToys} />
                                    <p className="legend">Explore all toys added by seller</p>
                                </div>
                                <div>
                                    <img src={addToys} />
                                    <p className="legend">Add your own tiys</p>
                                </div>
                                <div>
                                    <img src={myToys} />
                                    <p className="legend">Check your added toys</p>
                                </div>
                            </Carousel>

                            <div className='flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col'>


                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://brainboxkiddo.web.app/">Live link <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/RayhanUddinFarhad/BrainBox-Kiddo-Client"> Client side  code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/RayhanUddinFarhad/BrainBox-Kiddo-Server">Server Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
                            </div>


                        </div>
                        <div className='border '>


                        </div>


                        <div className='text-white lg:w-[50%] space-y-5 '>


                            <h1 className='text-xl font-bold'>Technologies</h1>
                            <p>React.js, React Router, Tailwind, DaisyUi, Firebase, MongoDB, Express js.</p>

                            <h1 className='text-xl font-bold'>Details</h1>


                            <p>I have developed a Toy website where users can explore a diverse collection of educational toys. <br /> The website allows users to register and log in to access advanced features such as adding, removing, and updating their toy collection using the CRUD operations.  <br /> <br /> Users can easily search for specific toys and sort them by price to find the best options. <br /> <br /> The website provides detailed information about each toy, including descriptions and images, to help users make informed decisions. <br /> <br /> It offers a seamless and interactive experience for users to discover and manage their educational toys efficiently.</p>




                            <h1 className='text-xl font-bold'>Key Features</h1>
                            <ul className='list-disc p-2 space-y-5'>
                                <li>Extensive Educational Toy Collection: Users can browse and explore a wide range of educational toys.</li>
                                <li>User Authentication: Users can register and log in to access additional features.</li>
                                <li>CRUD Operations: After logging in, users can add, remove, and update their toys using the Create, Read, Update, and Delete (CRUD) operations.</li>
                                <li>Toy Details: Users can view detailed information about each toy, including descriptions, images, and specifications.</li>
                                <li>Search Functionality: Users can search for specific toys based on keywords or categories.</li>
                                <li>Price Sorting: Users can sort the toys by price to find the ones that fit their budget.</li>
                            </ul>
                        </div>



                    </div>

                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>




        </>
    );
};

export default Project3;