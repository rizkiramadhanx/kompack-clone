<template>
  <section class="service_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 accordion_section py-5">
          <h1 class="title_service">Layanan Kami</h1>
          <div
            class="accordion accordion-flush mt-3"
            id="accordionFlushExample"
          >
            <div class="accordion-item row-layanan">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed button_service"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Penyimpanan
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text_service">
                  Kami menerapkan SOP untuk menyimpan dan menjamin keamanan
                  barangmu
                </div>
              </div>
            </div>
            <div class="accordion-item mt-3 row-layanan">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed button_service"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Management Stock
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text_service">
                  Pemantauan jumlah barang lebih mudah dengan laporan yang
                  selalu kami update
                </div>
              </div>
            </div>
            <div class="accordion-item mt-3 row-layanan">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed button_service"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Pengemasan dan pengiriman
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text_service">
                  Kami bantu kemas dan kirimkan barang melalui ekspedisi sesuai
                  pilihanmu
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-none d-flex-lg justify-content-end">
          <img
            src="~/assets/image/penyimpanan.png"
            class="img-service img-fluid"
            alt="penyimpanan"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.background-color {
  background-color: red;
}
.row-layanan {
  border-radius: 20px;
  border-style: none;
}

.row-layanan h2 {
  border-radius: 20px;
  color: white;
  padding: 30px;
  z-index: -1;
  background-color: #4285f4;
  border-style: none;
}

.button_service {
  background-color: #4285f4;
  padding: 0;
  color: white;
  border-style: none;
}

.text_service {
  border-radius: 20px;
  background-color: white;
  color: #4285f4;
  border-top: none;
  margin-top: -20px;
  z-index: 100;
  border-style: none;
}
.img-service {
  width: 90%;
}
.title_service {
  border-bottom: 1px solid #4285f4;
  display: block;
  width: fit-content;
  padding-bottom: 10px;
}
</style>
