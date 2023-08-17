<template>
  <div class="container py-5">
    <swiper
      :slides-per-view="width > 992 ? 4 : width > 600 ? 2 : 1"
      :space-between="25"
      :scrollbar="{ draggable: true }"
    >
      <template v-for="data in dataCard">
        <swiper-slide>
          <CardWarehouse
            :alamat="data.alamat"
            :jam="data.jam"
            :pengiriman="data.pengiriman"
            :pendingin="true"
          />
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const dataCard = [
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
];
</script>

<style scoped></style>
