import React from 'react'
import Logo from '../../assets/logo.svg'
import './index.css'



export default function index() {
  return (
    <div className='container'>
        <div className="logoContainer">
            <img src={Logo} alt="logo Marvel" className="logo" />
        </div>
        <div className="heroText">
          <h1 className="title">Explore o universo</h1>
          <h2 className="subtitle">Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</h2>
        </div>
    </div>
  )
}
