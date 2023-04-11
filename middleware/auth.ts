import { useUserStore } from "../stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUserStore();

  if (user.$state.user) {
    return navigateTo("/");
  }
});
