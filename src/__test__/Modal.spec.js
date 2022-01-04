import { mount } from "@cypress/vue";
import { createStore } from "vuex";
import Modal from "../components/Modal.vue";

const createModal = (isModalOpened, basket, apples) => {
  return mount(Modal, {
    global: {
      provide: {
        store: createStore({
          state: {
            isModalOpened,
            basket,
            apples,
          },
        }),
      },
    },
  });
};

describe("Modal", () => {
  it("modal shouldn't exist when first render", () => {
    createModal(false, [], new Array(30));
    cy.get(".modal").should("not.exist");
  });
  it("when all apples on tree and try to refresh, modal should exist", () => {
    createModal(true, [], new Array(30));
    cy.get(".modal").should("exist");
  });
  it("when all apples on tree and modal is open, should be one button", () => {
    createModal(true, [], new Array(30));
    cy.get(".buttons .btn").should("have.length", 1);
  });
  it("when all apples in basket and try to shake, modal should exist", () => {
    createModal(true, new Array(30), []);
    cy.get(".modal").should("exist");
  });
  it("when all apples in basket and modal is open, should be two button", () => {
    createModal(true, new Array(30), []);
    cy.get(".buttons .btn").should("have.length", 2);
  });
  it("when modal is open, should be cancel button", () => {
    createModal(true, new Array(30), []);
    cy.get(".btn.-cancel").should("be.visible");
  });
  it("click OK button should close modal", () => {
    createModal(true, new Array(30), []);
    cy.get(".buttons .btn:eq(0)").click();
    cy.get(".modal").should("not.exist");
  });
  it("click Refresh button should close modal", () => {
    createModal(true, new Array(30), []);
    cy.get(".buttons .btn:eq(1)").click();
    cy.get(".modal").should("not.exist");
  });
  it("click Cancel icon should close modal", () => {
    createModal(true, new Array(30), []);
    cy.get(".btn.-cancel").click();
    cy.get(".modal").should("not.exist");
  });
});
