import React from 'react'
import imgBanner2 from '.././Image/pager-bg.jpg'
import { Link } from 'react-router-dom'
export const Contact = () => {
    return (
        <>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <img src={imgBanner2} alt="banner" className="w-100" style={{ objectFit: 'cover',height:'500px' }}></img>
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                    <div className='col-12 text-center'>
                        <h1 style={{ fontSize: '7vh' }} className='text-light fw-bold' >Contact Us</h1>
                        <Link to='/' style={{textDecoration:'none'}} className='fs-5 text-secondary fw-bold mx-3'> Home </Link>
                        <a className='fs-5 text-secondary fw-bold mx-3' style={{ textDecoration: 'none' }} >Contact us</a>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='col-12'>

                    <h5 className="text-warning fs-2 text-center mt-5" style={{ fontFamily: "'Great Vibes', cursive" }}>Be In Touch</h5>
                    <h3 className="fs-1 fw-bold text-center ">Send Us A Message</h3>
                    <div className='row'>
                        <div className='col-2'>
                            {/* Black space */}
                        </div>

                        <div className='col-8'>
                            <p className='fs-5 text-secondary my-3'>
                                If you have any questions regarding the order, please give us a call at <b>+1 (404) 500-8548,</b> and one of our associates should be able to assist you. <br /><br />
                                If you need consulation regarding collaboration or have any questions we can answer for you, please send us a message. You can also reach us directly via <b>email: contact@tiffineatz.com</b>
                            </p>

                            {/* Contact Form */}
                            <form>
                                <div className='row my-5'>
                                    <div className='col-6'><input type='text' className='form-control  rounded-pill py-4 px-4' placeholder='Name*' /> </div>
                                    <div className='col-6'><input type='email' className='form-control rounded-pill py-4 px-4' placeholder='Email*' /> </div>
                                    <div className='col-12 my-4'><textarea rows={5} className='form-control  py-3 px-3' style={{ borderRadius: '20px' }} placeholder='Message' /> </div>
                                    <div className='col-12 text-center'>
                                        <button className='btn rounded-pill w-25 text-light py-3' style={{ background: 'linear-gradient(93.93deg, #d8ab37 0%, #f18345 100%)' }}> Submit </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='col-2'>
                            {/* Black space */}
                        </div>

                    </div>
                </div>

                <div className='col-12 my-5'>
                    <div className='col-12 text-center border-top border-4 border-dark'>
                        <b className=' fs-1' >Frequently Asked Questions</b>
                    </div>
                    <div className='col-12'>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            
                            <div className="accordion-item py-1 border-bottom-0">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed fs-3 fw-bold bg-light text-secondary border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        1. What is TiffinEatz?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fs-6 text-secondary px-4">
                                        TiffinEatz is a community based platform that enables home chefs to sell home cooked food in their neighborhood without any investment. It connects home chefs to their target audience. If you want to learn more on how you can register as Kitchen or have any questions, please contact us at contact@tiffineatz.com.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item py-1 border-bottom-0">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed fs-3 fw-bold bg-light text-secondary border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        2. How to place an order?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fs-6 text-secondary px-4">
                                        You can explore Kitchens in your neighborhood, and place orders for upto a week in advance. Once you add items to your cart and place an order for a specific time and date (up to seven days in advance), you wait for the vendor to accept it. You can select pick up or delivery. Once the order is confirmed you will be notified when the order is ready. Enjoy your fresh, authentic home cooked meal!
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item py-1 border-bottom-0">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed fs-3 fw-bold bg-light text-secondary border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        3. Can I edit my menu items?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fs-6 text-secondary px-4">
                                        You can add, edit or delete items on your menu anytime. You can change your item availability anytime for upto a week in advance. Once you have accepted the order then you have to finish it before the completion time, or you can contact the customer and edit the order or cancel accordingly.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item py-1 border-bottom-0">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed fs-3 fw-bold bg-light text-secondary border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        4. How many days a week can I cook?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body border border-0 fs-6 text-secondary px-4">
                                        You can cook any number of days, there is no limitation to when you operate, as long as you fulfill your order on time. TiffiEatz does not control your cooking schedule and provides you with freedom to use our platform to sell your food according to your comfort.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item py-1 border-bottom-0">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed fs-3 fw-bold bg-light text-secondary border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        5. How do I get paid?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fs-6 text-secondary px-4">
                                        For the first version of this app we do not provide a payment gateway. Customers(Patron) will pay Kitchens directly during pick up or delivery according to the acceptable payment methods offered by the Kitchens.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item py-1 border-bottom-0">
                                <h2 className="accordion-header" id="flush-headingSix">
                                    <button className="accordion-button collapsed fs-3 fw-bold bg-light text-secondary border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        6. Who can cook on TiffinEatz? Am I eligible to cook?
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body border-0 fs-6 text-secondary px-4">
                                        Anyone who is passionate about cooking can use TiffinEatz! We welcome a wide range of people such as professional chefs, amatuer home chefs, and even those who have never cooked professionally before. No matter what a home chef’s background is, we will provide you with the tools and resources you need to prepare food safely and share your passion for cooking with your community!
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item py-1 border-bottom-0">
                                <h2 className="accordion-header" id="flush-headingSeven">
                                    <button className="accordion-button collapsed fs-3 fw-bold bg-light text-secondary border border-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        7. What does TiffinEatz bring?
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fs-6 text-secondary px-4">
                                        TiffinEatz brings all the people who want to sell home cooked food as a passion or profession together with the people who want to experience the real feel of authentic home cooked food. We want to create a community in every city to bring people together who share the love of food.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}