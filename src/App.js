import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './module/main/Footer';
import { Navbar } from './module/main/Navbar';
import { Home } from './Pages/Home';
import { FindKitchen } from './Pages/FindKitchen';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { RegisterKitchen } from './Pages/RegisterKitchen';
import { Signin } from './Pages/Signin';
import { UpdateProfile } from './Pages/UpdateProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exac path='/' element={<Home />} />
          <Route path='/findkitchen' element={<FindKitchen />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registerkitchen' element={<RegisterKitchen />} />
          {/* <Route path='/cart' element={<cart />} */}
          <Route path='/signin' element={<Signin />} />
          <Route path='/updateprofile' element={<UpdateProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
