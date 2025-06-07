import { routes } from "./router";
import { RouterProvider } from "react-router";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";

export function Root() {
  const initAuthListener = useAuthStore(state => state.initAuthListener);

  useEffect(() => {
    initAuthListener();
  }, [initAuthListener]);

  return <RouterProvider router={routes} />;
}
