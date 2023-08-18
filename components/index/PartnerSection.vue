<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Alur Partner Kompack</h2>
    <swiper
      :slides-per-view="width > 992 ? 4 : width > 600 ? 2 : 1"
      :space-between="25"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide>
        <div class="item-slider">
          <img src="~/assets/image/alur/alur-1.png" alt="alur 1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-slider">
          <img src="~/assets/image/alur/alur-2.png" alt="alur 2" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="item-slider">
          <img src="~/assets/image/alur/alur-3.png" alt="alur 3" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="item-slider">
          <img src="~/assets/image/alur/alur-4.png" alt="alur 4" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="item-slider">
          <img src="~/assets/image/alur/alur-6.png" alt="alur 6" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="item-slider">
          <img src="~/assets/image/alur/alur-7.png" alt="alur 7" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="item-slider">
          <img src="~/assets/image/alur/alur-8.png" alt="alur 8" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<style>
.item-slider {
  display: flex;
  justify-content: center;
}
</style>
