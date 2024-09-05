import React from 'react'
import Navbar from '../../components/Navbar'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from '../../components/Footer';

const Contact = () => {
    return (
        <>
            <div className="about text-white">
                <Navbar />
                <div className="row m-5 p-3 res-service-header">
                    <div className="col-md-6 p-5  text-center">
                        <h1 className='home-title' >Contact Us</h1>
                        <p >Contact us today to learn more about our services and how we can help you achieve your logistics goals.</p>
                    </div>
                </div>

            </div>

            {/* --------------------------------------------------------- */}

            <div className="contact-section-2">
                <div className="row">
                    <div className="col-md-6 contact-section-text text-center text-white ">
                        <h1 className='fw-bold' >Join Us on the Journey</h1>
                        <p className='px-5'>At Expo Logistics, we invite you to join us on this journey of innovation, efficiency, and reliability. Together, we’ll drive your business forward, one shipment at a time.</p>
                    </div>
                    <div className="col-md-6 bg-white p-5">
                        <h1>Send Us A Message</h1>
                        <form>
                            <div className="row">
                                <div className="col-md-6">  <div class="mb-3">
                                    <input type="firstname" placeholder='First Name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div></div>
                                <div className="col-md-6">  <div class="mb-3">
                                    <input type="lastname" placeholder='Last Name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div></div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div class="mb-3">
                                        <input type="lastname" placeholder='your Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div class="form-floating">
                     <textarea class="form-control" placeholder="message" id="floatingTextarea2" style={{"height": "100px"}}></textarea>
  
</div>
                                </div>
                            </div>


                            <button type="submit" class="btn btn-primary mt-5">Send Message</button>
                        </form>

                    </div>
                </div>
                <div className="home-section-6 ">
<div className="row mx-5">
<div className="col-md-6 contact-help-section">
  <img className='help-contact-3' width='100%' height={400} src="https://cdn.pixabay.com/photo/2019/07/19/19/49/truck-4349523_1280.jpg" alt="" />
</div>
<div className="col-md-6 mt pt-5 px-5 mt-5 ">
 <h1 className='fw-bold text-white' >We're here to help! Call Us Today!</h1>
 <div className='d-flex flex-column text-white'> 
 <p className='help-btn mt-5'> <FaPhone />  +2297157499</p>
 <p className='help-btn mt-3'> <MdEmail />   Info@expologistics.info</p>
   </div>
 
 
</div>
</div>

</div>
            </div>

            {/* ------------------------------------------------- */}

            <div className="contact-section-3 text-white">


                <p className='fw-normal font-monospace fs-5'>C O N T A C T</p>
                <h1 className='fw-bold section-3-text'>+2297157499</h1>
                <h3 className='fw-bold mt-3'>Info@expologistics.info</h3>
                <h3 className='fw-bold'>1942 Broadway Ste 314C Boulder CO 80302 US</h3>

            </div>
            {/* -------------------------------------------------------------------- */}

            <div className="contact-section-4">
            <iframe className='mapi' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1611448448516!2d74.24337157469395!3d31.464753049889385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e1a8b04047%3A0x80cb04c73f1d684c!2sByte%20Legion%20Pakistan!5e0!3m2!1sen!2s!4v1706092045483!5m2!1sen!2s" width="100%" height="350" style={{"border":"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="space"></div>
            <Footer/>

        </>
    )
}

export default Contact
