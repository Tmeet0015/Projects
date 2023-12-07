import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Navbar } from '../module/main/Navbar'
import { Footer } from '../module/main/Footer'

export const Routing = () => {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route exac path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}
