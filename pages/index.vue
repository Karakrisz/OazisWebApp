<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { title: 'Elem 1', description: 'Ez az első elem leírása.' },
  { title: 'Elem 2', description: 'Ez a második elem leírása.' },
  { title: 'Elem 3', description: 'Ez a harmadik elem leírása.' },
])

const currentSlide = ref(0)

const nextSlide = () => {
  if (currentSlide.value < items.value.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = items.value.length - 1
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
      <div class="slider-content">
        <NuxtImg class="slider-content__img" src="/img/slider/slider.webp" />
        <div class="carousel-container">
          <div
            class="carousel-slide"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              class="carousel-item"
              v-for="(item, index) in items"
              :key="index"
            >
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <button class="carousel-control left" @click="prevSlide">
            &#10094;
          </button>
          <button class="carousel-control right" @click="nextSlide">
            &#10095;
          </button>
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
