import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from 'react-icons/bs';
// import Productdetail from './productDetail';
import { useEffect, useState } from "react";
import { db } from "../../services/firebase_config";
import { collection, getDocs } from "firebase/firestore";


const Product = () => {
    const [celulares, setCelulares] = useState([]);

    useEffect(() => {
        async function fetchCelulares() {
            try {
                const querySnapshot = await getDocs(collection(db, 'celulares'));
                const celularesData = [];

                querySnapshot.forEach((doc) => {
                    // Para cada documento, você pode extrair os dados usando doc.data()
                    const data = doc.data();
                    celularesData.push(data);
                });

                // Atualiza o estado com os dados obtidos
                setCelulares(celularesData);

            } catch (error) {
                console.error('Erro ao obter documentos:', error);
            }
        }

        // Chama a função para buscar os documentos quando o componente montar
        fetchCelulares();
    }, [])

    return (
        <>
            <h3>Produtos</h3>
            <p>Home . produtos</p>
            <div className='produtos'>
                <div className='container'>
                    <div className='filter'>
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
                    <div className='container'>
                        {
                            celulares.map((product) => {
                                return (
                                    <div className='box' key={product.id}>
                                        <div className='img_box'>
                                            <img src={product.image} alt={product.Title} />
                                            <div className='icon'>
                                                <li><AiOutlineShoppingCart /></li>
                                                <li><BsEye /></li>
                                                <li><AiOutlineHeart /></li>
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

        </>
    )
}

export default Product