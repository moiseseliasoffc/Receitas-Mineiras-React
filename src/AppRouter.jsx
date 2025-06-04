import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/Layout";
import { Home, ErrorPage, Recipe, SurpriseRecipe, UnderConstructionPage, About } from "./pages";

const construction = ["login", "register", "profile", "category"];

function AppRouter() {
  const router = createBrowserRouter([
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
          path: "/recipe/0",
          element: <SurpriseRecipe />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    ...construction.map(page => ({
      path: `/${page}`,
      element: <UnderConstructionPage />,
    })),
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
