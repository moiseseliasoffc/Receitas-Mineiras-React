import "./styles.about.scss";

export function About() {
  return (
    <main className="aboutPage">
      <section className="aboutCompany">
        <h1>Sobre a empresa</h1>
        <p>
          O &quot;Receitas Mineiras&quot; é um projeto dedicado a preservar e compartilhar a rica
          tradição culinária de Minas Gerais, trazendo o sabor e a autenticidade das receitas que
          fazem parte da história e cultura do estado. Nosso objetivo é conectar as pessoas com os
          pratos típicos da região, oferecendo receitas simples, saborosas e fáceis de seguir. Seja
          você um mineiro de coração ou alguém que quer conhecer mais sobre a gastronomia de Minas,
          aqui você vai encontrar pratos que representam a essência da comida caseira mineira, com
          ingredientes frescos e saborosos. De pães de queijo a feijão tropeiro, o &quot;Receitas
          Mineiras&quot; é um convite para saborear o melhor de Minas Gerais, onde cada receita é
          feita com carinho e amor.
        </p>
        <h2>Video do nosso presidente</h2>
        <div className="video">
          <iframe src="https://youtube.com/embed/o-YBDTqX_ZU?si=U4evgoyHxyUyDLRM"></iframe>
        </div>
      </section>
      <section className="aboutTeam">
        <h1>Nossa história</h1>
        <p>
          O &quot;Receitas Mineiras&quot; nasceu do amor pela culinária de Minas Gerais e da vontade
          de compartilhar com o mundo os sabores que marcaram nossa infância e nossa cultura. Somos
          apaixonados pela cozinha simples, mas cheia de história, que transforma ingredientes
          locais em pratos incríveis. A ideia surgiu de um desejo pessoal de preservar as receitas
          tradicionais de Minas e apresentá-las de forma acessível para todos. Queríamos criar um
          espaço onde as pessoas pudessem aprender, reviver e compartilhar os pratos que fazem parte
          do cotidiano de tantas famílias mineiras. Com o passar do tempo, o projeto foi crescendo e
          se tornando uma referência para quem busca as melhores receitas típicas de Minas, com um
          toque de praticidade. Cada receita que compartilhamos é uma homenagem à cultura mineira e
          à generosidade dos mineiros, que sabem que a verdadeira riqueza está em uma boa refeição,
          feita com carinho e ingredientes frescos.
        </p>
      </section>
      <section className="aboutProject" id="project">
        <h1>Sobre o Projeto</h1>
        <p>
          Agora realmente falando sobre o projeto, o &quot;Receitas Mineiras&quot; é um site
          desenvolvido com React JS e utiliza diversas bibliotecas para aprimorar a funcionalidade e
          a experiência do usuário. Entre as bibliotecas utilizadas estão:
        </p>
        <ul>
          <li>
            <a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer">
              Axios:
            </a>{" "}
            para fazer requisições HTTP de forma simples e eficiente.
          </li>
          <li>
            <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">
              Lucide React:
            </a>{" "}
            uma coleção de ícones que facilita a adição de elementos visuais ao site.
          </li>
          <li>
            <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">
              React Router Dom:
            </a>{" "}
            para gerenciar a navegação e as rotas dentro da aplicação.
          </li>
          <li>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              Sass:
            </a>{" "}
            uma extensão do CSS que permite o uso de variáveis, aninhamento e outras funcionalidades
            que tornam o estilo mais modular e fácil de manter.
          </li>
          <li>
            <a href="https://swiperjs.com/" target="_blank" rel="noopener noreferrer">
              Swiper:
            </a>{" "}
            para criar carrosséis e sliders interativos e responsivos.
          </li>
        </ul>
        <p>
          Essas ferramentas foram escolhidas para garantir que o site seja rápido, responsivo e
          fácil de usar, proporcionando uma experiência agradável para todos os usuários. O
          &quot;Receitas Mineiras&quot; é mais do que um simples site de receitas; é um projeto em
          constante evolução, que busca sempre melhorar e oferecer o melhor conteúdo sobre a
          culinária mineira.
        </p>
        <p>
          Criei este projeto para aprender React na prática. Além de adquirir novos conhecimentos,
          fortaleço a cada dia o que já sei. A experiência de desenvolver o &quot;Receitas
          Mineiras&quot; tem sido enriquecedora, permitindo-me aplicar conceitos teóricos em um
          projeto real e desafiador. A cada funcionalidade implementada, sinto que estou evoluindo
          como desenvolvedor e me aproximando mais dos meus objetivos profissionais. Este projeto
          não só me proporcionou um aprendizado técnico, mas também me ensinou a importância da
          persistência e atenção aos detalhes. Estou animado para continuar aprimorando o
          &quot;Receitas Mineiras&quot; e explorar novas tecnologias e abordagens que possam tornar
          o site ainda melhor.
        </p>
      </section>
    </main>
  );
}
