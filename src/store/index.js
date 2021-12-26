import { createStore } from "vuex";

const store = createStore({
  state: {
    apples: [],
    basket: [],
    treeEl: null,
    basketEl: null,
    applesEl: null,
    isModalOpened: false,
    isBtnsDisabled: false,
    counter: 0,
  },
  mutations: {
    refresh(state) {
      if (state.apples.length === 30) {
        state.isModalOpened = true;
      } else {
        state.counter = 0;
        state.apples = state.apples.concat(state.basket);
        state.basket.forEach((el) => {
          state.applesEl.appendChild(el.value);
        });
        state.basket = [];
        state.apples.forEach((el) => {
          el.value.style.left = `${Math.floor(Math.random() * 380)}px`;
          el.value.style.top = `${Math.floor(Math.random() * 170)}px`;
        });
      }
    },
  },
});

export default store;
