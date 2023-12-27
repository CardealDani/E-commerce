import React from 'react'
import { BsArrowRight, BsEye } from 'react-icons/bs'
import { FaBoxes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Nav from './Nav';
import Homeproduct from './Homeproducts';

import './home.css'

const Home = () => {

    return (
        <>
        <Nav/>
            <div className='top_banner'>
                <div className='container'>
                    <div className='detail'>
                        <h2>
                            The Best Notebook Collection 2023
                        </h2>
                        <Link to="/product" className='link'>Compre Agora <BsArrowRight /></Link>
                    </div>
                    <div className='img_box'>
                        <img src='./img/notebook.png' alt='notebook' />
                    </div>
                </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/celular.png' alt='celular' />
                        </div>
                        <div className='detail'>
                            <p>20 Products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/headphone.png' alt='headphone' />
                        </div>
                        <div className='detail'>
                            <p>12 Products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/airpods.png' alt='airpods' />
                        </div>
                        <div className='detail'>
                            <p>12 Products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/smartwatch.png' alt='smartwatch' />
                        </div>
                        <div className='detail'>
                            <p>12 Products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FaBoxes />
                        </div>
                        <div className='detail'>
                            <h3>Produtos novos</h3>
                            <p>Qualidade garantida</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BsCurrencyDollar />
                        </div>
                        <div className='detail'>
                            <h3>Preços acessíveis</h3>
                            <p>Que cabem no bolso</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <CiPercent />
                        </div>
                        <div className='detail'>
                            <h3>Descontos e Promoções</h3>
                            <p>Diariamente</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BiSupport />
                        </div>
                        <div className='detail'>
                            <h3>Suporte Especializado</h3>
                            <p>Todos os Dias</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                <h2>Top Produtos</h2>
                <div className='container'>
                    {
                        Homeproduct.map((product) => {
                            return (
                                <div className='box' key={product.id}>
                                    <div className='img_box'>
                                        <img src={product.Img} alt={product.Title} />
                                        <div className='icon'>
                                            <li><AiOutlineShoppingCart /></li>
                                            <li><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{product.Cat}</p>
                                        <h3>{product.Title}</h3>
                                        <h4>{product.Price}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Home