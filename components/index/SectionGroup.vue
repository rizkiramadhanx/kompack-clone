<template>
  <section class="section_group">
    <div
      class="container py-3 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="d-flex flex-column">
        <h2 class="text-center">Makin hemat atur pengiriman</h2>
        <h2>
          paket orderan dengan
          <komshipLogo class="inline-block logo_komship" />
        </h2>
      </div>
      <div class="row justify-content-center mt-5">
        <div
          class="row col-10 pengiriman_banner d-flex py-2 px-4 justify-content-between align-items-center bg-white"
        >
          <div class="col-lg-6">
            <p class="text_pengiriman_banner">
              Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
              pengiriman
            </p>
            <p class="text2_pengiriman_banner text-center text-md-left">
              COD dan Non-COD
            </p>
          </div>
          <div class="col-lg-6 d-flex justify-content-center">
            <img
              src="~/assets/image/jne-logo.png"
              class="img-pengiriman"
              alt="Logo JNE"
            />
            <img
              src="~/assets/image/sicepat-logo.png"
              class="img-pengiriman"
              alt="Logo Sicepat"
            />
            <img
              src="~/assets/image/idexpress-logo.png"
              class="img-pengiriman"
              alt="Logo Idexpress"
            />
            <img
              src="~/assets/image/sap-logo.png"
              class="img-pengiriman"
              alt="Logo SAP"
            />
          </div>
        </div>
      </div>
      <div class="col-10 mt-4">
        <h2 class="title_frugal text-center">Rekomendasi untuk Kamu</h2>
        <div class="row gy-3 justify-content-between">
          <div class="col-12 col-lg-5 card-frugal pt-4 shadow-sm">
            <div class="d-flex justify-content-center">
              <img
                src="~/assets/image/hemat/jne.png"
                alt="jne"
                class="img-fluid"
              />
            </div>
            <p class="bg-white p-2 text-center">
              Makin <span class="text-orange">untung</span> dan
              <span class="text-orange">hemat</span> kirim orderan bahkan ke
              pelosok Indonesia. Kirim pakai
              <span class="text-orange">Cargo</span> gak kalah
              <span class="text-orange">hemat</span>nya!
            </p>
          </div>
          <div class="col-12 col-lg-5 card-frugal pt-4 shadow-sm">
            <div class="d-flex justify-content-center">
              <img
                src="~/assets/image/hemat/dompet.png"
                alt="dompet"
                class="img-fluid"
              />
            </div>
            <p class="bg-white p-2 text-center">
              Makin tenang kirim orderan dengan
              <span class="text-orange"
                >gerai terbanyak dan cakupan terluas
              </span>
              di Indonesia
            </p>
          </div>
          <div class="col-12 col-lg-5 card-frugal pt-4 shadow-sm">
            <div class="d-flex justify-content-center">
              <img
                src="~/assets/image/hemat/dompet.png"
                alt="dompet"
                class="img-fluid"
              />
            </div>
            <p class="bg-white p-2 text-center">
              Makin tenang kirim orderan dengan
              <span class="text-orange"
                >gerai terbanyak dan cakupan terluas
              </span>
              di Indonesia
            </p>
          </div>
          <div class="col-12 col-lg-5 card-frugal pt-4 shadow-sm">
            <div class="d-flex justify-content-center">
              <img
                src="~/assets/image/hemat/map.png"
                alt="dompet"
                class="img-fluid"
              />
            </div>
            <p class="bg-white p-2 text-center">
              <span class="text-orange"
                >Cocok bagi pebisnis dengan paket ringan.</span
              >
              Kirim orderan makin hemat dan mantap
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import komshipLogo from "assets/svg/komship-logo.vue";
</script>

<style scoped>
.section_group {
  padding: 150px 0;
}

.section_group > .container {
  background-color: #d4e3fc;
  border-radius: 24px;
}

.pengiriman_banner {
  border-radius: 24px;
}

.card-frugal {
  border-radius: 27px;
  padding: 0;
}

.card-frugal p {
  border-radius: 0 0 15px 15px;
  min-height: 100px;
}

.card-frugal > div > img {
  height: 200px;
}
.text-orange {
  color: #f95032;
}

@media (min-width: 200px) and (max-width: 767px) {
  .logo_komship {
    max-width: 80px;
  }
  .text_pengiriman_banner {
    font-size: 12px;
    font-weight: 600;
  }
  .text2_pengiriman_banner {
    font-size: 18px;
    font-weight: 600;
    color: #f95335;
  }
  .img-pengiriman {
    height: 25px;
  }

  .card-frugal {
    width: 100%;
  }
  .card-frugal p {
    font-size: 18px;
    font-weight: 600;
  }
}

@media (min-width: 767px) and (max-width: 1200px) {
  .text_pengiriman_banner {
    font-size: 18px;
    font-weight: 600;
  }
  .text2_pengiriman_banner {
    font-size: 32px;
    font-weight: 600;
    color: #4285f4;
  }

  .img-pengiriman {
    height: 30px;
  }

  .card-frugal {
    width: 100%;
  }
  .card-frugal p {
    font-size: 18px;
    font-weight: 600;
  }

  .card-frugal {
    min-width: 450px;
  }

  .card-frugal p {
    font-size: 16px;
    font-weight: 600;
  }
}

@media (min-width: 1200px) {
  .text_pengiriman_banner {
    font-size: 18px;
    font-weight: 600;
  }
  .text2_pengiriman_banner {
    font-size: 32px;
    font-weight: 600;
    color: #4285f4;
  }

  .img-pengiriman {
    height: 30px;
  }

  .card-frugal {
    width: 450px;
  }
  .card-frugal p {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
