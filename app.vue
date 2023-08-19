<template>
  <div class="all">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import AOS from "aos";
import Vue from "vue";

onMounted(() => AOS.init());
</script>

<style>
.all {
  font-family: "Poppins";
}
</style>
