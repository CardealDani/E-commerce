import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsEye } from 'react-icons/bs'
import { FaBoxes, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Homeproduct from './Homeproducts';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase_config';



import './home.css'

const Home = () => {
    const [qtdCelular, setQtdCelular] = useState(null);
    const countDocuments = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'celulares'));
            const numberOfDocuments = querySnapshot.size;
            setQtdCelular(numberOfDocuments);
        } catch (error) {
            console.error('Erro ao obter documentos:', error);
        }
    };

    useEffect(() => {
        countDocuments();
    }, []);

    return (
        <>
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
                            <p>{qtdCelular !== null ? `${qtdCelular} Produtos` : 'Carregando...'}</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/headphone.png' alt='headphone' />
                        </div>
                        <div className='detail'>
                            <p>12 Produtos</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/airpods.png' alt='airpods' />
                        </div>
                        <div className='detail'>
                            <p>12 Produtos</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/smartwatch.png' alt='smartwatch' />
                        </div>
                        <div className='detail'>
                            <p>12 Produtos</p>
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
                <Link className='link' to={'/product'}>Ver mais...</Link>

            </div>
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <div></div>
                        <div className='text'>
                            <h4>Último Lançamento!</h4>
                            <h3>Iphone 15 PRO Titânio </h3>
                            <p>$ 7.999,99</p>
                            <Link to="/product" className='link'> Compre Agora<BsArrowRight /></Link>
                        </div>
                        <div className='description'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    <div className='img_box'>
                        <img src='./img/iphone15.png' alt='iphone15' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home