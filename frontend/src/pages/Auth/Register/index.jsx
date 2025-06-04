import { useState } from "react";
import logo from "@assets/default_transparent_765x625.png";
import "./styles.register.scss";
import { AuthPageLayout } from "../Layout";
import { Link } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

export function Register() {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [erro, setErro] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    if (senha !== confirmaSenha) {
      setErro("Senhas não conferem");
      return;
    }
    console.log("Usuário criado com sucesso!");
  };

  return (
    <AuthPageLayout className="registerPage">
      <div className="container part">
        <Link className="backButton" to={"/"}>
          Ir para o inicio <ArrowBigLeft />
        </Link>
        <div className="form">
          <h1>Registro</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <br />
            <label>
              Usuário:
              <input
                type="text"
                value={usuario}
                onChange={event => setUsuario(event.target.value)}
              />
            </label>
            <br />
            <label>
              Senha:
              <input
                type="password"
                value={senha}
                onChange={event => setSenha(event.target.value)}
              />
            </label>
            <br />
            <label>
              Confirma Senha:
              <input
                type="password"
                value={confirmaSenha}
                onChange={event => setConfirmaSenha(event.target.value)}
              />
            </label>
            <br />
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            <button type="submit">Criar conta</button>
            <Link as={Link} to="/login">
              Ja possui uma conta?
            </Link>
          </form>
        </div>
      </div>
      <div className="container part logoPart">
        <img src={logo} alt="logo" />
        <p>
          Crie sua conta e descubra receitas exclusivas! Personalize sua experiência e encontre
          pratos que combinam perfeitamente com seu gosto. Vamos cozinhar juntos!
        </p>
      </div>
    </AuthPageLayout>
  );
}
