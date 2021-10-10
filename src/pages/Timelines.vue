<script>
import { ref, computed } from "vue";
import AppCenturyRow from "../components/AppCenturyRow.vue";
import { useStore } from "vuex";
import { END_YEAR, START_YEAR } from "../constants/timeline";

export default {
  components: { AppCenturyRow },
  setup() {
    // hooks
    const store = useStore();

    // reactive data
    const years = ref([]);

    // onMounted
    store.dispatch("fetchPersonList");

    for (let i = START_YEAR / 100; i <= END_YEAR / 100; i++) {
      years.value.push(i * 100);
    }

    return {
      name: computed(() => store.state.timeline.name),
      years,
    };
  },
};
</script>

<template>
  <div v-if="name" class="name">{{ name }}</div>
  <div v-if="!name" class="name">...</div>

  <div v-for="year in years" :key="year">
    <AppCenturyRow :start-year="year" />
  </div>
</template>

<style scoped>
.name {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
