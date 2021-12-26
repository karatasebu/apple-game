import { mount } from "@cypress/vue";
import { createStore } from "vuex";
import Basket from "../components/Basket.vue";

const createBasket = () => {
  return mount(Basket, {
    global: {
      provide: {
        store: createStore(),
      },
    },
  });
};

describe("Basket", () => {
  it("basket should be rendered", () => {
    createBasket();
    cy.get(".basket-img").should("be.visible");
  });
  it("there should be no apples in basket", () => {
    createBasket();
    cy.get(".apple").should("have.length", 0);
  });
});
