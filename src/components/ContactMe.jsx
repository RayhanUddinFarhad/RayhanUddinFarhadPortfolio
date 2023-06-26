import React, { useRef } from 'react';
import mypc from '../assets/mypicForabout.jpg'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Shake from 'react-reveal/Shake';





const ContactMe = () => {
    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_22fhyy9', 'template_cfdy8ng', form.current, 'SmmDltuZLRZCNNVX4')
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {



                    Swal.fire(
                        'Good job!',
                        'Message has been sent successfully!',
                        'success'
                    )

                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div  className='max-w-screen-lg mx-auto '>

            <h1 className='text-white text-4xl font-bold text-center my-10'>Contact with me</h1>

            <div className='flex flex-col-reverse lg:flex-row items-center max-w-screen-2xl mx-auto space-y-5 lg:space-y-0  lg:space-x-5 p-10 bg-blue-950 rounded-3xl shadow'>


                <div className='space-y-5'>

                    <img className='h-96 object-contain shadow-2xl rounded-xl' src={mypc} alt="" />



                    <div className='w-full'>

                        <h1 className='text-gray-300 text-xl font-bold'>Find me on E-mail</h1>
                        <p className='text-white text-lg lg:text-xl font-bold '>RayhanUddinFarhad11@gmail.com</p>
                    </div>

                    <div>

                        <h1 className='text-gray-300 text-xl font-bold '>Find me on WhatsApp/Telegram/Phone</h1>
                        <p className='text-white text-lg lg:text-xl font-bold'>+8801791403364</p>

                    </div>


                </div>


                <form ref={form} onSubmit={sendEmail} className='w-full lg:space-y-5'>
                    <h1 className='text-xl font-bold  text-white'>Let's work together to build outstanding web experiences!<Shake loop>🚀</Shake></h1>
                    <div className=' lg:flex lg:space-x-4'>



                        <div className='text-white w-full '>


                            <label className="label">
                                <span className="label-text text-white">Your Name</span>
                            </label>



                            <input name='from_name' required type="text" placeholder='*Name' className='input  text-white bg-transparent border w-full  input-bordered  ' />

                        </div>

                        <div className='w-full' >


                            <label className="label">
                                <span className="label-text text-white">Your  Email</span>
                            </label>



                            <input name='from_email' required type="text" placeholder="*Email" className="input text-white bg-transparent input-bordered w-full" />

                        </div>
                    </div>

                    <div className='w-full' >


                        <label className="label">
                            <span className="label-text text-white">Subject</span>
                        </label>



                        <input required name='from_subject' type="text" placeholder="*Subject" className="input text-white bg-transparent input-bordered w-full" />

                    </div>

                    <div className='w-full' >


                        <label className="label">
                            <span className="label-text text-white">Message</span>
                        </label>



                        <textarea required name='message' type="text" placeholder="*Your Message" className="textarea text-white bg-transparent textarea-bordered h-32 w-full" />

                    </div>


                    <button className='button-primary w-full'>SEND MESSAGE</button>





                </form>



            </div>

        </div>
    );
};

export default ContactMe;