<template>
  <section class="hero-container">
    <div class="mt-5 container">
      <div
        class="row gx-5 gy-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div
          class="col-md-6 left-hero d-flex flex-column justify-content-center"
        >
          <h1 class="title-hero">
            <span class="jasa-pergudangan">Jasa Pergudangan</span> Terpercaya
            Untuk Bisnis Online Kamu
          </h1>
          <p class="desc_hero">
            Kompack adalah solusi untuk masalah pergudangan, management, dan
            pengemasan barang
          </p>
          <button class="rounded-pill py-3 button-learn btn btn-primary">
            Pelajari Lebih Lanjut
          </button>
        </div>
        <div
          class="col-md-6"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
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
@media (min-width: 0px) and (max-width: 767px) {
  .title-hero {
    font-size: 20px;
  }

  .desc_hero {
    font-size: 14px;
  }
}

@media (min-width: 1000px) and (max-width: 1200px) {
  .title-hero {
    font-size: 32px;
    font-weight: 700;
  }

  .desc_hero {
    font-size: 14px;
  }
}
</style>
