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
        <div
          class="d-flex flex-column flex-lg-row gap-4 my-5 justify-content-center align-items-center"
        >
          <div class="d-flex gap-3 col-md-6 align-items-center item-problem">
            <div>
              <img src="~/assets/image/home.png" alt="home" />
            </div>
            <p class="text-problem-item">
              Keterbatasan tempat dan biaya dalam menyediakan fasilitas gudang
              sendiri
            </p>
          </div>
          <div
            class="d-flex gap-3 col-md-6 align-items-center item-problem border-bottom"
          >
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
    <h2 class="text-center">Mengapa Harus Kompack ?</h2>
    <div class="my-5 row justify-content-center gap-5">
      <template v-for="data in dataWhyKompack">
        <CardWhyKompack />
      </template>
    </div>
  </section>
  <section class="benefit_section py-5">
    <div class="container">
      <h2 class="text-center">Apa kelebihan Kompack?</h2>
      <div class="row justify-content-between align-items-end">
        <div class="col-md-4 d-flex flex-column gap-2 gap-md-5">
          <div class="d-flex align-items-center gap-4">
            <img
              src="~/assets/image/kelebihan-1.png"
              class="mb-3"
              alt="benefit-1"
            />
            <p class="benefit_text">
              Jaminan barang disimpan di gudang yang terpercaya
            </p>
          </div>
          <div class="d-flex align-items-center gap-4">
            <img
              src="~/assets/image/kelebihan-2.png"
              class="mb-3"
              alt="benefit-2"
            />
            <p class="benefit_text">
              Adanya SOP untuk mendukung keamanan dan kelancaran proses
              fulfillment
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex flex-column gap-2 gap-md-5">
          <div class="d-flex align-items-center gap-4">
            <img
              src="~/assets/image/kelebihan-3.png"
              class="mb-3"
              alt="benefit-3"
            />
            <p class="benefit_text">Harga layanan terjangkau</p>
          </div>
          <div class="d-flex align-items-center gap-4">
            <img
              src="~/assets/image/kelebihan-4.png"
              class="mb-3"
              alt="benefit-4"
            />
            <p class="benefit_text">Bisa kirim barang ke gudang kapanpun</p>
          </div>
          <div class="d-flex align-items-center gap-4">
            <img
              src="~/assets/image/kelebihan-5.png"
              class="mb-3"
              alt="benefit-5"
            />
            <p class="benefit_text">
              Tim yang memiliki keterampilan pergudangan
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="location_section py-5">
    <div class="container">
      <h1 class="text-center">Lokasi Gudang</h1>
      <p class="mt-5 text-center">
        Mitra gudang Kompack tersebar di kota besar seluruh Indonesia. Yuk
        kembangkan bisnismu bersama Kompack untuk pengiriman lebih cepat, ongkir
        murah dan biaya retur yang rendah.
      </p>
      <div class="d-flex justify-content-center">
        <img src="~/assets/image/map.png" class="img-fluid img_map" alt="Map" />
      </div>
    </div>
  </section>
  <section
    class="container contact_section text-center py-5 d-flex flex-column align-items-center gap-3"
  >
    <h2>Percayakan Layanan Pergudangan Bisnismu pada Kompack</h2>
    <p>Rasakan kemudahannya! Hubungi kami untuk informasi lebih lanjut</p>
    <button class="btn btn-primary py-3">
      <img src="~/assets/image/wa-contact.png" alt="icon contact" />
      Hubungi Kami Via Whatsapp
    </button>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "main",
  title: "My home page",
});

const dataWhyKompack = [1, 1, 1];

import Hero from "@/assets/svg/hero.vue";
</script>

<style scoped>
* {
  font-family: "Poppins";
}
.left-hero {
  height: 500px;
}

.container-card {
  grid-template-rows: 3;
}

.item-problem {
  padding: 20px 36px;
  border-radius: 20px;
  max-width: 400px;
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

.jasa-pergudangan {
  color: #4285f4;
  display: block;
}

/* benefit  */

.benefit_section {
  background-color: #edf8ff;
}

.benefit_text {
  font-weight: 600;
}

/* section location */
.location_section {
  background-color: #dff3ff;
}

.location_section h1 {
  font-size: 28px;
  font-weight: 650;
}

/* section map */

.img_map {
  width: 80%;
}

/* contact section */

.contact_section h2 {
  color: #4285f4;
  font-weight: 500;
  max-width: 800px;
}

.contact_section p {
  font-weight: 600;
}

.contact_section button {
  background-color: #43c553;
  width: fit-content;
  font-weight: 600;
  border-radius: 16px;
}

/* responsive */

@media (min-width: 200px) and (max-width: 767px) {
}

@media (min-width: 767px) {
  .img_map:hover {
    transition: all 2s ease-in-out;
    width: 100% !important;
  }
}
</style>
