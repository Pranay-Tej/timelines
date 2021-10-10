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
  <div class="timeline">
    <div v-if="name" class="name">{{ name }}</div>
    <div v-if="!name" class="name">...</div>
    <div class="timeline-grid">
      <div v-for="year in years" :key="year">
        <AppCenturyRow :start-year="year" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  max-width: 768px;
  margin: auto;
  padding: 2rem 0;
  max-width: 768px;
}

/* medium screen */
@media screen and (min-width: 768px) {
  .timeline {
    display: grid;
    grid-template-columns: 1fr 410px;
    align-items: center;
  }
}
.name {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.timeline-grid {
  max-width: 410px;
}
</style>
