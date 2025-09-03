import { create } from "zustand";

const storedUser = JSON.parse(localStorage.getItem("user"));

export const useAuthStore = create((set) => ({
  user: storedUser || null,
  isAuthenticated: !!storedUser,

  signup: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData, isAuthenticated: true });
  },

  login: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null, isAuthenticated: false });
  },
}));
