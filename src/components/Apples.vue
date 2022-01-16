<template>
  <div id="apples" class="apples">
    <img
      v-for="index in 30"
      :id="`apple${index}`"
      :key="index"
      :ref="setRefs"
      class="apple"
      src="../assets/svg/apple.svg"
      alt="apple"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const appleRefs = [];

const setRefs = (el) => {
  appleRefs.push({ value: el, dropTime: Math.random() * 3000 });
};

onMounted(() => {
  appleRefs.forEach((el) => {
    el.value.style.left = `${Math.random() * 380}px`;
    el.value.style.top = `${Math.random() * 170}px`;
  });
  store.state.apples = appleRefs;
});
</script>

<style>
.apples {
  width: 380px;
  height: 170px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
}
.apple {
  position: absolute;
  width: 22px;
  height: 22px;
}
.dropped {
  animation: drop 1.5s forwards;
}
@keyframes drop {
  to {
    top: 430px;
  }
}
</style>
