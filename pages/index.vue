<script setup lang="ts">
import { ref, computed } from 'vue'

interface Post {
  id: number
  title: string
  body: string
  image: string
}

const itemsPost = ref<Post[] | null>(null)
const error = ref<string | null>(null)
const loading = ref(false)

async function fetchPosts() {
  loading.value = true
  try {
    const response = await fetch('https://fuggonyoazis.hu/api/public/json-posts')
    if (!response.ok) throw new Error('Failed to fetch posts')
    const data = await response.json()
    itemsPost.value = data
  } catch (e) {
    error.value = (e as Error).message
    console.error('Error fetching posts:', (e as Error).message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})

function getShortBody(body: string) {
  if (body.length > 200) {
    return body.substring(0, 200) + '...'
  }
  return body
}

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
  name: '',
  email: '',
  phonenumber: '',
  subject: '',
  message: '',
})

const sendEmail = () => console.log(form.value)

interface AccordionItem {
  title: string
  content: string
}

const AccordionItems: AccordionItem[] = [
  { title: 'Kell-e regisztrálnom a vásárláshoz?', content: 'Tartalom 1' },
  {
    title: 'Okostelefonon és tableten is tudok vásárolni?',
    content: 'Tartalom 2',
  },
  { title: 'Hogy adhatom le a rendelésem?', content: 'Tartalom 3' },
  {
    title: 'Lehetséges e-mailben, vagy telefonon is rendelni?',
    content: 'Tartalom 4',
  },
  {
    title: 'Lehetséges e-mailben, vagy telefonon is rendelni?',
    content: 'Tartalom 5',
  },
]

const currentIndex = ref<number | null>(null)
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
                <p class="carousel-item__p text-color f-300">
                  {{ item.description }}
                </p>
                <NuxtLink class="carousel-item__NuxtLink f-300">{{
                  item.button
                }}</NuxtLink>
                <div class="test-v">
                  <div class="carousel__btn-content d-flex">
                    <button
                      class="carousel__btn-content__btn"
                      @click="prevSlide"
                    >
                      <NuxtImg
                        class="carousel__btn-content__btn__img"
                        src="/img/slider/a-left.svg"
                        alt="Függöny Oázis"
                      />
                    </button>
                    <p class="carousel__btn-content__p text-color f-300">
                      {{ item.number }}
                    </p>
                    <button
                      class="carousel__btn-content__btn"
                      @click="nextSlide"
                    >
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
      </div>
    </section>

    <section>
      <div class="products-content">
        <h2
          class="products-content__h2 text-transform-uppercase f-300 text-center"
        >
          KIEMELT AJÁNLATOK
        </h2>
        <div class="counter d-flex d-none">
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
            class="products-content__link-content__NuxtLink text-transform-uppercase text-color-w f-600"
          >
           termékek feltöltés alatt
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
            <h4
              class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"
            >
              FÜRDŐSZOBA
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/halo.svg"
              alt="Függöny Oázis"
            />
            <h4
              class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"
            >
              HÁLÓSZOBA
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/nappali.svg"
              alt="Függöny Oázis"
            />
            <h4
              class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"
            >
              NAPPALI
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/konyha.svg"
              alt="Függöny Oázis"
            />
            <h4
              class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"
            >
              KONYHA
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/iroda.svg"
              alt="Függöny Oázis"
            />
            <h4
              class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"
            >
              IRODA
            </h4>
          </div>

          <div class="navigation-content__link-content__div text-center">
            <NuxtImg
              class="navigation-content__link-content__div__img"
              src="/img/navigation/gyerek.svg"
              alt="Függöny Oázis"
            />
            <h4
              class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w"
            >
              GYEREKSZOBA
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="form-content">
        <div class="form-content__form-img-content position-relative grid-2">
          <div
            class="contact-form__content form-content__form-img-content__div bg-color-w"
          >
            <div class="contact-form bg-color-w">
              <h5 class="contact-form__h5 f-300">KÉRDÉSE VAN?</h5>
              <h6 class="contact-form__h6 f-500">KERESSEN MINKET BIZALOMMAL</h6>
              <form @submit.prevent="sendEmail">
                <div class="form-group">
                  <input
                    class="form-group__input"
                    placeholder="Név*"
                    type="text"
                    id="name"
                    v-model="form.name"
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
                  <input
                    class="form-group__input"
                    placeholder="Tárgy*"
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    rows="9"
                    cols="300"
                    class="form-group__textarea"
                    placeholder="Üzenet..."
                    id="message"
                    v-model="form.message"
                    required
                  ></textarea>
                </div>
                <div class="contact-form__btn-box">
                  <button
                    class="contact-form__btn-box__btn text-transform-uppercase text-color-w f-500"
                    type="submit"
                  >
                    Küldés
                    <NuxtImg
                      class="contact-form__btn-box__btn__img position-relative"
                      src="/img/navigation/mail-arrow.svg"
                      alt="Függöny Oázis"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            class="form-content__div form-content__img-content form-content__form-img-content__div"
          >
            <NuxtImg
              class="form-content__img-content__img"
              src="/img/navigation/navigation.webp"
              alt="Függöny Oázis"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="FAQ-content">
        <h3 class="FAQ-content__h3 text-transform-uppercase f-300 text-center">
          GYAKRAN ISMÉTELT KÉRDÉSEK
        </h3>
        <div class="accordion-content d-flex">
          <div
            v-for="(item, index) in AccordionItems"
            :key="index"
            class="accordion-content__accordion"
            @click="currentIndex = currentIndex === index ? null : index"
          >
            <div class="accordion-content__header d-flex">
              <h3 class="accordion-content__header__h3 f-600">
                {{ item.title }}
              </h3>
              <span
                class="accordion-content__header__arrow"
                :class="{ 'accordion-is-open': currentIndex === index }"
              >
                <NuxtImg
                  class="accordion-content__header__arrow__img"
                  src="/img/accordion/accordion-arrow.svg"
                  alt="Függöny Oázis"
                />
              </span>
            </div>
            <div
              class="accordion-content__content"
              :class="{ AccordionOpen: currentIndex === index }"
            >
              <p class="accordion-content__content__p text-color-w">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
        <div class="FAQ-content__link-content text-center">
          <NuxtLink
            class="FAQ-content__link-content__NuxtLink text-transform-uppercase text-color-w f-600"
          >
            ÖSSZES KÉRDÉS MEGTEKINTÉSE
          </NuxtLink>
        </div>
      </div>
    </section>
    <section>
      <div class="blog-content">
        <h4 class="blog-content__h4 text-transform-uppercase f-300 text-center">
          BLOG
        </h4>

        <div class="blog-content__img-text-box grid-3">
          <div
            v-for="post in itemsPost"
            :key="post.id"
            class="blog-content__img-text-box__div"
          >
            <NuxtImg
              class="blog-content__img-text-box__div__img"
              :src="`https://fuggonyoazis.hu/api/public/storage/${post.image}`"
              alt="{{ post.title }}"
            />
            <div class="blog-content__img-text-box__div__tBox">
              <h3 class="blog-content__img-text-box__div__h3">
                {{ post.title }}
              </h3>

              <p
                class="blog-content__img-text-box__div__p"
                v-html="getShortBody(post.body)"
              />

              <div class="blog-content__img-text-box__div__link-box d-flex">
                <NuxtLink
                  :to="`/posts/${post.id}`"
                  class="blog-content__img-text-box__div__link-box__NuxtLink f-500"
                >
                  Tovább olvasok
                </NuxtLink>
                <NuxtImg
                  class="blog-content__img-text-box__div__link-box__NuxtLink__img"
                  src="/img/blog/blog-a-right.svg"
                  alt="Függöny Oázis"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
