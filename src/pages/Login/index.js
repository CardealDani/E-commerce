import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom"; // Alteração aqui
import { auth } from "../../services/firebase_config";
import "./login.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate(); // Alteração aqui

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(() => {
        if (signInWithEmailAndPassword(email, password))
          localStorage.setItem('email', email)

        navigate('/');
        window.location.reload(true);

      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error);
        // Trate o erro, se necessário
      });
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  }
  return (
    <div className="container_login">
      <header className="header">
        <Link to={'/'}><img src='./img/logo.jpg' alt="LK-INFORTECH" className="logoImg" /></Link>

        <span>Por favor digite suas informações de login</span>
      </header>

      <form autoComplete="off">
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

        <a href="#">Esqueceu sua senha ?</a>

        <button className="button" onClick={handleSignIn}>
          Entrar <FaLongArrowAltRight />
        </button>
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}