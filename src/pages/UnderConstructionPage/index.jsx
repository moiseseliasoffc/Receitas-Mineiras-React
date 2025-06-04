import { ConstructionIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./styles.underConstructionPage.scss";

export function UnderConstructionPage() {
  return (
    <main className="underConstructionPage">
      <ConstructionIcon />
      <h1>Página em construção!</h1>
      <p>
        Estamos trabalhando para melhorar nossa plataforma. Em breve está pagina estará disponível!
      </p>
      <p>
        <Link to="/">Clique aqui </Link> para voltar a pagina principal.
      </p>
    </main>
  );
}
