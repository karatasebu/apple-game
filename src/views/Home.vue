<template>
  <div class="main">
    <Modal />
    <div class="view">
      <Tree />
      <Basket />
    </div>
    <Buttons />
  </div>
</template>

<script setup>
import Tree from "../components/Tree";
import Buttons from "../components/Buttons";
import Basket from "../components/Basket";
import Modal from "../components/Modal";
</script>

<style>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
}
.view {
  display: flex;
  align-items: flex-end;
}
</style>
