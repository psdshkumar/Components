import React from 'react'
import '../CSS/Footer.css'
import logo from '../Images/image.png'
import face1 from '../Images/facebook.png'
import insta from '../Images/instagram.png'
import tweet from '../Images/twitter.png'
import link from '../Images/linkedin.png'
import logo1 from '../Images/Asset 345.png'
import india from '../Images/Asset 145.png'

function Footer() {
  return (
    <div className='main'>
      <div className='fox'>
      <img className='logo' src={logo} typeof='image' /><bh></bh>
      <bh></bh>
      <p></p>
      <img className='l1' src={face1} typeof='image' />
      <img className='l1' src={insta} typeof='image' />
      <img className='l1' src={tweet} typeof='image' />
      <img className='l1' src={link} typeof='image' />
      <p>© 2020 by EG ALLIED PVT. LTD.</p>
      <p>TERMS & CONDITIONS</p>

      
      </div>
      <div className='fox'>
      <h3>
Hours of operation</h3><br></br>
<img className='bar' src={logo1} typeof='image' /><br></br>
<h4>365/366 days a year</h4>


      
      </div>
      <div className='fox'>
      <h3>
CONTACT US</h3><br></br>
<p>
contact us
30/41/01, Varun Path

Mansarovar, Jaipur

Rajasthan 302020

India</p><br></br>
<p>Mail: info@egallied.com</p>
<p>Tel: +91 854-999-3573</p>

      
      
      </div>
      <div className='fox'>
      <h3>
QUICK MENU</h3>
<br></br>
<ul className='a'>
    <li>Who We Are?</li>
    <li>Why Us?</li>
    <li>Services</li>
    <li>Industries</li>
    <li>Careers</li>
    <li>Contact</li>
</ul>
      
      
      
      </div>
      <div className='last'>
        <img className='india' src={india} typeof='image' />
        
        <div className='BUTT'>
        <button className='bu1'>BLOG</button><br></br>
        <button className='bu2'>CONTACT US</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Footer
