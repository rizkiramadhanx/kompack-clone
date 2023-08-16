<template>
  <section class="hero-container">
    <div class="mt-5 container">
      <div class="row gx-5 gy-5">
        <div
          class="col-md-6 left-hero d-flex flex-column justify-content-center"
        >
          <h1 class="title-hero">
            <span class="jasa-pergudangan">Jasa Pergudangan</span> Terpercaya
            Untuk Bisnis Online Kamu
          </h1>
          <p>
            Kompack adalah solusi untuk masalah pergudangan, management, dan
            pengemasan barang
          </p>
          <button class="rounded-pill py-3 button-learn btn btn-primary">
            Pelajari Lebih Lanjut
          </button>
        </div>
        <div class="col-md-6">
          <Hero class="hero-image img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Hero from "@/assets/svg/hero.vue";
</script>

<style scoped>
* {
  font-family: "Poppins";
}

.hero-container {
  background-color: #f6f6f9;
}

.title-hero {
  font-size: 32px;
  font-weight: 700;
}

.jasa-pergudangan {
  color: #4285f4;
  display: block;
}

.button-learn {
  max-width: 200px;
  color: white;
  font-weight: 600;
  border: none;
  background-color: #4285f4;
}
</style>
