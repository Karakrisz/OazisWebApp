<script setup>
import { ref, computed } from 'vue'

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
          <input class="counter__input" type="text" :value="quantityDisplay" readonly />
          <button class="counter__btn" @click="increment">+</button>
        </div>
      </div>
    </section>
  </div>
</template>
