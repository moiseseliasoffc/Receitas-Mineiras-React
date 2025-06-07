import { useState } from "react";
import logo from "@assets/default_transparent_765x625.png";
import "./styles.register.scss";
import { AuthPageLayout } from "../Layout";
import { Link, useNavigate } from "react-router";
import { ArrowBigLeft } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useAuthStore } from "../../../store/authStore";

const registerSchema = z
  .object({
    email: z.string().email("Email inválido"),
    //Mínimo nome e sobrenome (2 palavras)
    nome: z
      .string()
      .min(3, "Seu nome deve ter pelo menos 3 letras")
      .refine(
        value => value.split(" ").length >= 2,
        "Informe seu nome e sobrenome, ex: Tio Patinhas"
      ),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmaSenha: z.string().min(6, "Confirmação de senha inválida"),
  })
  .refine(data => data.senha === data.confirmaSenha, {
    message: "Senhas não conferem",
    path: ["confirmaSenha"],
  });

export function Register() {
  const [firebaseError, setFirebaseError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { isAuthenticated, loading } = useAuthStore();

  if (loading) return null;
  if (isAuthenticated) navigate("/");

  const onSubmit = async data => {
    setFirebaseError(null);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.senha);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: data.nome });
      }

      navigate("/verify-email");
    } catch (error) {
      setFirebaseError(
        error.message == "Firebase: Error (auth/email-already-in-use)."
          ? "Email já cadastrado"
          : "Erro ao criar usuário"
      );
    }
  };

  return (
    <AuthPageLayout className="registerPage">
      <div className="container part">
        <Link className="backButton" to={"/"}>
          Ir para o início <ArrowBigLeft />
        </Link>
        <div className="form">
          <h1>Registro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Nome:
              <input type="text" {...register("nome")} />
              {errors.nome && <p className="error-message">{errors.nome.message}</p>}
            </label>
            <br />
            <label>
              Email:
              <input type="email" {...register("email")} />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </label>
            <br />
            <label>
              Senha:
              <input type="password" {...register("senha")} />
              {errors.senha && <p className="error-message">{errors.senha.message}</p>}
            </label>
            <br />
            <label>
              Confirma Senha:
              <input type="password" {...register("confirmaSenha")} />
              {errors.confirmaSenha && (
                <p className="error-message">{errors.confirmaSenha.message}</p>
              )}
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Criando..." : "Criar conta"}
            </button>
            {firebaseError && <p style={{ color: "red" }}>{firebaseError}</p>}

            <Link to="/login" style={{ display: "block", marginTop: "10px" }}>
              Já possui uma conta?
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
