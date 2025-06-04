import { ArrowRightCircle } from "lucide-react";
import logo from "@assets/default_transparent_765x625.png";
import { AuthPageLayout } from "../Layout";
import { Link } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

export function Login() {
  return (
    <AuthPageLayout>
      <div className="container part logoPart">
        <img src={logo} alt="logo" />
        <p>
          Acesse sua conta e descubra receitas deliciosas e exclusivas! Personalize sua experiência
          e encontre pratos que combinam perfeitamente com seu gosto. Vamos cozinhar juntos!
        </p>
      </div>
      <div className="container part">
        <Link className="backButton" to={"/"}>
          Ir para o inicio <ArrowBigLeft />
        </Link>
        <div className="form">
          <h1>Faça seu login</h1>
          <form action="">
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
            <button type="submit">
              Entrar <ArrowRightCircle />{" "}
            </button>
            <p>Esqueceu sua senha?</p>
            <Link to="/">Clique aqui para redefinir a senha</Link>
            <br />
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">Clique aqui para se cadastrar</Link>
          </form>
        </div>
      </div>
    </AuthPageLayout>
  );
}
