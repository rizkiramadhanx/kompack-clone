<template>
  <section class="container mt-5">
    <h2 data-aos="fade-up" class="text-center">Mengapa Harus Kompack ?</h2>
    <div class="my-5 row justify-content-center gap-5 mx-1">
      <div
        data-aos="fade-right"
        :class="hoverCard1 && 'card_hover'"
        class="position-relative col-lg-3 cursor-pointer card mx-2 d-flex justify-content-center align-items-center flex-column p-3"
        @mouseover="hoverCard1 = true"
        @mouseleave="hoverCard1 = false"
      >
        <div class="d-flex card_top d-lg-block justify-content-end">
          <CardWhyKompack1 class="img-card" />
          <p class="d-lg-none m-3 title_card_mobile">Praktis</p>
        </div>
        <div class="mt-4">
          <p
            class="title_card text-center d-none d-lg-block title_card_desktop"
          >
            Praktis
          </p>
          <p
            :class="hoverCard1 ? 'text_card' : ''"
            class="text-center d-lg-none"
          >
            PRAKTIS karena semua urusan pergudanganmu, kami yang tangani
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        :class="hoverCard2 && 'card_hover'"
        class="position-relative col-lg-3 card mx-2 d-flex justify-content-center align-items-center flex-column p-3"
        @mouseover="hoverCard2 = true"
        @mouseleave="hoverCard2 = false"
      >
        <div class="d-flex card_top d-lg-block justify-content-start">
          <CardWhyKompack2 class="img-card-right" />
          <p class="d-lg-none m-3 title_card_mobile">Hemat</p>
        </div>
        <div class="mt-4">
          <p
            class="title_card text-center title_card_desktop d-none d-lg-block"
          >
            Hemat
          </p>
          <p
            :class="hoverCard2 ? 'text_card' : ''"
            class="text-center d-lg-none"
          >
            HEMAT karena semua biaya sudah jadi satu paket dan dibebankan hanya
            pada setiap pengiriman
          </p>
        </div>
      </div>

      <div
        data-aos="fade-right"
        :class="hoverCard3 && 'card_hover'"
        class="position-relative card col-lg-3 mx-2 d-flex justify-content-center align-items-center flex-column p-3"
        @mouseover="hoverCard3 = true"
        @mouseleave="hoverCard3 = false"
      >
        <div class="d-flex card_top d-lg-block justify-content-end">
          <CardWhyKompack3 class="img-card" />
          <p class="d-lg-none m-3 title_card_mobile">Mudah</p>
        </div>
        <div class="mt-4">
          <p
            class="title_card text-center d-none d-lg-block title_card_desktop"
          >
            Mudah
          </p>
          <p
            :class="hoverCard3 ? 'text_card' : ''"
            class="text-center d-lg-none"
          >
            MUDAH DIJANGKAU karena gudang kami berada di lokasi strategis
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardWhyKompack1 from "../../assets/svg/why-kompack-1.vue";
import CardWhyKompack2 from "../../assets/svg/hemat.vue";
import CardWhyKompack3 from "../../assets/svg/mudah.vue";

const hoverCard1 = ref(false);
const hoverCard2 = ref(false);
const hoverCard3 = ref(false);
</script>

<style scoped>
.text_card {
  display: block !important;
}

@media (min-width: 0px) and (max-width: 767px) {
  .img-card {
    position: absolute;
    bottom: 120px;
    left: 0px;
    height: 120px;
  }

  .title_card_desktop {
    font-weight: 500;
    font-size: 24px;
  }

  .title_card_mobile {
    font-weight: 500;
    font-size: 18px;
  }

  .img-card-right {
    position: absolute;
    bottom: 120px;
    right: 0px;
    height: 120px;
  }
  .card {
    border-radius: 30px;
    margin-top: 20px;
    max-width: 400px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.12);
  }

  .card_top {
    width: 100%;
  }
}

@media (min-width: 767px) and (max-width: 1200px) {
  .card {
    cursor: pointer;

    border-radius: 30px;
    max-width: 400px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.12);
  }

  .title_card_desktop {
    font-weight: 500;
    font-size: 24px;
  }
}

@media (min-width: 1000px) {
  .card {
    cursor: pointer;
    border-radius: 30px;
    max-width: 400px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.12);
  }

  .card_hover {
    background-color: #4285f4;
    color: white;
    font-weight: 500;
  }

  .title_card_desktop {
    font-weight: 500;
    font-size: 24px;
  }
}
</style>
