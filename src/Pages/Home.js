import React from 'react'
import '../CSS/Home.css'
import facebook from '../Images/facebook.png'
import insta from '../Images/instagram.png'
import tweet from '../Images/twitter.png'
import link from '../Images/linkedin.png'
import second from '../Images/Secondpage.png'
import arrow  from '../Images/arrow-right.png'
import  { useState, useEffect } from 'react'
import bulb from '../Images/lightbulb-on.png'

const Home = () => {
  



  return (
    <div>
        <div className='banner'>
          <div className='right'>
          <img className='face' src={facebook} typeof='image' /><br></br>
          <img className='face' src={insta} typeof='image' /><br></br>
          <img className='face' src={tweet} typeof='image' /><br></br>
          <img className='face' src={link} typeof='image' /><br></br>
          
          </div>
          
          <div> hi
         
          <div className='Title'><h1 className='heading'>WE ARE STEPS TO YOUR SUCCESS</h1>
            <div className='button2'>
            <button className='b2'>Contact us</button>
<button><img className='arrow2' src={arrow} typeof='ima'/></button></div>
            </div>

          </div>
           
            
</div>

<div className='page2'>
  <div className='R1'>
  <h2 className='heading2'>WHO WE ARE</h2>
  <h3 className='heading3'>“Innovation & Outsourcing Business is <br></br> our soul & Customer Satisfaction has<br></br> our heart.”</h3>
  <p className='para'>EG Allied: where innovation meets purpose. We are a pioneering product-based company at the forefront of leveraging AI technologies to bridge the gap between businesses and individuals. Our mission is clear: to harness the power of technology for meaningful connections and positive change.<br></br>
  <br>
  </br>
      At EG Allied, we are shaping the future of technology by crafting innovative solutions that enhance the way people interact with it. Our dedication to excellence and innovation drives us to create products that make life easier for everyone. With a firm commitment to quality, integrity, and customer-centricity, we are your trusted partner for transformative IT solutions tailored to your unique needs.</p>
    <button className='b1'>Read More</button>
    <button><img className='arrow1' src={arrow} typeof='ima'/></button>
  </div>
  <div className='R2'>
  <img className='secondp' src={second} typeof='image' />
  </div>
</div>



<div className='page3'>
  <h2 className='H22'>INDUSTRIES</h2>
</div>

<div className='page4'>

<div className='box1'>
<img className='bulb' src={bulb} typeof='image' />
<h4 className='bb1'>INFORMATION AND TECHNOLOGY</h4>

<p className='bb2'>Leveraging shape-shifting potential to solutions!</p>

</div>
<div className='box2'>
<img className='bulb' src={bulb} typeof='image' />
<h4 className='bb3'>​BANKING & FINACIAL SERVICES</h4>

<p className='bb4'>An atmosphere of high-end stability with a bold

individual stand</p>

</div>
<div className='box3'>
<img className='bulb' src={bulb} typeof='image' />
<h4 className='bb5'>COMMUNICATIONS</h4>

<p className='bb6'>Customer-centric approach with a solid base of interactivity!</p>

</div>
<button className='lastbutton'>SEE ALL INDUSTRIES</button>



</div>

    </div>
  )
}

export default Home