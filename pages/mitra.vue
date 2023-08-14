<template>
  <section class="container mb-5 mt-2">
    <div class="row">
      <div class="col-6 hero_left d-flex flex-column justify-content-center">
        <h1 class="h1 title_hero">
          Dapatkan Penghasilan Bulanan Menjadi Mitra Gudang Kompack di Kotamu
        </h1>
        <p>
          Gabung sebagai mitra gudang sekarang! Berikan layanan terbaik
          pergudanganmu melalui Kompack kepada partner
        </p>
        <button class="btn btn-primary button-hero">
          Pelajari Lebih Lanjut
        </button>
      </div>
      <div class="col-6">
        <img
          src="~/assets/image/mitra-hero.png"
          alt="hero-img"
          class="img-fluid"
        />
      </div>
    </div>
  </section>
  <section class="section_map">
    <div
      class="d-flex container flex-column justify-content-center align-items-center gap-2"
    >
      <div
        class="d-flex text-map justify-content-center align-items-center gap-2"
      >
        <h3>Mitra Gudang by</h3>
        <MitraGudang />
      </div>
      <p class="text-center text-map">
        Mitra gudang Kompack tersebar di kota besar seluruh Indonesia. Yuk
        kembangkan bisnismu bersama Kompack untuk pengiriman lebih cepat, ongkir
        murah dan biaya retur yang rendah.
      </p>
    </div>
    <div class="container mt-4">
      <img src="~/assets/image/map.png" class="img-fluid img_map" alt="Map" />
    </div>
  </section>
  <section class="mt-5 container mb-5">
    <h1 class="text-center">
      Mengapa harus jadi
      <span class="title_section_mitra"> Mitra Gudang Kompack?</span>
    </h1>
    <div class="row mt-5 justify-content-center gap-4">
      <template v-for="data in benefitMitra">
        <div
          class="col-md-5 col-11 d-flex justify-content-between gap-2 gap-md-3 py-3 shadow"
        >
          <component :is="data.icon" />
          <div class="d-flex flex-column">
            <h5 class="title_benefit_card">{{ data.title }}</h5>
            <p class="mt-1">
              {{ data.description }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </section>
  <section class="container mt-5">
    <div class="row">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h1>
          Jadi Mitra Gudang Kompack itu <span class="blue-text">MUDAH!</span>
        </h1>
        <div class="mt-5">
          <template v-for="(data, key) in ListEasy" :key="key">
            <div class="d-flex gap-2">
              <div>
                <div class="rounded-circle number_list_easy">{{ key + 1 }}</div>
              </div>
              <p v-html="data.description"></p>
            </div>
          </template>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-inline-block">
        <img src="~/assets/image/mitra-easy.png" class="img-fluid" alt="" />
      </div>
    </div>
  </section>
  <div class="contact_section">
    <section class="container content_contact_section">
      <div class="d-flex flex-column align-items-center">
        <p class="contact_text">
          Kompack menjalin kolaborasi mulai dari kecil dan bertumbuh bersama
        </p>
        <p class="contact_text">untuk info lebih lanjut</p>
        <button class="button_contact btn btn-primary">
          <WAcontactIcon />
          Hubungi Kami
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import MitraBenefit1 from "../assets/svg/mitra-benefit-1.vue";
import MitraBenefit2 from "../assets/svg/mitra-benefit-2.vue";
import MitraBenefit3 from "../assets/svg/mitra-benefit-3.vue";
import MitraBenefit4 from "../assets/svg/mitra-benefit-4.vue";
import WAcontactIcon from "../assets/svg/wa-contact.vue";
import MitraGudang from "../assets/svg/mitra-gudang.vue";

definePageMeta({
  layout: "main",
});

const ListEasy = [
  {
    description:
      "Manfaatkan space/ ruang kosong jadi gudang penyimpanan. Yang penting <b>aman.</b>",
  },
  {
    description:
      "Bisa menggunakan SDM yang ada. Handle sendiri pun Tidak Masalah.",
  },
  {
    description:
      "<b>Hemat Biaya. </b> Gratis biaya bergabung, dan biaya-biaya lainnya.",
  },
  {
    description:
      "<b>Anti Ribet.</b> Cari partner sampai invoicing, Kompack yang tangani.",
  },
];

const benefitMitra = [
  {
    title: "Tidak perlu mencari seller sendiri",
    description:
      "Kompack yang akan mencarikan seller untuk menggunakan jasa gudang.",
    icon: MitraBenefit1,
  },
  {
    title: "Membantu monitoring",
    description:
      "Dashboard Kompack membantu monitoring data stock & proses fulfillment.",
    icon: MitraBenefit2,
  },
  {
    title: "Jaringan pebisnis & UMKM luas",
    description:
      "Karena integrasi dengan produk Komerce lainnya: Komtim, Komship, dll.",
    icon: MitraBenefit3,
  },
  {
    title: "Tim Support Professional Kompack",
    description:
      "Karena integrasi dengan produk Komerce lainnya: Komtim, Komship, dll.",
    icon: MitraBenefit4,
  },
];
</script>

<style scoped>
* {
  font-family: "Poppins";
}

@media (min-width: 300px) and (max-width: 767px) {
  .title_hero {
    font-size: 19px;
    font-weight: 700;
  }
  .hero_left {
    min-height: 300px;
  }
  .text-map {
    max-width: 400px;
  }
  .number_list_easy {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 7px;
    font-weight: 600;
    font-size: 12px;
    color: white;

    background: #fff;
    background-color: #4285f4;
    text-align: center;
  }
}

@media (min-width: 767px) {
  .title_hero {
    font-size: 42px;
    font-weight: 700;
  }
  .number_list_easy {
    border-radius: 50%;
    width: 33px;
    height: 33px;
    padding: 7px;
    font-weight: 600;
    font-size: 14px;
    color: white;

    background: #fff;
    background-color: #4285f4;
    text-align: center;
  }
}

.title_section_mitra {
  color: #4285f4;
}

.button-hero {
  max-width: 200px;
  color: white;
  font-weight: 600;
  border: none;
  background-color: #4285f4;
}

.title_benefit_card {
  color: #4285f4;
}

.section_map {
  background-color: #dff3ff;
  padding: 60px;
}

.img_map {
  width: 100%;
}

.contact_text {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: white;
}

.button_contact {
  width: fit-content;
}

.contact_section {
  background-image: url("../assets/image/contact-bg.png");
  margin-top: 50px;
}

.contact_section section {
  padding: 100px;
}

.blue-text {
  color: #4285f4;
}
</style>
