<template>
  <div class="all">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  AOS.init({});
});
</script>

<style>
.all {
  font-family: "Poppins";
}
</style>
