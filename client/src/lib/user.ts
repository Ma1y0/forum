import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  logIn: (user: User) => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  logIn: (user) => set({ user }),
}));
