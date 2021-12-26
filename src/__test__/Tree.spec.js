import { mount } from "@cypress/vue";
import { createStore } from "vuex";
import Tree from "../components/Tree.vue";
import Apples from "../components/Apples.vue";

const createTree = () => {
  return mount(Tree, {
    global: {
      provide: {
        store: createStore(),
      },
    },
  });
};

describe("Tree", () => {
  it("tree should be visible", () => {
    createTree();
    cy.get(".tree-img").should("be.visible");
  });
  it("tree component should contains apples component", () => {
    createTree();
    cy.get(Apples);
  });
  it("apples length on tree should be 30", () => {
    createTree();
    cy.get(".apple").should("have.length", 30);
  });
});
