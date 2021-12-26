import { mount } from "@cypress/vue";
import { createStore } from "vuex";
import Apples from "../components/Apples.vue";

const createApples = () => {
  return mount(Apples, {
    global: {
      provide: {
        store: createStore(),
      },
    },
  });
};

describe("Apples", () => {
  it("apples should be visible", () => {
    createApples();
    cy.get(".apple").should("be.visible");
  });
  it("apples length on tree should be 30", () => {
    createApples();
    cy.get(".apple").should("have.length", 30);
  });
});
