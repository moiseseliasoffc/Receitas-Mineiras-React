import { createBrowserRouter, redirect } from "react-router";
import { MainLayout } from "./components/Layout";
import {
  Home,
  ErrorPage,
  Recipe,
  UnderConstructionPage,
  About,
  Register,
  Login,
  VerifyEmail,
} from "./pages";
import { getRandomRecipes } from "./utils/recipeUtils";
import { auth } from "./services/firebase";

const construction = ["profile", "category/*", "account", "search"];

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
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/logout",
    loader: async () => {
      auth.signOut();
      return redirect("/");
    },
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
