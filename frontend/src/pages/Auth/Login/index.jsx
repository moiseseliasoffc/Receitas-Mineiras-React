import { ArrowRightCircle } from "lucide-react";
import logo from "@assets/default_transparent_765x625.png";
import { AuthPageLayout } from "../Layout";
import { Link, useNavigate } from "react-router";
import { ArrowBigLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuthStore } from "../../../store/authStore";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [firebaseError, setFirebaseError] = useState(null);
  const navigate = useNavigate();

  const { isAuthenticated, loading } = useAuthStore();

  if (loading) return null;
  if (isAuthenticated) navigate("/");

  const onSubmit = async data => {
    setFirebaseError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        navigate("/verify-email");
      } else {
        navigate("/");
      }
    } catch (error) {
      let mensagemErroParaUsuario =
        "Ocorreu um erro ao tentar fazer login. Verifique suas credenciais.";

      // O error.code virá do Firebase Auth, como 'auth/user-not-found' ou 'auth/wrong-password'
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
          mensagemErroParaUsuario = "Email ou senha inválidos.";
          break;
        case "auth/user-disabled":
          mensagemErroParaUsuario = "Sua conta foi desativada.";
          break;
        case "auth/invalid-email":
          mensagemErroParaUsuario = "O formato do email está incorreto.";
          break;
        // ... outros códigos que você queira tratar
        default:
          // Mensagem mais genérica para outros erros inesperados
          mensagemErroParaUsuario = "Erro no login. Por favor, tente novamente mais tarde.";
          break;
      }

      setFirebaseError(mensagemErroParaUsuario);
    }
  };

  return (
    <AuthPageLayout className="loginPage">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email obrigatório" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              type="password"
              placeholder="Senha"
              {...register("password", { required: "Senha obrigatória" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <button type="submit" style={{ cursor: "pointer" }}>
              {isSubmitting ? "Entrando..." : "Entrar"} {!isSubmitting && <ArrowRightCircle />}
            </button>
            {firebaseError && (
              <p style={{ color: "red", marginTop: "10px", marginBottom: "10px" }}>
                {firebaseError}
              </p>
            )}
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
