import { Star, ShareIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { searchRecipe } from "../../utils/recipeUtils";
import { useParams } from "react-router-dom";
import "./styles.recipe.scss";

export function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipes = async () => {
      const data = await searchRecipe(Number(id));
      setRecipe(data);
    };

    getRecipes();
  }, [id]);

  const categoryLink = recipe.categoria ? getCategoryLinkDetection() : "#";

  function getCategoryLinkDetection() {
    switch (recipe.categoria) {
      case "Café da manhã":
        return "/category/cafe-da-manha";
      case "Refeição":
        return "/category/refeicao";
      case "Bebida":
        return "/category/bebida";
      case "Aperitivo":
        return "/category/aperitivo";
      case "Sobremesa":
        return "/category/sobremesa";
      default:
        return "#";
    }
  }

  return (
    <main className="recipePage">
      <section className="info">
        <h1>{recipe.nome}</h1>
        <div className="video">{recipe.videoUrl && <iframe src={recipe.videoUrl} />}</div>
        <div className="recipeMenu">
          <button>
            <Star />
          </button>
          <button>
            <ShareIcon />
          </button>
        </div>
      </section>
      <section className="sobre">
        <h2>Sobre o prato:</h2>
        <h3>
          Categoria: <a href={categoryLink}>{recipe.categoria}</a>
        </h3>
        <h3>Descrição: </h3>
        <p>{recipe.descricao}</p>
      </section>
      <section className="ingredientes">
        <h2>Vamos botar a mão na massa:</h2>
        <h3>Ingredientes:</h3>
        <ul>
          {recipe.ingredientes &&
            recipe.ingredientes.map((ingrediente, index) => (
              <li key={index}>
                <span>- </span>
                {ingrediente}
              </li>
            ))}
        </ul>
        <h3>Modo De Preparo: </h3>
        <p>{recipe.preparo}</p>
      </section>
    </main>
  );
}
