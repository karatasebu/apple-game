<template>
  <div
    v-if="(basketNum === 30 || applesNum === 30) && isOpened"
    class="modal"
    @click.self="cancel"
  >
    <div class="popup">
      <button class="btn -cancel" @click="cancel">
        <img class="cancel-img" src="../assets/svg/cancel.svg" alt="" />
      </button>
      <p v-if="basketNum === 30">There are no apples on tree!</p>
      <p v-else>There no apples in basket. Already refreshed!</p>
      <div class="buttons">
        <button class="btn" @click="cancel">OK</button>
        <button v-if="basketNum === 30" class="btn" @click="refresh">
          Refresh
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isOpened = computed(() => {
  return store.state.isModalOpened;
});
const basketNum = computed(() => {
  return store.state.basket.length;
});
const applesNum = computed(() => {
  return store.state.apples.length;
});

const cancel = () => {
  store.state.isBtnsDisabled = false;
  store.state.isModalOpened = false;
};
const refresh = () => {
  store.state.isModalOpened = false;
  store.commit("refresh");
};
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
}
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2e0601;
  color: white;
  padding: 10px 15px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.buttons {
  display: flex;
  justify-content: space-around;
}
.cancel-img {
  filter: invert(100%);
}
.btn {
  background: transparent;
  border: 1px solid white;
}
.btn.-cancel {
  padding: 0;
  border: none;
  align-self: flex-end;
}
</style>
