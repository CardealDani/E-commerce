import React, { useEffect, useState } from 'react';
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link, redirect } from 'react-router-dom';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useSignOut } from 'react-firebase-hooks/auth';
import { db } from '../../services/firebase_config';
import { auth } from '../../services/firebase_config';


import './nav.css';

const Nav = () => {
    const [user, setUser] = useState(null);
    const [signOut, loading, error] = useSignOut(auth);

    const logout = (e) => {
        e.preventDefault()
        signOut();
        localStorage.clear('email')
        window.location.reload(true);
    }

    useEffect(() => {
        const fetchUserData = async () => {
            // Obter o email armazenado em localStorage
            const email = localStorage.getItem('email');

            // Se o email estiver disponível, buscar o documento associado no Firestore
            if (email) {
                const usersCollectionRef = collection(db, 'users');
                const q = query(usersCollectionRef, where('email', '==', email));

                try {
                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        const userData = querySnapshot.docs[0].data();
                        setUser(userData);
                    }
                } catch (error) {
                    console.error('Erro ao obter dados do usuário no Firestore:', error);
                }
            }
        };

        fetchUserData();
    }, []); // Executar apenas uma vez ao montar o componente


    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className='free'>
                <div className='icon'>
                    <FaTruck />
                </div>
                <p>Free shipping when shopping up to $1000</p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <img className='logo' src='./img/logo.jpg' alt='logo'></img>
                    <div className='search_box'>
                        <input type='text' value='Digite o nome do produto' autoComplete='off'></input>
                        <button>Buscar</button>
                    </div>
                    <div className='icon'>
                        {user ? (
                            <div className='account'>
                                <div className='user_icon'>
                                    <AiOutlineUser />
                                </div>
                                <p>Olá, {user.name}!</p>
                            </div>
                        ) : null}
                        <div className='second_icon'>
                            <Link to='/' className='link'>
                                <AiOutlineHeart />
                            </Link>
                            <Link to='/cart' className='link'>
                                <BsBagCheck />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link className='link' to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='link' to='/product'>
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link className='link' to='/about'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className='link' to='/contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='auth'>
                        <button>
                            {user ? (
                                <div className='account'>
                                    <button onClick={logout}>
                                        Sair <CiLogout />

                                    </button>
                                </div>
                            ) : (
                                <div className='auth'>
                                    <button>
                                        <Link className='link_a' to={'/Login'}>
                                            Entrar <CiLogin />
                                        </Link>
                                    </button>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
