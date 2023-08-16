<template>
  <HeroSection />
  <ProblemSection />
  <WhySection />
  <BenefitSection />
  <SectionGroup />
  <MapSection />
  <section class="container">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="console.log('jaja')"
      :scrollbar="{ draggable: true }"
      @slideChange="console.log('jaja')"
      navigation
    >
      <swiper-slide>
        <div class="h-20">halao</div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "main",
  title: "My home page",
});
import HeroSection from "@/components/index/HeroSection.vue";
import ProblemSection from "@/components/index/ProblemSection.vue";
import WhySection from "@/components/index/WhySection.vue";
import SectionGroup from "@/components/index/SectionGroup.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import BenefitSection from "@/components/index/BenefitSection.vue";
import MapSection from "@/components/index/MapSection.vue";

const dataWhyKompack = [1, 1, 1];
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

.title-problem {
  color: #222222;
}

.hero-image {
  max-height: 450px;
}

/* section location */

/* contact section */

/* responsive */

@media (min-width: 200px) and (max-width: 767px) {
}

@media (min-width: 767px) and (max-width: 1200px) {
}

@media (min-width: 1200px) {
}
</style>
