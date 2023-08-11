<template>
  <div
    class="shadow position-relative card col-lg-3 card d-flex justify-content-center align-items-center flex-column p-3"
  >
    <CardWhyKompack1 class="img-card" />
    <div class="">
      <h1>Praktis</h1>
      <p>PRAKTIS karena semua urusan pergudanganmu, kami yang tangani</p>
    </div>
  </div>
</template>

<script setup>
import CardWhyKompack1 from "../assets/svg/why-kompack-1.vue";
</script>

<style>
@media (min-width: 300px) and (max-width: 767px) {
  .img-card {
    position: absolute;
    bottom: 50px;
    left: 10px;
  }
  .card {
    border-radius: 28px;
    max-width: 400px;
  }
}

/* .img-card {
  position: absolute;
  bottom: 40px;
  left: 30px;
} */
</style>
