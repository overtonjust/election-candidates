import React from 'react'
import './Navbar.scss';
import flag from '../../assets/image.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={flag} alt="american flag" />
    </div>
  )
}

export default Navbar