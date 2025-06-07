import { AuthPageLayout } from "../Layout";
import "./styles.VerifyEmail.scss";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { useNavigate } from "react-router";

export function VerifyEmail() {
  const [sent, setSent] = useState(false);
  const [sendAgainTimeout, setSendAgainTimeout] = useState(0);
  const { user, loading, isAuthenticated } = useAuthStore();

  const navigate = useNavigate();

  if (loading) return null;
  if (isAuthenticated) navigate("/");
  if (!user) navigate("/login");

  const actionCodeSettings = {
    url: import.meta.env.VITE_APP_URL,
    handleCodeInApp: true,
  };

  const handleSendEmail = async () => {
    setSent(true);
    setSendAgainTimeout(60);
    const interval = setInterval(() => {
      setSendAgainTimeout(prev => prev - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setSendAgainTimeout(0);
      setSent(false);
    }, 60000);

    const user = await auth.currentUser;
    if (!user) navigate("/");
    await sendEmailVerification(user, actionCodeSettings)
      .then(() => {
        console.log("Email sent com sucesso");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <AuthPageLayout className="verifyEmailPage">
      <h1>Verifique seu email</h1>
      <p>Clique no botão abaixo para enviar um email de verificação</p>
      <button onClick={handleSendEmail} disabled={sent || sendAgainTimeout > 0}>
        {sent ? (
          sendAgainTimeout > 0 ? (
            <>
              Tente novamente em <span>{sendAgainTimeout}</span> segundos
            </>
          ) : (
            "Tente novamente"
          )
        ) : (
          "Enviar email de verificação"
        )}
      </button>
      {sent && <p>Email enviado. Verifique sua caixa de entrada ou spam.</p>}
    </AuthPageLayout>
  );
}
