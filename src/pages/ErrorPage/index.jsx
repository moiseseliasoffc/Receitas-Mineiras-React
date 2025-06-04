import { BugOffIcon } from "lucide-react";
import "./errorPage.scss";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <main className="errorPage">
      <BugOffIcon />
      <h1>Página não encontrada!</h1>
      <p>
        <Link to="/">clique aqui </Link> para voltar a pagina principal
      </p>
    </main>
  );
}
