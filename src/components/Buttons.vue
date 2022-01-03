<template>
  <div class="buttons">
    <button
      :disabled="store.state.isBtnsDisabled"
      class="btn -shake"
      @click="shake"
    >
      Shake
    </button>
    <button :disabled="store.state.isBtnsDisabled" class="btn" @click="refresh">
      Refresh
    </button>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

watch(
  computed(() => store.state.counter),
  (val) => {
    if (val === store.state.basket.length) {
      store.state.isBtnsDisabled = false;
    }
  }
);

const afterShake = () => {
  if (store.state.basket.length === 30) store.state.isModalOpened = true;
  store.state.treeEl.classList.remove("shaking");
  for (let i = 0; i < Math.ceil(Math.random() * 5) + 1; i++) {
    const removed = store.state.apples.splice(0, 1);
    store.state.basket.push(...removed);
  }
};

const addToBasket = (el) => {
  store.state.basketEl.appendChild(el.value);
  el.value.classList.remove("dropped");
  el.value.style.left = "unset";
  if (store.state.counter < 14) {
    el.value.style.top = "85px";
    el.value.style.right = `${store.state.counter * 10}px`;
  } else if (store.state.counter < 28) {
    el.value.style.top = "75px";
    el.value.style.right = `${(store.state.counter - 14) * 10}px`;
  } else {
    el.value.style.top = "65px";
    el.value.style.right = `${(store.state.counter - 28) * 10}px`;
  }
  store.state.counter++;
};

const shake = () => {
  store.state.treeEl.classList.add("shaking");
  store.state.isBtnsDisabled = true;
  new Promise((resolve) => {
    setTimeout(() => {
      afterShake();
      resolve();
    }, 3000);
  }).then(() => {
    store.state.basket.forEach((el) => {
      if (store.state.basketEl.querySelector(`#${el.value.id}`) === null) {
        setTimeout(() => {
          el.value.classList.add("dropped");
        }, el.dropTime);
        setTimeout(() => {
          addToBasket(el);
        }, 2500 + el.dropTime);
      }
    });
  });
};

const refresh = () => {
  store.commit("refresh");
};
</script>

<style>
.btn {
  padding: 10px 25px;
  border: none;
  border-radius: 2px;
  background-color: #2e0601;
  color: white;
  cursor: pointer;
}
.btn.-shake {
  margin-right: 15px;
}
</style>
