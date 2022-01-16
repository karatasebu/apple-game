import { createStore } from "vuex";

const store = createStore({
  state: {
    apples: [],
    basket: [],
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
          document.querySelector("#apples").appendChild(el.value);
        });
        state.basket = [];
        state.apples.forEach((el) => {
          el.value.style.left = `${Math.random() * 380}px`;
          el.value.style.top = `${Math.random() * 170}px`;
        });
      }
    },
  },
});

export default store;
