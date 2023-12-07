import React from 'react'
import logo from '../../Image/logo.png'
import imgFacebook from '../../Image/facebook.png'
import imgInsta from '../../Image/instagram.png'
import imgPaytm from '../../Image/payment.png'
import imgPlaystore from '../../Image/playstore_btn.png'
import imgApple from '../../Image/apple_btn.png'

export const Footer = () => {
    return(
        <>
            <div class="footer foot-bg">
                <div class="container">
                    <div class="col-12 row">
                        <div class="col-12 col-md-6 col-lg-2 text-center">
                            <img src={logo} width="70%" alt="logo" />
                        </div>
                        <div class="col-12 col-md-6 col-lg-7 text-center py-5">
                            <h3 className='text-light'>Follow us on: <img src={imgFacebook} /> <img src={imgInsta} alt="" /> </h3>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <h6 class="fs-5 fw-lighter text-light">Payment Options</h6>
                            <img src={imgPaytm} alt="" />

                            <h6 class="fs-6 fw-lighter pt-4 text-light">Download The App</h6>
                            <img src={imgPlaystore} alt="" width="30%" />
                            <img src={imgApple} alt="" width="30%" />

                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12 " style={{ backgroundColor: "#141519" }}>
                <div class="container d-flex py-3 fs-6 text-secondary">
                    <div class="col-6 col-lg-6">
                        <i class="fa-regular fa-copyright"></i> All Rights Reserved. Tiffineatz Ind.2023
                    </div>
                    <div class="col-6 col-lg-6 text-end">
                        Term Of Service | Privacy Policy
                    </div>
                </div>
            </div>


        </>
    )
}