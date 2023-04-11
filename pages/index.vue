<script setup lang="ts">
const userStore: any = useUserStore();
</script>

<template>
  <LazyViewsHomeLoggedIn v-if="userStore.user" />
  <LazyViewsHomeLoggedOut v-if="!userStore.user" />
</template>
