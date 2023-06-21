import React from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import stylespot from '../assets/StyleSpot.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import collections from '../assets/StyleSpotCollection/StyleSpotCollections.png'
import details from '../assets/StyleSpotCollection/StyleSpotDetails.png'
import cart from '../assets/StyleSpotCollection/StyleSpotCart.png'
import checkOut from '../assets/StyleSpotCollection/StyleSpotChecOut.png'
import status from '../assets/StyleSpotCollection/StyleStatus.png'
import { Carousel } from 'react-responsive-carousel';

const Project2 = () => {
  return (
    <>


      <div className="card  bg-transparent text-gray-100 shadow-xl h-full">
        <figure><img className='hover:scale-125 ease-in duration-500' src={stylespot} alt="Shoes" /></figure>
        <div className="card-body justify-end">
          <h1> <span className='text-2xl font-bold'>StyleSpot</span> -  An E-Commerce Website</h1>

          <div className="card-actions justify-end">
            <button className="btn btn-circle hover:bg-inherit hover:text-white" onClick={() => window.my_modal_5.showModal()}> <FaArrowRight></FaArrowRight></button>
          </div>
        </div>
      </div>





      <dialog id="my_modal_5" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-900">


          <div className='lg:flex justify-between lg:space-x-5 space-y-5 lg:space-y-0'>



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
                  <img src={cart} />
                  <p className="legend">Check cart collections and  increase or decrease quantity</p>
                </div>
                <div>
                  <img src={checkOut} />
                  <p className="legend">Checkout with address</p>
                </div>
                <div>
                  <img src={status} />
                  <p className="legend">Track  your order</p>
                </div>
              </Carousel>

              <div className='flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col'>


                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://stylespot-4e572.web.app/">Live link <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/RayhanUddinFarhad/Style-Spot-client"> Client side  code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>

                <button><a className='bg-gray-700 text-white p-1.5 rounded-lg flex items-center whitespace-nowrap' href="https://github.com/RayhanUddinFarhad/Style-Spot-Server">Server Code <FaExternalLinkAlt className='ml-2'></FaExternalLinkAlt></a></button>
              </div>


            </div>
            <div className='border '>


            </div>


            <div className='text-white lg:w-[50%] space-y-5 '>


              <h1 className='text-xl font-bold'>Technologies</h1>
              <p>React.js, React Router, React Query, Axios, Tailwind CSS, MongoDB, Express js, Firebase and JWT</p>


              <h1 className='text-xl font-bold'>Details</h1>


              <p>Stylespot is a user-friendly website that offers a diverse collection of dresses for men, women, and children. With its seamless shopping experience, users can effortlessly add products to their cart and proceed with a hassle-free checkout process. Registered users can enjoy the benefits of order tracking, ensuring they stay updated on the status of their purchases. Stylespot provides a convenient and enjoyable online shopping experience for all fashion enthusiasts.</p>







              <h1 className='text-xl font-bold'>Key Features</h1>
              <ul className='list-disc p-2 space-y-3'>
                <li>Extensive Dress Selection: Users can explore a wide range of men, women, and children dresses.</li>
                <li>Seamless Shopping Experience: Users can add products to their cart without the need for login.</li>
                <li>Efficient Checkout Process: Registered users can easily check out their selected products.</li>
                <li>Order Tracking: Users can track the status of their orders for a convenient shopping experience.</li>
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

export default Project2;