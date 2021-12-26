<template>
  <Home />
</template>

<script setup>
import Home from "./views/Home";
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
body {
  position: relative;
}
body::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80");
  z-index: -1;
  background-size: 100% 100%;
}
* {
  box-sizing: border-box;
}
</style>
