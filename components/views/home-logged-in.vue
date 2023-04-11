<script setup lang="ts">
import axios, { AxiosResponse } from "axios";

const userStore = useUserStore();
axios
  .get("http://88.208.226.157:8080/api/blogs", {
    headers: {
      Authorization: `Bearer ${userStore.user}`,
    },
  })
  .then((response: AxiosResponse) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
</script>

<template>
  <main>Logged in</main>
</template>
