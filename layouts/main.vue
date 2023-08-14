<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="~/assets/image/logo.png" class="logo" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto ms-auto justify-content-beetwen">
          <li class="nav-item">
            <nuxt-link class="nav-link hover-underline-animation" to="/"
              >Beranda</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link hover-underline-animation" to="/tentang"
              >Tentang Kami</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link hover-underline-animation" to="/mitra"
              >Mitra Gudang</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link hover-underline-animation" to="/syarat"
              >Syarat dan Ketentuan</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link hover-underline-animation"
              to="/kebijakan"
              >Kebijakan Privasi</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <slot />
  <section class="footer">
    <div class="container">
      <div class="row gy-5 gx-3">
        <div class="col-md-6">
          <img src="~/assets/image/logo-footer.png" />
          <div class="d-flex gap-2 mt-4">
            <LocationIcon class="icon" width="40" height="40" />
            <div>
              <div>Head Office Komerce</div>
              <p>
                Jln. Sawah Tengah No. 3 Desa Tunjungmuli Kecamatan Karangmoncol
                Kabupaten Purbalingga (53355)
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex flex-column gap-2">
          <div class="title-footer-item">Perusahaan</div>
          <div class="">Tentang Kami</div>
          <div>Syarat dan Ketentuan</div>
          <div>Privasi</div>
        </div>
        <div class="col-md-3 d-flex flex-column gap-2">
          <div class="d-flex flex-column gap-2">
            <div class="title-footer-item">Kontak</div>
            <div>
              <MailIcon />
              bd@kompack.id
            </div>
            <div>
              <TelephoneIcon />
              0813-2801-2118
            </div>
          </div>
          <div class="mt-2">
            <div class="title-footer-item">Partner Kolaborasi</div>
            <div class="d-flex gap-2">
              <CloudHouse class="bg-white rounded" />
              <CloudHouse class="bg-white rounded" />
              <CloudHouse class="bg-white rounded" />
              <CloudHouse class="bg-white rounded" />
              <CloudHouse class="bg-white rounded" />
            </div>
            <div class="d-flex gap-2 mt-2">
              <CloudHouse class="bg-white rounded" />
              <CloudHouse class="bg-white rounded" />
              <CloudHouse class="bg-white rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer-bottom text-center">
    Copyright 2023 kompack.id. All rights reserved.
  </footer>
</template>

<script setup>
import CloudHouse from "../assets/icons/cloudhouse.vue";
import LocationIcon from "../assets/icons/location.vue";
import HamburgerIcon from "../assets/icons/hamburger.vue";
import MailIcon from "assets/icons/mail.vue";
import TelephoneIcon from "assets/icons/telephone.vue";
</script>

<style scoped>
.footer-bottom {
  background-color: #4285f4;
  color: white;
  padding: 20px 0;
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

a {
  text-decoration: none;
}

.nav-link:hover {
  color: #4285f4 !important;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #4285f4;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.title-footer-item {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: ;
}
.navbar-container {
  width: full;
  height: 64px;
}

.footer {
  color: white;
  background-color: #4285f4;
  padding: 70px 0;
  min-height: 500px;
}

.nav-item {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 500;
  color: #a3a3a3;
  cursor: pointer;
}

.nav-item:hover {
  color: #5591f4;
}

.hamburger {
  color: #5591f4;
  border-color: #5591f4;
}

.logo {
  height: 40px;
}
</style>
