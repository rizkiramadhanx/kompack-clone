<template>
  <section class="benefit_section pt-5 pb-md-5 position-relative">
    <img
      src="~/assets/image/kelebihan-bg.png"
      class="position-absolute d-none mt-5 d-md-block top-50 start-50 translate-middle"
    />
    <div class="container">
      <h2 class="text-center z-2">Apa kelebihan Kompack?</h2>
      <div class="row justify-content-between align-items-end mt-5 mb-5">
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
    <div>
      <div class="text-white">
        <div
          class="banner_usekompack py-3 px-2 top-100 start-50 row"
          :class="
            width > 767
              ? 'translate-middle position-absolute px-2 top-100 start-50'
              : ''
          "
        >
          <h1 class="col-md-6 left_usekompack">
            Pakai Kompack Lebih Hemat dan Terjangkau
          </h1>
          <div class="col-md-6 d-flex align-items-center right_usekompack">
            <p>
              Nikmati layanan Kompack dengan biaya mulai dari
              <b> Rp3.000/ barang yang terjual</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const { height, width } = useWindowSize();
</script>

<style scoped>
.benefit_section {
  background-color: #edf8ff;
}

.benefit_text {
  font-weight: 600;
}

.right_usekompack {
  font-weight: 600;
}

.right_usekompack > p > b {
  font-size: 24px;
}

.banner_usekompack {
  background-color: #4285f4;
}

@media (min-width: 200px) and (max-width: 767px) {
  .benefit_section {
    /* padding-bottom: 100px !important; */
    width: 100% !important;
  }
  .left_usekompack {
    font-size: 24px;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
  }
}

@media (min-width: 767px) and (max-width: 1200px) {
  .banner_usekompack {
    min-width: 820px;
    border-radius: 37px;
  }
  .left_usekompack {
    font-size: 32px;
    padding-right: 10px;
    border-right: 2px solid white;
  }
}

@media (min-width: 1200px) {
  .banner_usekompack {
    min-width: 820px;
    border-radius: 37px;
  }
  .left_usekompack {
    font-size: 32px;
    padding-right: 10px;
    border-right: 2px solid white;
  }
}
</style>
