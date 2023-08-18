<template>
  <HeroSection />
  <ProblemSection />
  <WhySection />
  <BenefitSection />
  <SectionGroup />
  <PartnerSection />
  <MapSection />
  <WarehoseSection />
  <ContactSetion />
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
import BenefitSection from "@/components/index/BenefitSection.vue";
import MapSection from "@/components/index/MapSection.vue";
import WarehoseSection from "@/components/index/WarehoseSection.vue";
import PartnerSection from "@/components/index/PartnerSection.vue";
import ContactSetion from "@/components/index/ContactSetion.vue";
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
