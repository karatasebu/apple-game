<template>
  <div id="basket" class="basket">
    <h2 v-if="basketNum > 0" class="basket-text">
      {{ basketNum > 1 ? `${basketNum} Apples` : `${basketNum} Apple` }}
    </h2>
    <img class="basket-img" src="../assets/svg/basket.svg" alt="basket" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const basketNum = computed(() => {
  return store.state.counter;
});
</script>

<style>
.basket {
  position: relative;
}
.basket-img {
  width: 200px;
  height: 100px;
  margin-bottom: 50px;
}
.basket-text {
  text-align: center;
  padding-left: 35px;
  color: #2e0601;
}
</style>
