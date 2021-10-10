<script>
import Timelines from "./pages/Timelines.vue";
import useToggle from "./hooks/useToggle";

export default {
  components: { Timelines },
  setup() {
    const { value: isDarkThemeEnabled, toggle: toggleDarkTheme } = useToggle();
    return {
      isDarkThemeEnabled,
      toggleDarkTheme,
    };
  },
};
</script>

<template>
  <div id="timelineApp" :class="isDarkThemeEnabled ? 'dark' : ''">
    <div class="nav-bar">
      <button
        @click="toggleDarkTheme"
        :title="isDarkThemeEnabled ? 'Light Theme' : 'Dark Theme'"
      >
        {{ isDarkThemeEnabled ? "💡" : "🌙" }}
      </button>
      <router-link to="/">Home</router-link><br />
      <router-link to="/timelines">Timelines</router-link><br />
    </div>
    <!-- Replaced Dynamically -->
    <router-view></router-view>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

:root {
  --bg: hsl(0, 0%, 100%);
  --color: hsl(210, 29%, 20%);
  --inactive-year: hsl(0, 0%, 92%);
  --active-year: hsl(213, 85%, 53%);
}

/* resets */
button {
  background-color: transparent;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  border: none;
  box-shadow: 0.5px 0.5px 3px -1px var(--active-year);
  cursor: pointer;
  font-size: 1.2rem;
}

a {
  color: inherit;
  text-decoration: none;
}

#timelineApp {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color);
  background-color: var(--bg);
  transition: 0.3s;
  min-height: 100vh;
}

#timelineApp.dark {
  --bg: hsl(210, 30%, 15%);
  --color: hsl(210, 29%, 90%);
  --inactive-year: hsl(210, 20%, 20%);
  --active-year: hsl(162, 79%, 50%);
}

.nav-bar {
  max-width: 768px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
}

/* medium screen */
@media screen and (min-width: 768px) {
  .nav-bar {
    justify-content: flex-start;
  }
}
</style>
