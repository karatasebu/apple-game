<template>
  <div ref="treeEl" class="tree">
    <Apples />
    <img class="tree-img" src="../assets/svg/tree.svg" alt="tree" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import Apples from "./Apples";

const store = useStore();
const treeEl = ref(null);

onMounted(() => {
  store.state.treeEl = treeEl.value;
});
</script>

<style>
.tree {
  position: relative;
}
.tree-img {
  height: 550px;
}
.shaking {
  animation: shake 3s linear;
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
