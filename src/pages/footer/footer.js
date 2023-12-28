import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='logo'>
                        <img width={100} src='./img/logo.jpg' alt='logo' />
                    </div>
                    <div className='detail'>
                        <p>Nós somos um time de profissionais de alta qualidade.</p>
                        <div className='icon'>
                            <li><AiOutlineInstagram /></li>
                            <li><AiOutlineWhatsApp /></li>
                            <li><AiOutlineFacebook /></li>

                        </div>
                    </div>
                </div>
                <div className='more'>
                    <div className='account'>
                        <h3>Minha Conta</h3>
                        <ul>
                            <li>Conta</li>
                            <li>Carrinho</li>
                            <li>Compra</li>
                            <li>Retornar</li>
                        </ul>
                    </div>
                    <div className='account'>
                        <h3>Page</h3>
                        <ul>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>Contato</li>
                            <li>Termos e Condições</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer