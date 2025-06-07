import { create } from "zustand";
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const useAuthStore = create(set => ({
  user: null,
  loading: true,
  isAuthenticated: false,
  setUser: user => set({ user, loading: false }),
  initAuthListener: () => {
    onAuthStateChanged(auth, user => {
      set({ user, loading: false, isAuthenticated: !!user && user.emailVerified });
    });
  },
}));
