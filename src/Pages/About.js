import React from 'react'
import imgBanner2 from '.././Image/pager-bg.jpg';
import { Link } from 'react-router-dom';
import imgDesc from '.././Image/about_desc.jpg'

export const About = () => {
    return(
        <>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <img src={imgBanner2} alt="banner" className="w-100" style={{ objectFit: 'cover', height:'50vh' }}></img>
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                    <div className='col-12 text-center'>
                        <h1 style={{ fontSize: '7vh' }} className='text-light fw-bold' >About Us</h1>
                        <Link to='/' style={{textDecoration:'none'}} className='fs-5 text-secondary fw-bold mx-3'> Home  </Link>
                        <a className='fs-5 text-secondary fw-bold mx-3' style={{ textDecoration: 'none' }} >About us</a>
                    </div>
                </div>
            </div>

            <div className='col-12 p-5' style={{ backgroundColor: 'whitesmoke' }}>
                <div className='row'>

                    <div className='col-7 w-50'>
                        {/* blank */}
                    </div>

                    {/* Right Card */}
                    <div class="card col-5 bg-light w-25 shadow p-3 my-5 bg-body rounded" style={{ width: "18rem"}}>
                        <div class="card-body text-center">
                            <h4 class="card-title fw-bold">Our Mission</h4>
                            <p class="card-text fs-6">
                                To create more inclusive opportunities in the food industry for everyone. We want to help people leverage 
                                their community roots and cooking skills to bring communities together by building connections, trust and a sense of belonging.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 text-center py-5'>
                    <h1 className='py-3 fw-bold'>What is TiffinEatz ?</h1>
                    <p className='container col-12 fs-5 text-secondary'>
                        Tiffineatz provides a centralized platform for homechefs to easily manage their business and provide exposure to the correct audience while customers can find all the homechefs in one place. We take care of different aspects like order management, customer service, marketing to the right audience and offering delivery services for these homechefs so they can focus on what they do best - which is cook delicious food. Whether you are a cook who enjoys sharing your family recipes or a new cuisine with others or just a consumer looking for something new to try, TiffinEatz makes it so much easier.
                    </p>
            </div>

            <div className='col-12 py-5' style={{ backgroundColor: 'whitesmoke' }}>
                <div className='col-12 row'>
                    <div className='col-5 text-end'>
                        <img src={imgDesc} alt='img-info' className='img-fluid' />
                    </div>
                    <div className='col-4'>
                        <h4 className='fw-bold pt-5'>Safety and Trust</h4>
                        <p className='fs-5 text-secondary'>All kitchens will undergo extensive food safety training program. We are committed to provide all the necessary tools to our partner kitchens to help them comply with general food safety guidelines.</p>
                    </div>
                </div>
            </div>

        </>
    )
}