<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Alur Partner Kompack</h2>
    <swiper
      :slides-per-view="width > 767 ? 4 : 2"
      :space-between="25"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide>
        <div>
          <img src="~/assets/image/alur/alur-1.png" alt="Halo" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="~/assets/image/alur/alur-2.png" alt="Halo" />
        </div> </swiper-slide
      ><swiper-slide>
        <div>
          <img src="~/assets/image/alur/alur-3.png" alt="Halo" />
        </div> </swiper-slide
      ><swiper-slide>
        <div>
          <img src="~/assets/image/alur/alur-4.png" alt="Halo" />
        </div> </swiper-slide
      ><swiper-slide>
        <div>
          <img src="~/assets/image/alur/alur-5.png" alt="Halo" />
        </div> </swiper-slide
      ><swiper-slide>
        <div>
          <img src="~/assets/image/alur/alur-6.png" alt="Halo" />
        </div> </swiper-slide
      ><swiper-slide>
        <div>
          <img src="~/assets/image/alur/alur-7.png" alt="Halo" />
        </div> </swiper-slide
      ><swiper-slide>
        <div>
          <img src="~/assets/image/alur/alur-8.png" alt="Halo" />
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
