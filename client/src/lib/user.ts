import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
}

interface UserStore {
  user: User | null;
  logIn: (user: User) => void;
  update: () => void;
}

async function upadeteUser() {
  const res = await fetch("http://localhost:8080/user", {
    credentials: "include",
  })
    .then((res) => res.json())
    .catch((e) => console.error(e));

  console.log(res);
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  logIn: (user) => set({ user }),
  update: upadeteUser,
}));
