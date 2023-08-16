<template>
  <section class="location_section py-5">
    <div class="container">
      <h1 class="text-center">Lokasi Gudang</h1>
      <p class="mt-5 text-center">
        Mitra gudang Kompack tersebar di kota besar seluruh Indonesia. Yuk
        kembangkan bisnismu bersama Kompack untuk pengiriman lebih cepat, ongkir
        murah dan biaya retur yang rendah.
      </p>
      <div class="d-flex justify-content-center">
        <img src="~/assets/image/map.png" class="img-fluid img_map" alt="Map" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.location_section {
  background-color: #dff3ff;
}

.location_section h1 {
  font-size: 28px;
  font-weight: 650;
}

/* section map */

.img_map {
  width: 80%;
}

@media (min-width: 767px) {
  .img_map:hover {
    transition: all 2s ease-in-out;
    width: 100% !important;
  }
}
</style>
