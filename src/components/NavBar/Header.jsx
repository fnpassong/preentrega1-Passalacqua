import React from 'react'
import '../../assets/Header.css';
import logo from '../../assets/imagenes/JP.svg';
import Card from './Card';

export default function Header() {
  return (
    <>
      <header>
        
        <img className='miLogo'  src={logo} alt="Logo de la empresa" />
        
        <nav>
          <ul>
            <li> <a href="#">quienes somos</a></li>
            <li> <a href="#">Artistas</a></li>
            <li> <a href="#">Contacto</a></li>
            <i><Card /></i>
            
          </ul>
          
        </nav>
      </header>
    </>
  )
}
