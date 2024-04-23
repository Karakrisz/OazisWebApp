<script setup lang="ts">
import { ref, computed } from 'vue'

const sliderElem = ref([
  {
    title: 'KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK',
    description:
      'Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.',
    button: 'TOVÁBB',
    number: '1 / 3',
  },
  {
    title: 'KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK',
    description:
      'Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.',
    button: 'TOVÁBB',
    number: '2 / 3',
  },
  {
    title: 'KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK',
    description:
      'Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.',
    button: 'TOVÁBB',
    number: '3 / 3',
  },
])

const highlightPremium = (text: string | null | undefined): string => {
  if (!text) {
    return ''
  }
  return text.replace('PRÉMIUM', '<strong class="f-600">PRÉMIUM</strong>')
}

const currentSlide = ref(0)

const nextSlide = () => {
  if (currentSlide.value < sliderElem.value.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = sliderElem.value.length - 1
  }
}

const quantity = ref(200)

const quantityDisplay = computed(() => {
  return `${quantity.value} cm`
})

const increment = () => {
  quantity.value++
  // updateQuantity()
}

const decrement = () => {
  if (quantity.value > 0) {
    quantity.value--
    // updateQuantity()
  }
}

// const updateQuantity = () => {
//    console.log(quantity.value)
//    updateCart(quantity.value);
// }
</script>
<template>
  <div>
    <section>
      <div class="slider-content position-relative">
        <NuxtImg class="slider-content__img" src="/img/slider/slider.webp" />
        <div class="slider-content__carousel-content position-absolute">
          <div class="carousel position-relative">
            <div
              class="carousel-slide d-flex"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                class="carousel-item"
                v-for="(item, index) in sliderElem"
                :key="index"
              >
                <h1
                  class="carousel-item__h1 text-color f-300"
                  v-html="highlightPremium(item.title)"
                ></h1>
                <p class="carousel-item__p text-color f-400">
                  {{ item.description }}
                </p>
                <NuxtLink class="carousel-item__NuxtLink f-300">{{
                  item.button
                }}</NuxtLink>
                <div class="carousel__btn-content d-flex">
                  <button class="carousel__btn-content__btn" @click="prevSlide">
                    <NuxtImg
                      class="carousel__btn-content__btn__img"
                      src="/img/slider/a-left.svg"
                    />
                  </button>
                  <p class="carousel__btn-content__p text-color f-300">
                    {{ item.number }}
                  </p>
                  <button class="carousel__btn-content__btn" @click="nextSlide">
                    <NuxtImg
                      class="carousel__btn-content__btn__img"
                      src="/img/slider/a-right.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="products-content">
        <h2
          class="products-content__h2 text-transform-uppercase f-300 text-center"
        >
          KIEMELT AJÁNLATOK
        </h2>
        <div class="counter d-flex">
          <button class="counter__btn" @click="decrement">-</button>
          <input
            class="counter__input"
            type="text"
            :value="quantityDisplay"
            readonly
          />
          <button class="counter__btn" @click="increment">+</button>
        </div>
      </div>
    </section>
  </div>
</template>
