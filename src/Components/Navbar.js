import React from 'react'
import '../CSS/Navbar.css'
import imge from '../Images/Logo1.png'


const Navbar = () => {
  return (
    <div className='Header'>
        <img className='imges' src={imge} typeof='image' />
        <div className='menu'>
            <a>Who We Are</a>
            <a>Why Us</a>
            <a>Industries</a>
            <a>Services</a>
            <a>Career</a>
            <a>Contact</a>
            <button className='butt'>INNOVATION</button>
        </div>

       
        
        




    </div>
  )
}

export default Navbar