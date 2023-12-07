import React from 'react'
import imgBanner2 from '.././Image/pager-bg.jpg'
import { Link } from 'react-router-dom'
import imgDownload from '../Image/smartphone1.png'
import imgSignup from '../Image/signup.png'
import imgTask from '../Image/completed-task.png'
import imgAccount from '../Image/account.png'
import imgAndroid from '../Image/playstore_btn.png'
import imgApple from '../Image/apple_btn.png'

export const RegisterKitchen = () => {
    return(
        <>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <img src={imgBanner2} alt="banner" className="w-100" style={{ objectFit: 'cover', height: '500px' }}></img>
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                    <div className='col-12 text-center'>
                        <h1 style={{ fontSize: '7vh', marginLeft:'10%', marginRight:'10%' }} className='text-light fw-bold text-center' >Share Your Love For Cooking With Others And Start Earning Money</h1>
                        <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 text-secondary fw-bold mx-3'> Home </Link>
                        <a className='fs-5 text-secondary fw-bold mx-3' style={{ textDecoration: 'none' }} >Apply to register your Kitchen today!</a>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='col-12 row my-5'>
                    <div className='col-12'>
                        <h1 className='text-center fw-bold' style={{ fontSize: '52pt' }}> What Is A Kitchen And Who Can Register With Us? </h1>
                        <p className='text-secondary'>Remember the time you made something so delicious that you fancied sharing it with the entire world? NOW YOU CAN!</p>
                        <p className='text-secondary'>TiffinEatz is inspired by the meal sharing system in India known as Tiffins. The idea is: you can buy and sell fresh, authentic, homemade meals within your community.</p>
                        <p className='text-secondary'>Whether you are an aspiring chef, a home cook, or simply someone wanting to share your special family or cultural dishes with others in the community — THIS PLATFORM IS JUST FOR YOU!</p>
                        <p className='text-secondary'>A <strong> Kitchen </strong> is where these chefs will work their magic. Usually it will be someone’s home kitchen where they will prepare food with the same love and care as they would for their own family. Our platform provides chefs and food lovers a place to come together and share meals. Each Kitchen is carefully vetted by our team and we work tirelessly with them to ensure that they understand and follow the local food safety laws.</p>
                    </div>
                </div>
            </div>

            {/* How it work module */}
            <div className='col-12 py-5' style={{ backgroundColor: 'whitesmoke' }}>
                <div className='container'>
                    <h1 className='fw-bold text-center py-5'>How It Works</h1>
                    <div className='row text-center'>
                        <div className='col-3'>
                            <img src={imgDownload} alt='imgDownload' className='w-25 h-25' />
                            <p className='fs-5 mt-2'>DOWNLOAD THE APP</p>
                            <p className='text-secondary'>Download the mobile app to get started</p>
                        </div>
                        <div className='col-3'>
                            <img src={imgSignup} alt='imgDownload' className='w-25 h-25' />
                            <p className='fs-5 mt-2'>CREATE AND SETUP PROFILE AS KITCHEN</p>
                            <p className='text-secondary'>Provide Kitchen information, set up your menu and add item availability</p>
                        </div>
                        <div className='col-3'>
                            <img src={imgTask} alt='imgDownload' className='w-25 h-25' />
                            <p className='fs-5 mt-2'>FINISH ONBOARDING PROCESS</p>
                            <p className='text-secondary'>Our team will contact you to complete onboarding process</p>
                        </div>
                        <div className='col-3'>
                            <img src={imgAccount} alt='imgDownload' className='w-25 h-25' />
                            <p className='fs-5 mt-2'>START SELLING</p>
                            <p className='text-secondary'>Start processing orders and earn an income</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className='row'>
                    {/* Step 1 */}
                    <div className='col-1'>
                        <p className='text-secondary fs-5 fw-bold text-end mx-0'><i class="fa-regular fa-circle"></i>
                            <span className='text-start'>
                                <br />| <br />|<br />|<br />|
                            </span>
                        </p>
                    </div>
                    <div className='col-11 border-start border-4'> 
                    
                        <h5 className='fw-bold'>STEP 1: DOWNLOAD THE APP</h5>
                        <p className='text-secondary'>Download our mobile app from the App Store or Play Store. Kitchens can register and operate through our mobile app only to ensure the best user experience.</p>
                        <h6 className='fw-bold' >Download and get started</h6>
                        <div className='row'>
                            <img src={imgAndroid} alt='img' style={{width:'15vh'}} />
                            <img src={imgApple} alt='img'   style={{width:'15vh'}} />
                        </div>
                    </div>

                    {/* step 2 */}
                    <div className='col-1 mt-4'>
                        <p className='text-secondary fs-5 fw-bold text-end mx-0'><i class="fa-regular fa-circle"></i>
                            <span className='text-start'>
                                <br />| <br />|<br />|<br />|
                            </span>
                        </p>
                    </div>
                    <div className='col-11 mt-4'>
                        <h5 className='fw-bold'>STEP 2: CREATE AND SETUP PROFILE AS KITCHEN</h5>
                        <p className='text-secondary'>Kitchens can Signup/Signin with Email, Google, Apple or Facebook. Once registered, finish setting up your profile. Add required Kitchen details as prompted, add items to your menu, select item availability and set your desired prices.</p>
                        <p className='text-secondary'>Check this <b>video</b> if you need more help with registering and setting up your profile.<br/>Check this <b>video</b> to learn how to add items to your menu and item availability.</p>
                    </div>

                    {/* step 3 */}
                    <div className='col-1 mt-4'>
                        <p className='text-secondary fs-5 fw-bold text-end mx-0'><i class="fa-regular fa-circle"></i>
                            <span className='text-start'>
                                <br />| <br />|<br />|
                            </span>
                        </p>
                    </div>
                    <div className='col-11 mt-4'>
                        <h5 className='fw-bold'>STEP 3: FINISH ONBOARDING PROCESS</h5>
                        <p className='text-secondary'>We will send you a text message to setup a quick audio call so our team can walk you through the onboarding process. We can answer any questions that you may have at this time.</p>
                    </div>

                    {/* step 4 */}
                    <div className='col-1 mt-4'>
                        <p className='text-secondary fs-5 fw-bold text-end mx-0'><i class="fa-regular fa-circle"></i>
                            <span className='text-start'>
                                <br />| <br />|
                            </span>
                        </p>
                    </div>
                    <div className='col-11 mt-4'>
                        <h5 className='fw-bold'>STEP 4: START SELLING</h5>
                        <p className='text-secondary'>We will help you identify the most suitable Delivery/Pickup option. Start accepting orders and earn money. Payment would be made directly to your bank account in a secured way.</p>
                    </div>

                </div>
            </div>

        </>
    )
}