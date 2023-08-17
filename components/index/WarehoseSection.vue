<template>
  <div class="container py-5">
    <swiper
      :centered-slides-bounds="true"
      :centered-slides="true"
      :space-between="25"
      :scrollbar="{ draggable: true }"
      :breakpoints="swiperOptions.breakpoints"
    >
      <template v-for="data in dataCard">
        <swiper-slide>
          <div class="item-slider">
            <CardWarehouse
              :alamat="data.alamat"
              :jam="data.jam"
              :pengiriman="data.pengiriman"
              :pendingin="true"
            />
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "App",
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          1000: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
      dataCard: [
        {
          alamat: "Gudang Jakarta Selatan",
          jam: "Senin - Sabtu (08.00 - 17.00 WIB, (Minggu dan tanggal Merah islam libur) ",
          pengiriman:
            "Tersedia semua ekspedisi. Support GoFood dan GoSend. Direkomendasikan melalui ekspedisi ID Expres dan JNE",
          pendingin: true,
        },
        {
          alamat: "Gudang Tangerang",
          jam: "Senin - Sabtu (08.00 - 17.00 WIB, (Minggu dan tanggal Merah islam libur) ",
          pengiriman:
            "Tersedia semua ekspedisi. Support GoFood dan GoSend. Direkomendasikan melalui ekspedisi ID Expres dan JNE",
          pendingin: false,
        },
        {
          alamat: "Gudang Medan",
          jam: "Senin - Sabtu (08.00 - 17.00 WIB, (Minggu dan tanggal Merah islam libur) ",
          pengiriman:
            "Tersedia semua ekspedisi. Support GoFood dan GoSend. Direkomendasikan melalui ekspedisi ID Expres dan JNE",
          pendingin: true,
        },
        {
          alamat: "Gudang Bekasi",
          jam: "Senin - Sabtu (08.00 - 17.00 WIB, (Minggu dan tanggal Merah islam libur) ",
          pengiriman:
            "Tersedia semua ekspedisi. Support GoFood dan GoSend. Direkomendasikan melalui ekspedisi ID Expres dan JNE",
          pendingin: false,
        },
        {
          alamat: "Gudang Surabaya",
          jam: "Senin - Sabtu (08.00 - 17.00 WIB, (Minggu dan tanggal Merah islam libur) ",
          pengiriman:
            "Tersedia semua ekspedisi. Support GoFood dan GoSend. Direkomendasikan melalui ekspedisi ID Expres dan JNE",
          pendingin: false,
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.item-slider {
  display: flex;
  justify-content: center;
}
</style>
