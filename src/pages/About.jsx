import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
const About = () => {
  return (
    <>
    <div className="about text-white">
     <Navbar/>
     <div className="row m-5 p-3">
        <div className="col-md-6 p-5  text-center">
            <h1 className='home-title' >About Us</h1>
            <p >With a team of industry veterans who have collectively spent decades mastering the art of dispatching, we set out to build a company that redefines what's possible in logistics.</p>
        </div>
     </div>

    </div>

    {/* --------------------------------------- */}

    <div className="about-section-1">
        <div className="row mx-5 mt-5 pt-5">
            <div className="col-md-6">
                <img className='wrw-img' width={550} src="https://expologistics.info/wp-content/uploads/2023/08/highway-road-trucks-3392100-1.jpg" alt="" />
            </div>
            <div className="col-md-6 wrw "> 
            <div className='p-5'>   
            <h1 className='fw-bold  ' >Who Are We?</h1>
            <p className='lh-lg' >At Expo Logistics, we’re more than just a logistics service provider; we’re your dedicated partners in navigating the complex world of truck dispatching. Our journey began with a simple yet powerful vision: to revolutionize the transportation industry by delivering efficient, reliable, and cost-effective dispatching solutions. Today, we stand as a testament to our  brunwavering commitment to that vision.</p>
            </div>
            </div>
        </div>
        <div className="row mx-5 mt-5 pt-5">
            <div className="col-md-6">
                <h2 className='fw-bold'>Our Mission</h2>
                <p className='lh-lg'>Our mission is clear and concise: to empower businesses of all sizes with the tools and expertise they need to thrive in the fast-paced world of truck dispatching. We’re driven by the belief that every shipment, no matter how big or small, deserves exceptional care and attention. We see our mission as contributing to the success of businesses while making a positive impact on the environment through efficient route planning and reduced empty miles.</p>
            </div>
            <div className="col-md-6">
                <h2 className='fw-bold' >What Sets Us Apart?</h2>
                <ul className='lh-lg' >
                    <li>Customer-Centric Approach</li>
                    <li>Innovation</li>
                    <li>Experience</li>
                    <li>Transparency</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="about-section-2">
    <div className="row mx-5 mt-5 pt-5">
    <div className="col-md-6 wrw "> 
            <div className='p-5'>   
            <h1 className='fw-bold  ' >Our Team    </h1>
            <p className='lh-lg' >Behind every successful dispatching operation is a dedicated team of professionals who are passionate about what they do. Our team is comprised of dispatchers, logistics experts, technology gurus, and customer support specialists who work together seamlessly to make your logistics challenges disappear.</p>
            </div>
            </div>
            <div className="col-md-6">
                <img className='our-team-img' width={550} src="https://expologistics.info/wp-content/uploads/2023/08/loader-gravel-digger-1846346.jpg" alt="" />
            </div>
           
        </div>
    </div>
    {/* ------------------------------ */}

    <div className="about-section-3">
    <div className="home-section-6 mt-5 pt-5">
<div className="row mx-5">
<div className="col-md-6">
  <img className='help-contact' width={500} src="https://expologistics.info/wp-content/uploads/2023/08/truck-freight-transportation-2677373.jpg" alt="" />
</div>
<div className="col-md-6 ">
 <h1 className='fw-bold text-white' >We're here to help! Contact Us Today!</h1>
 <div className='d-flex flex-column text-white'> 
 <p className='help-btn mt-5'> <FaPhone />  +2297157499</p>
 <p className='help-btn mt-3'> <MdEmail />   Info@expologistics.info</p>
   </div>
 
 
</div>
</div>

</div>

    </div>
    <div className="space"></div>
<Footer/>
    </>
  )
}

export default About
