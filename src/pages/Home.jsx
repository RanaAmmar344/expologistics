import React from 'react'
import Navbar from '../../components/Navbar'
import { FaArrowRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
    <div className="home text-white">
    <Navbar/>  
    <div className="row res-home-row mt-5">
        <div className="col-md-6 text-center mt-5 pt-5">
            <h1 className='home-title '>Welcome to Expo <br /> logistics</h1>
            <p className='mx-5 res-home-p '>At Expo Logistics, we take pride in delivering top-notch truck dispatching solutions that keep your operations <br /> running  smoothly.</p>
     
        <button type="button" className="btn btn-light text-primary">Request Quote <FaArrowRight /> </button>
        </div>
        <div className="col-md-6 ">
            <img width={600} className='home-img' src="https://expologistics.info/wp-content/uploads/2023/08/truck-american-show-4349523.jpg" alt="" />
        </div>
    </div>

    </div>
    {/* ----------------------------------------- */}
    <div className="home-section-2 mt-5 pt-5">
   <div className="row mx-5 ">
    <div className="col-md-6">
        <img width={550} height={300} className='section-2-img' src="https://expologistics.info/wp-content/uploads/2023/08/truck-volvo-bostrand-2391940.jpg" alt="" />
    </div>
    <div className="col-md-6">
      <h1 className='fw-bold mb-3'>Who Are We?</h1>
      <p className='lh-lg'>At Expo Logistics, we’re more than just a logistics service provider; we’re your dedicated partners in navigating the complex world of truck dispatching. Our journey began with a simple yet powerful vision: to revolutionize the transportation industry by delivering efficient, reliable, and cost-effective dispatching solutions. Today, we stand as a testament to our unwavering commitment to that vision.</p>
      <button type="button" className="btn btn-primary px-3 py-2 mt-5">Know More About Us <span><FaArrowRight /> </span> </button>
    </div>
   </div>
        
    </div>
    {/* ----------------------------------------------- */}
    <div className="home-section-3">

    </div>
    <h1 className='fw-bold d-flex justify-content-center mt-5' >How can we help you?</h1>

    <div className="row mt-5 mx-5">
      <div className="col-md-4">
      <div className="home-cards">
      <img className='rounded mb-3 res-hom-card-img' c  src="https://expologistics.info/wp-content/uploads/2023/08/truck-delivery-trailer-4276755.jpg" width={400} alt="" />

<h3>Truck Dispatching Services</h3>
<p>Our cutting-edge truck dispatching services ensure that your cargo is in the right hands from start to finish. We leverage advanced technology and industry expertise to optimize routes, manage schedules, and provide real-time tracking, all while keeping your costs in check.</p>
    
    </div>
      </div>
      <div className="col-md-4">
      <div className="home-cards">
      <img className='rounded mb-3 res-hom-card-img'  src="https://expologistics.info/wp-content/uploads/2023/08/truck-trucks-commercial-vehicle-3910170.jpg" width={400} alt="" />

<h3>Load Matching</h3>
<p>Say goodbye to empty trucks and lost opportunities. Our load matching service connects shippers with available carriers, making sure every mile counts and every load is profitable.</p>

    </div>
      </div>
      <div className="col-md-4">
      <div className="home-cards">
      <img className='rounded mb-3 res-hom-card-img'  src="https://expologistics.info/wp-content/uploads/2023/08/truck-password-worth-trucks-2663163.jpg" width={400} alt="" />

<h3>Fleet Management</h3>
<p >Keep your fleet on the road and your business on track with our comprehensive fleet management solutions. From maintenance scheduling to driver performance tracking, we’ve got your assets covered.</p>
    
    </div>
      </div>

    </div>
    <div className=' d-flex justify-content-center'>

    <button type="button" className="btn btn-primary  px-4 py-2 mt-5  fw-normal  ">Learn More <span><FaArrowRight /> </span> </button>
    </div>
    {/* ------------------------------------------------------------ */}
    <div className="home-section-4 mt-5">

      <div className="row">
        <div className="col-md-6 px-5 why-choose  mt-5 pt-5">
          <h1 className='fw-bold text-white'>Why Choose Expo Logistics?</h1>
          <ul className='text-white mt-5 mx-4'>
            <li className='fw-bold'>Reliability:</li>
            <p >Our commitment to reliability is unwavering. Your freight is our top priority, and we deliver on our promises,  brevery time.</p>
            <li className='fw-bold'>Efficiency:</li>
            <p>We optimize every aspect of your dispatching, ensuring your goods are on the move efficiently and cost-effectively.</p>
            <li className='fw-bold'>Expertise::</li>
            <p>With years of experience in the industry, our team knows the ins and outs of truck dispatching, guaranteeing you the best service possible.</p>
            <li className='fw-bold'>Technology:</li>
            <p>We leverage state-of-the-art technology to provide real-time tracking and updates, giving you full visibility and control over your shipments.</p>
          
          </ul>
          <button type="button" className="btn btn-light text-primary mt-4 p-3 fw-bold">Get A Quote <FaArrowRight /> </button>
        </div>
        <div className="col-md-6">
         <img className='home-section-4-img' src="https://expologistics.info/wp-content/uploads/2023/08/truck-road-vehicle-2407264.jpg" alt="" />
        </div>
      </div>
    </div>

    {/* --------------------------------------- */}
    
    <h1 className='fw-bold customers-says d-flex justify-content-center mt-5' >What Our Customers Say About Us</h1>
    <section className='mx-5' >
  <div className="row d-flex justify-content-center">
    <div className="col-md-10 col-xl-8 text-center">
      <h3 className="mb-4">Testimonials</h3>
      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>

  <div className="row text-center d-flex align-items-stretch">
    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div className="card testimonial-card">
        <div className="card-up" style={{"background-color": "#9d789b;"}}></div>
        <div className="avatar mx-auto bg-white">
          <img width={100} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            className="rounded-circle img-fluid" />
        </div>
        <div className="card-body">
          <h4 className="mb-4">Maria Smantha</h4>
          <hr />
          <p className="dark-grey-text text-start mt-4">
           Reliability is paramount in our business, and Expo Logistics has never let us down. They handle our dispatching needs with precision and care, and we appreciate their dedication to our success. We highly recommend their services to anyone in need of top-tier dispatching solutions
          </p>
          <IoIosStar /> <IoIosStar />  <FaRegStarHalfStroke />
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div className="card testimonial-card">
        <div className="card-up" style={{"background-color": "#7a81a8;"}}></div>
        <div className="avatar mx-auto bg-white">
          <img  width={100} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
            className="rounded-circle img-fluid" />
        </div>
        <div className="card-body">
          <h4 className="mb-4">Lisa Cudrow</h4>
          <hr />
          <p className="dark-grey-text text-start mt-4">
            Working with Expo Logistics has been a game-changer for our logistics. Their attention to detail and commitment to getting our shipments where they need to be, on time and on budget, is truly commendable. We've seen a significant improvement in our operations since partnering with them
          </p>
          <IoIosStar /> <IoIosStar /> <IoIosStar /> <FaRegStarHalfStroke />
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-0 d-flex align-items-stretch">
      <div className="card testimonial-card">
        <div className="card-up" style={{"background-color": "#6d5b98;"}}></div>
        <div className="avatar mx-auto bg-white">
          <img width={100} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            className="rounded-circle img-fluid" />
        </div>
        <div className="card-body">
          <h4 className="mb-4">John Smith</h4>
          <hr />
          <p className="dark-grey-text text-start mt-4">
           We've been working with Expo Logistics for several years now, and they consistently deliver outstanding results. Their use of technology and data-driven approach sets them apart in the industry. They've become an integral part of our supply chain, and we couldn't be happier with their service
          </p>
          <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
        </div>
      </div>
    </div>
  </div>
</section>
{/* ---------------------------------------------------- */}
<h1 className='fw-bold d-flex justify-content-center mt-5' >Check out our Trucks</h1>

<div className="home-section-5 mt-5">
<div className="row mx-5 ">
  <div className="col-md-4">
    <img width={400} src="https://expologistics.info/wp-content/uploads/2023/08/tank-truck-truck-tractor-1388933.jpg" alt="" />
  </div>
  <div className="col-md-4">
    <img width={400}  src="https://expologistics.info/wp-content/uploads/2023/08/formula-1-truck-red-2701335.jpg" alt="" />
  </div>
  <div className="col-md-4">
    <img width={400} height={300}  src="https://expologistics.info/wp-content/uploads/2023/08/truck-vehicle-commercial-vehicle-333251.jpg" alt="" />
  </div>
</div>
<div className="row mx-5 mt-3 ">
  <div className="col-md-4">
    <img width={400} src="https://expologistics.info/wp-content/uploads/2023/08/truck-load-transport-1565478.jpg" alt="" />
  </div>
  <div className="col-md-4">
    <img width={400}  src="https://expologistics.info/wp-content/uploads/2023/08/truck-semi-transportation-3401529.jpg" alt="" />
  </div>
  <div className="col-md-4">
    <img width={400}    src="https://expologistics.info/wp-content/uploads/2023/08/truck-semi-trailer-australia-587819.jpg" alt="" />
  </div>
</div>

</div>
{/* ------------------------------------------------------ */}

<div className="home-section-6 mt-5 pt-5">
<div className="row mx-5">
<div className="col-md-6">
  <img className='help-contact' width={500} src="https://expologistics.info/wp-content/uploads/2023/08/truck-delivery-trailer-4276755-1024x682.jpg" alt="" />
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
<div className="space"></div>
<Footer/>

    </>
  )
}

export default Home
