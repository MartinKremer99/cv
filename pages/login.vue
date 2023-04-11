<script setup lang="ts">
import axios, { AxiosResponse } from "axios";

definePageMeta({
  middleware: "auth",
});

const router = useRouter();
const userStore = useUserStore();
const form = ref({
  email: "",
  password: "",
});

function submit(): void {
  axios
    .post("http://88.208.226.157:8080/api/login", form.value)
    .then((response: AxiosResponse) => {
      if (response.status == 200) {
        userStore.setUser(response.data.token);
        router.push("/");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>

<template>
  <main>
    <form @submit.prevent="submit">
      <label for="email">Email: </label>
      <input
        id="email"
        class="input"
        v-model="form.email"
        type="email"
        placeholder="Email Address"
        required
        autocomplete="off"
      />

      <label for="password">Password: </label>
      <input
        id="password"
        class="input"
        v-model="form.password"
        type="password"
        placeholder="*********"
        required
        autocomplete="off"
      />
      <button
        class="submitbutton"
        :disabled="form.email.length == 0 && form.password.length == 0"
        type="submit"
      >
        Login
      </button>
    </form>
  </main>
</template>
