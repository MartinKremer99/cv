import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    user: "",
  }),
  actions: {
    setUser(user: string): void {
      this.user = user;
    },
  },
  persist: true,
});
