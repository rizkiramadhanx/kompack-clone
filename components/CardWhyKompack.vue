<template>
  <div
    class="position-relative card col-lg-3 card d-flex justify-content-center align-items-center flex-column p-3"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <CardWhyKompack1 class="img-card" />
    <div class="mt-4">
      <p class="title_card text-center">Praktis</p>
      <p :class="hover ? 'text_card' : ''">
        PRAKTIS karena semua urusan pergudanganmu, kami yang tangani
      </p>
    </div>
  </div>
</template>

<script setup>
import CardWhyKompack1 from "../assets/svg/why-kompack-1.vue";

const hover = ref(true);
</script>

<style>
@media (min-width: 300px) and (max-width: 767px) {
  .img-card {
    position: absolute;
    bottom: 50px;
    left: 10px;
  }
  .card {
    border-radius: 30px;
    max-width: 400px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.12);
  }
}

@media (min-width: 767px) {
  .text_card {
    display: none;
  }
  .card:hover {
    background-color: #4285f4;
  }
}

.card {
  border-radius: 30px;
  max-width: 400px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.12);
}

.title_card {
  font-size: 24px;
  font-weight: 500;
}
</style>
