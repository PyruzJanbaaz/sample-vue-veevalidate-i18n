<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link">
                {{ $t('nav.home') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'About' }" class="nav-link">
                {{ $t('nav.about') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Contact' }" class="nav-link">
                {{ $t('nav.contact') }}
              </router-link>
            </li>
          </ul>
          <CLocalSwitcher/>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

import CLocalSwitcher from "@/components/CLocalSwitcher";

export default {
  name: 'App',
  components: {CLocalSwitcher}
}
</script>


<style>
nav a.router-link-active {
  background-color: #3fb27f;
  border-radius: 0.2rem;
  color: #fff!important;
}
</style>
