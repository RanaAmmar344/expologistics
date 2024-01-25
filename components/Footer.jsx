import React from 'react'

import { AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';

const Footer = () => {
  return (
    <>
    <footer className="py-5 custom-footer text-white px-4  pt-5 ">
    <div className="row  ">

    <div className="col-md-4 offset-md-1 mb-3 mx-3">
      <img src='https://expologistics.info/wp-content/uploads/2021/04/1-e1693579066956.png' alt="Bootstrap "  className="change-color mb-2"  width="150" height="60"/>
      <p className='footer-text'> Suspendisse quis sodales nunc. Sed ligula enim, mattis ut sem id, mollis sagittis sapien.</p>
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="cvjiek"/>
            <button className="btn btn-primary" type="button" fdprocessedid="7fj1yf">Subscribe</button>
          </div>
        </form>
      </div>
      <div className="col-6 col-md-2 mb-3 mx-4 ">
        
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

  
      <div className="col-6 col-md-2 mb-3">
        
        <ul className="nav flex-column footer-li">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1611448448516!2d74.24337157469395!3d31.464753049889385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e1a8b04047%3A0x80cb04c73f1d684c!2sByte%20Legion%20Pakistan!5e0!3m2!1sen!2s!4v1706092045483!5m2!1sen!2s" width="300" height="250" style={{"border":"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
      </div>

     
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved by Rana Ammar.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiFillFacebook className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiOutlineTwitter className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiOutlineInstagram className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><BiLogoGmail className='footer-icon'/></svg></a></li>
      </ul>
    </div>
  </footer>
      
    </>
  )
}

export default Footer
