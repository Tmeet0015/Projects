import React from 'react'
import imgBanner2 from '../Image/pager-bg.jpg'
import imgProfile from '../Image/profile-user.png'
import { Link } from 'react-router-dom'

export const UpdateProfile = () => {
    return(
        <>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <img src={imgBanner2} alt="banner" className="w-100" style={{ objectFit: 'cover', height: '500px' }}></img>
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                    <div className='col-12 text-center'>
                        <h1 style={{ fontSize: '7vh', marginLeft: '10%', marginRight: '10%' }} className='text-light fw-bold text-center' >Sign In</h1>
                        <Link to='/' style={{ textDecoration: 'none' }} className='fs-5 text-secondary fw-bold mx-3'> Home </Link>
                        <a className='fs-5 text-secondary fw-bold mx-3' style={{ textDecoration: 'none' }} >Update Profile</a>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <p className='fs-3 fw-bold my-4 text-center'>Update Profile</p>
                    <div className='col-md-12'>
                        <form>
                            <center>
                                <img src={imgProfile} alt='imgProfile' style={{ width: '5vw', height: '15vh', verticalAlign: 'middle' }} className='rounded-circle' />
                            </center>
                            <div className='row py-2'>
                                <div className='col-12 py-2'>
                                    <input type='file' className='form-control rounded-pill py-3 px-3' />
                                    {/* {error.mail && <div className='text-danger px-4'>{error.mail}</div>} */}
                                </div>

                                <div className='col-12 py-2'>
                                    <button type='submit'  className='form-control text-light fs-5 rounded-pill py-3 px-3' style={{ background: 'linear-gradient(93.93deg, #d8ab37 0%, #f18345 100%)' }} > Log In </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}