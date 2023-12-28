import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from 'react-icons/bs';
// import Productdetail from './productDetail';
import { useEffect, useState } from "react";
import data_celulares from "./productDetail";
import "./product.css"




const Product = () => {
    const [celulares, setCelulares] = useState([]);

    useEffect(() => {
        async function fetch() {
            const celularesData = await data_celulares()
            setCelulares(celularesData);
            console.log(celularesData)
        }
        window.scrollTo(0, 0);
        fetch()
    }, [])

    return (
        <>
            <h2>Produtos</h2>
            <p>Home . produtos</p>
            <div className='products'>
                <div className='container'>
                    <div className='filter'>
                        <div className="categories">

                            <h3>Categorias</h3>
                            <ul>
                                <li>Celular</li>
                                <li>Tablet</li>
                                <li>SmartWatch</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                        </div>

                    </div>
                    <div className='productBox'>
                        <div className='contant'>
                            {
                                celulares.map((product) => {
                                    return (
                                        <div className='box' key={product.id}>
                                            <div className="content_box">
                                                <div className='img_box'>
                                                    <img src={product.image} alt={product.Title} />
                                                </div>
                                                <div className="more_box">
                                                    <div className='icon'>
                                                        <li><AiOutlineShoppingCart /></li>
                                                        <li><BsEye /></li>
                                                        <li><AiOutlineHeart /></li>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <p>{product.tag}</p>
                                                <h3>{product.name}</h3>
                                                <h4>{product.price}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Product