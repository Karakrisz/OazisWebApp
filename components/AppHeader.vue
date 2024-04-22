<script setup>
const links = [
  { name: 'FÜGGÖNY', path: '/' },
  { name: 'LAKÁSTEXTIL', path: '/lakastextil' },
  { name: 'SÖTÉTÍTŐ', path: '/sotetito' },
  { name: 'RÖVIDÁRÚ', path: '/rovidaru' },
  { name: 'DEKORÁCIÓ', path: '/dekoracio' },
  { name: 'AKCIÓK', path: '/akciok' },
  { name: 'KAPCSOLAT', path: '/kapcsolat' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="nav-box header-content__nav-box">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="hamburger"
          :class="{ open: isMenuOpen }"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
        <nav :class="{ 'menu--open': isMenuOpen, menu: true }" id="menu">
          <ul id="menu__list" class="menu__list d-flex">
            <li v-for="link in links" :key="link.path" class="menu__list__li">
              <NuxtLink
                :to="link.path"
                :class="[
                  'menu__item text-color text-transform-uppercase',
                  { 'menu__item--border-left': link.path === '/' },
                ]"
              >
                <template v-if="link.imagePath">
                  <img
                    class="menu__list__li__img"
                    :src="link.imagePath"
                    :alt="link.name"
                  />
                </template>
                <template v-else>
                  {{ link.name }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
