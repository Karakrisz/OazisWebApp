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

const form = ref({
  firstname: '',
  lastname: '',
  email: '',
  phonenumber: '',
  message: '',
})

const sendEmail = () => console.log(form.value)
</script>
<template>
  <div>
    <section>
      <div class="slider-content position-relative">
        <NuxtImg
          class="slider-content__img"
          src="/img/slider/slider.webp"
          alt="Függöny Oázis"
        />
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
                      alt="Függöny Oázis"
                    />
                  </button>
                  <p class="carousel__btn-content__p text-color f-300">
                    {{ item.number }}
                  </p>
                  <button class="carousel__btn-content__btn" @click="nextSlide">
                    <NuxtImg
                      class="carousel__btn-content__btn__img"
                      src="/img/slider/a-right.svg"
                      alt="Függöny Oázis"
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
        <div class="products-content__link-content text-center">
          <NuxtLink
            class="products-content__link-content__NuxtLink text-color-w"
          >
            ÖSSZES AJÁNLAT MEGTEKINTÉSE
          </NuxtLink>
        </div>
      </div>
    </section>
    <section>
      <div class="navigation-content">
        <h3
          class="navigation-content__h3 text-transform-uppercase f-300 text-center"
        >
          KERESSEN SZOBA SZERINT
        </h3>

        <div class="navigation-content__link-content grid-6">
          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/furdo.svg"
              alt="Függöny Oázis"
            />
            <h4 class="navigation-content__link-content__div__h4 text-color-w">
              FÜRDŐSZOBA
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/halo.svg"
              alt="Függöny Oázis"
            />
            <h4 class="navigation-content__link-content__div__h4 text-color-w">
              HÁLÓSZOBA
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/nappali.svg"
              alt="Függöny Oázis"
            />
            <h4 class="navigation-content__link-content__div__h4 text-color-w">
              NAPPALI
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/konyha.svg"
              alt="Függöny Oázis"
            />
            <h4 class="navigation-content__link-content__div__h4 text-color-w">
              KONYHA
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/iroda.svg"
              alt="Függöny Oázis"
            />
            <h4 class="navigation-content__link-content__div__h4 text-color-w">
              IRODA
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/gyerek.svg"
              alt="Függöny Oázis"
            />
            <h4 class="navigation-content__link-content__div__h4 text-color-w">
              GYEREKSZOBA
            </h4>
          </div>
        </div>
      </div>

      <section>
        <div class="form-content">
          <div class="form-content__form-img-content">
            <div class="form-content__div form-content__form">
              <div class="contact-form">
                <form @submit.prevent="sendEmail">

                    <div class="form-group">
                      <input
                        class="form-group__input"
                        placeholder="Vezetéknév *"
                        type="text"
                        id="firstname"
                        v-model="form.firstname"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-group__input"
                        placeholder="Keresztnév *"
                        type="text"
                        id="lastname"
                        v-model="form.lastname"
                        required
                      />
                    </div>
    
                    <div class="form-group">
                      <input
                        class="form-group__input"
                        placeholder="E-mail cím *"
                        type="email"
                        id="email"
                        v-model="form.email"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-group__input"
                        placeholder="Telefonszám"
                        type="text"
                        id="phonenumber"
                        v-model="form.phonenumber"
                        required
                      />
                    </div>
        
                  <div class="form-group">
                    <textarea
                      class="form-group__textarea"
                      placeholder="Milyen segítségre volna szüksége?"
                      id="message"
                      v-model="form.message"
                      required
                    ></textarea>
                  </div>

                  <div class="contact-form__btn-box t-end">
                    <button class="page-btn text-color-w" type="submit">
                      Küldés
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="form-content__div form-content__img"></div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
