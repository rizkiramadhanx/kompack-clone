<template>
  <section class="section_group">
    <div
      class="container py-3 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="d-flex flex-column text-frugal">
        <h2 class="text-center">Makin hemat atur pengiriman</h2>
        <h2 class="text-center">
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
              src="~/assets/image/SAP-logo.png"
              class="img-pengiriman"
              alt="Logo SAP"
            />
          </div>
        </div>
      </div>
      <h2 class="title_frugal text-center mt-5 p-2">Rekomendasi untuk Kamu</h2>
      <div class="row col-10">
        <div class="mx-2 d-lg-none">
          <button
            class="btn btn-pengiriman"
            :class="activeButton === 0 ? 'active-button' : ''"
            @click="changeValue(0)"
          >
            JNE
          </button>
          <button
            class="btn btn-pengiriman"
            :class="activeButton === 1 ? 'active-button' : ''"
            @click="changeValue(1)"
          >
            Sicepat
          </button>
          <button
            class="btn btn-pengiriman"
            :class="activeButton === 2 ? 'active-button' : ''"
            @click="changeValue(2)"
          >
            IdExpress
          </button>
          <button
            class="btn btn-pengiriman"
            :class="activeButton === 3 ? 'active-button' : ''"
            @click="changeValue(3)"
          >
            SAP
          </button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="mt-2 p-3 row card-expedition d-lg-none">
          <div class="col-12 row justify-content-center gap-1">
            <div class="row col-12 justify-content-center gap-1">
              <div
                class="col-5 left-item-benefit py-2 d-flex justify-content-center content-mobile bg-white align-items-center"
              >
                Benefit
              </div>
              <div
                class="col-5 right-item-benefit py-2 d-flex bg-white text-center justify-content-center align-items-center"
              >
                <img
                  src="~/assets/image/jne-logo.png"
                  v-if="activeButton === 0"
                  class="img-pengiriman"
                  alt="Logo JNE"
                />
                <img
                  src="~/assets/image/sicepat-logo.png"
                  v-if="activeButton === 1"
                  class="img-pengiriman"
                  alt="Logo Sicepat"
                />
                <img
                  src="~/assets/image/idexpress-logo.png"
                  class="img-pengiriman"
                  v-if="activeButton === 2"
                  alt="Logo Idexpress"
                />
                <img
                  src="~/assets/image/SAP-logo.png"
                  class="img-pengiriman"
                  alt="Logo SAP"
                  v-if="activeButton === 3"
                />
              </div>
            </div>
            <div class="row col-12 justify-content-center gap-1">
              <div
                class="left-item-benefit col-5 py-2 d-flex justify-content-center content-mobile bg-white align-items-center"
              >
                Biaya COD
              </div>
              <div
                class="right-item-benefit col-5 py-2 d-flex bg-white text-center justify-content-center align-items-center"
              >
                {{ halo[activeButton].COD }}
              </div>
            </div>
            <div class="row col-12 justify-content-center gap-1">
              <div
                class="col-5 left-item-benefit py-2 d-flex justify-content-center content-mobile bg-white align-items-center"
              >
                Biaya Retur
              </div>
              <div
                class="col-5 right-item-benefit py-2 d-flex bg-white text-center justify-content-center align-items-center"
              >
                {{ halo[activeButton].Retur }}
              </div>
            </div>
            <div class="row col-12 justify-content-center gap-1">
              <div
                class="col-5 left-item-benefit py-2 d-flex justify-content-center content-mobile bg-white align-items-center"
              >
                Diskon Ongkir
              </div>
              <div
                class="col-5 right-item-benefit py-2 d-flex bg-white text-center justify-content-center align-items-center"
              >
                {{ halo[activeButton].diskon }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-10 mt-2 p-3 row card-expedition bg_white d-none d-lg-block"
        >
          <div class="row col-12">
            <div
              class="col-3 d-flex benefit_text justify-content-center align-items-center"
            >
              Benefit
            </div>
            <div class="col-2">
              <div class="p-4">
                <img
                  src="~/assets/image/jne-logo.png"
                  class="img-pengiriman"
                  alt="Logo JNE"
                />
              </div>
            </div>
            <div class="col-2">
              <div class="p-4">
                <img
                  src="~/assets/image/sicepat-logo.png"
                  class="img-pengiriman"
                  alt="Logo Sicepat"
                />
              </div>
            </div>
            <div class="col-2">
              <div class="p-4">
                <img
                  src="~/assets/image/idexpress-logo.png"
                  class="img-pengiriman"
                  alt="Logo Idexpress"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="p-4 d-flex justify-content-center">
                <img
                  src="~/assets/image/SAP-logo.png"
                  class="img-pengiriman"
                  alt="Logo Sicepat"
                />
              </div>
            </div>
          </div>
          <div class="row col-12 w-100">
            <div
              class="col-3 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Biaya COD
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              2.8% (PPN ditanggung Komship)
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              2.8% (PPN ditanggung Komship)
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              2.8% (PPN ditanggung Komship)
            </div>
            <div
              class="col-3 d-flex p-4 text-center justify-content-center align-items-center"
            >
              2.8% (PPN ditanggung Komship)
            </div>
          </div>
          <div class="row col-12 w-100">
            <div
              class="col-3 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Biaya Retur
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Gratis se-lndonesia*
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Gratis se-lndonesia*
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Gratis se-lndonesia*
            </div>
            <div
              class="col-3 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Gratis se-lndonesia*
            </div>
          </div>
          <div class="row col-12 w-100">
            <div
              class="col-3 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Diskon Ongkir
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Reg 25%
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Reg 30% Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
            </div>
            <div
              class="col-2 d-flex p-4 text-center justify-content-center align-items-center"
            >
              {{ `Reg 25% (>1/2 kg) <1/2 Kg bayar 1/2-nya * + diskon 15%` }}
            </div>
            <div
              class="col-3 d-flex p-4 text-center justify-content-center align-items-center"
            >
              Reg 35%
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 mt-4">
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
                src="~/assets/image/hemat/box.png"
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

const activeButton = ref(0);

const halo = [
  {
    COD: "Reg 25%",
    Retur: "2.8% (PPN ditanggung Komship)",
    diskon: "Gratis se-lndonesia*",
    logo: "jne-logo",
  },
  {
    COD: "Reg 30% Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)",
    Retur: "2.8% (PPN ditanggung Komship)",
    diskon: "Gratis se-lndonesia*",
    logo: "sicepat-logo",
  },
  {
    COD: "Reg 25% (>1/2 kg) <1/2 Kg bayar 1/2-nya * + diskon 15%",
    Retur: "2.8% (PPN ditanggung Komship)",
    diskon: "Gratis se-lndonesia*",
    logo: "idexpress-logo",
  },
  {
    COD: "Reg 35%",
    Retur: "2.8% (PPN ditanggung Komship)",
    diskon: "Gratis se-lndonesia*",
    logo: "SAP-logo",
  },
];

const changeValue = (e) => {
  activeButton.value = e;
};
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

.right-item-benefit {
  border-radius: 0 8px 8px 0;
}

.left-item-benefit {
  border-radius: 8px 0px 0px 8px;
}

.card-frugal p {
  border-radius: 0 0 15px 15px;
  min-height: 100px;
}

.card-frugal > div > img {
  height: 200px;
}

.btn-pengiriman {
  border-radius: 6px;
  background-color: white;
  color: #c2c2c2;
  margin: 2px;
}

.active-button {
  border: 1px solid #f95032 !important;
  color: #f95032 !important;
}
.text-orange {
  color: #f95032;
}

.card-expedition {
  border-radius: 24px;
  font-weight: 500;
}

@media (min-width: 200px) and (max-width: 767px) {
  .logo_komship {
    max-width: 120px;
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

  .bg_white {
    background-color: white;
  }

  .text-frugal {
    font-size: 16px !important;
  }
}

@media (min-width: 767px) and (max-width: 1200px) {
  .text_pengiriman_banner {
    font-size: 18px;
    font-weight: 600;
  }

  .bg_white {
    background-color: white;
  }
  .benefit_text {
    font-size: 20px !important;
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

@media (min-width: 1000px) {
  .text_pengiriman_banner {
    font-size: 18px;
    font-weight: 600;
  }
  .text2_pengiriman_banner {
    font-size: 32px;
    font-weight: 600;
    color: #4285f4;
  }

  .bg_white {
    background-color: white;
  }

  .img-pengiriman {
    height: 30px;
  }

  .benefit_text {
    font-size: 20px !important;
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
