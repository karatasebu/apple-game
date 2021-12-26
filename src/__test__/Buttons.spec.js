import { mount } from "@cypress/vue";
import { createStore } from "vuex";
import Buttons from "../components/Buttons.vue";

const createButtons = () => {
  const element = document.createElement("img");
  element.id = "apple1";
  return mount(Buttons, {
    global: {
      provide: {
        store: createStore({
          state: {
            apples: [{ value: element, dropTime: 0.235 }],
            basket: [],
            treeEl: document.createElement("div"),
            basketEl: document.createElement("div"),
            applesEl: document.createElement("div"),
            isModalOpened: false,
            isBtnsDisabled: false,
            counter: 0,
          },
        }),
      },
    },
  });
};

describe("Buttons", () => {
  it("buttons length should be 2", () => {
    createButtons();
    cy.get(".btn").should("have.length", 2);
  });
  it("first button should be clickable", () => {
    createButtons();
    cy.get(".btn:eq(0)").click();
  });
  it("second button should be clickable", () => {
    createButtons();
    cy.get(".btn:eq(1)").click();
  });
});
