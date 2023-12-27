import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase_config";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase_config";

import "./register.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate(); // Alteração aqui

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);

      await addDoc(collection(db, "users"), {
        name: name,
        email: email
      });
      localStorage.setItem('email', email);
      navigate('/')
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  return (
    <div className="container_register">
      <header className="header">
        <Link to={'/'}><img src='./img/logo.jpg' alt="LK-INFORTECH" className="logoImg" /></Link>
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignUp} className="button">
          Cadastrar <FaLongArrowAltRight />
        </button>

        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/login">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
