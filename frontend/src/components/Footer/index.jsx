import { Github, Linkedin, Instagram } from "lucide-react";
import "./styles.footer.scss";

export function Footer() {
  return (
    <footer>
      <div>
        <div className="copyRight">
          <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
          <p>Desenvolvido por: Moisés Elias</p>
        </div>
        <div>
          <h3>Sobre o Desenvolvedor</h3>
          <p>Olá, meu nome é Moisés Elias. Sou estudante Desenvolvimento Web Full Stack.</p>
          <p>
            Mais sobre o projeto <a href="/about#project">aqui</a>.
          </p>
        </div>
        <div>
          <h3> Redes Sociais </h3>
          <div className="socialMedia">
            <a
              href="https://instagram.com/moiseseliasoffc"
              target="_blank"
              aria-label="Instagram Moisés"
              rel="noreferrer"
            >
              <Instagram className="icons" /> Instagram
            </a>
            <a
              href="https://github.com/moiseseliasoffc"
              target="_blank"
              aria-label="GitHub Moisés"
              rel="noreferrer"
            >
              <Github className="icons" /> Github
            </a>
            <a
              href="https://linkedin.com/in/moiseseliasoffc"
              target="_blank"
              aria-label="LinkedIn Moisés"
              rel="noreferrer"
            >
              <Linkedin className="icons" /> Linkedin
            </a>
          </div>
        </div>
        <div className="repository">
          <p style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
            Repositório no{" "}
            <a
              href="https://github.com/moises-elias/Receitas-Mineiras-React"
              style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
              target="_blank"
              aria-label="GitHub Moisés"
              rel="noreferrer"
            >
              <Github className="icons" /> GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
