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
    <div class="header__up-box">
      <a
        class="header__up-box__link header__up-box__link--margin f-400"
        href="tel:+36704266794"
      >
        <NuxtImg
          class="header__up-box__link__img"
          src="/img/header/mobile.svg"
          alt="Függöny Oázis"
        />
        +36 70 426 67 94
      </a>
      <a
        class="header__up-box__link f-400"
        href="mailto:fuggonyoazis@gmail.com"
      >
        <NuxtImg
          class="header__up-box__link__img"
          src="/img/header/mail.svg"
          alt="Függöny Oázis"
        />
        fuggonyoazis@gmail.com
      </a>
    </div>
    <div class="header-logo-user-box grid-3">
      <div class="header-logo-user-box__img-box">
        <NuxtImg
          class="header-logo-user-box__img-box__img"
          src="/img/header/logo.svg"
          alt="Függöny Oázis"
        />
      </div>
      <div class="header-logo-user-box__search-box position-relative">
        <NuxtImg
          class="header-logo-user-box__search-box__img position-absolute"
          src="/img/header/search.svg"
          alt="Függöny Oázis"
        />
        <input
          class="header-logo-user-box__search-box__input"
          placeholder="Keresés a termékek között"
        />
      </div>
      <div class="header-logo-user-box__login-box t-end">
        <a class="header-logo-user-box__login-box__link" href="#">
          Bejelentkezés
          <NuxtImg
            class="header-logo-user-box__login-box__link__img position-relative"
            src="/img/header/user.svg"
            alt="Függöny Oázis"
          />
        </a>
        <a
          class="header-logo-user-box__login-box__link header-logo-user-box__login-box__link--margin f-600"
          href="#"
        >
          13
          <NuxtImg
            class="header-logo-user-box__login-box__link__img header-logo-user-box__login-box__link__img--format position-relative"
            src="/img/header/basket.svg"
            alt="Függöny Oázis"
          />
        </a>
      </div>
    </div>
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
                  'menu__item text-color text-transform-uppercase f-500',
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
