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
  <section class="container mt-5">
    <div>
      <div>
        <h2 class="text-center">Apakah kamu mengalami masalah ini?</h2>
        <div class="d-flex flex-column flex-lg-row gap-4 my-5">
          <div class="d-flex gap-3 col-md-6 align-items-center item-problem">
            <div>
              <img src="~/assets/image/home.png" alt="home" />
            </div>
            <p class="text-problem-item">
              Keterbatasan tempat dan biaya dalam menyediakan fasilitas gudang
              sendiri
            </p>
          </div>
          <div class="d-flex gap-3 col-md-6 align-items-center item-problem">
            <div>
              <img src="~/assets/image/time.png" alt="time" />
            </div>
            <p class="text-problem-item">
              Keterbatasan tempat dan biaya dalam menyediakan fasilitas gudang
              sendiri
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container mt-5">
    <h1 class="text-center">Mengapa Harus Kompack ?</h1>
    <div class="my-5 row justify-content-center g-5">
      <template v-for="data in dataWhyKompack">
        <CardWhyKompack />
      </template>
    </div>
  </section>
</template>

<style>
.left-hero {
  height: 500px;
}

.container-card {
  grid-template-rows: 3;
}

.item-problem {
  padding: 20px 36px;
  border-radius: 20px;
}

.text-problem-item {
  max-width: 440px;
}

.item-problem:hover {
  box-shadow: 2px 2px 2px 2px;
}

.title-problem {
  color: #222222;
}

.hero-container {
  background-color: #f6f6f9;
}

.button-learn {
  max-width: 200px;
  color: white;
  font-weight: 600;
  border: none;
  background-color: #4285f4;
}
.title-hero {
  font-size: 32px;
  font-weight: 700;
}

.hero-image {
  max-height: 450px;
}

.row {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.jasa-pergudangan {
  color: #4285f4;
  display: block;
}
</style>

<script setup>
definePageMeta({
  layout: "main",
  title: "My home page",
});

const dataWhyKompack = [1, 1, 1];

import Hero from "@/assets/svg/hero.vue";
</script>
