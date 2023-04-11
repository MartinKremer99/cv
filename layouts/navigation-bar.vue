<template>
  <nav class="bg-gray-300 p-2">
    <button v-if="!userStore.user" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
  </nav>
</template>

<script setup lang="ts">
const userStore = useUserStore();
const router = useRouter();

function login(): void {
  router.push("/login");
}

function logout(): void {
  userStore.setUser("");
}
</script>
