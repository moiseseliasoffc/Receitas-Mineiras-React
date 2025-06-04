import { createBrowserRouter, redirect } from "react-router-dom";
import { MainLayout } from "./components/Layout";
import { Home, ErrorPage, Recipe, UnderConstructionPage, About, Register, Login } from "./pages";
import { getRandomRecipes } from "./utils/recipeUtils";

const construction = ["profile", "category"];

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  ...construction.map(page => ({
    path: `/${page}`,
    element: <UnderConstructionPage />,
  })),

  {
    path: "/surprise-recipe",
    loader: async () => {
      return redirect("/recipe/" + (await getRandomRecipes(1))[0].id);
    },
  },
  {
    path: "/recipe/0",
    loader: async () => {
      return redirect("/recipe/" + (await getRandomRecipes(1))[0].id);
    },
  },
]);
