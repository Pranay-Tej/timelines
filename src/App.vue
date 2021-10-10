<script>
import Timelines from "./pages/Timelines.vue";

export default {
  components: { Timelines },
};
</script>

<template>
  <Timelines />
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}
</style>
