<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  props: {
    year: {
      type: Number,
      default: 0,
    },
  },
  setup({ year }) {
    // hooks
    const store = useStore();

    // computed properties
    const yob = computed(() => store.state.timeline.yob);
    const yod = computed(() => store.state.timeline.yod);

    return {
      yob,
      yod,
    };
  },
};
</script>

<template>
  <span
    class="cell"
    :class="yob && yod && year >= yob && year <= yod ? 'active' : ''"
    :title="year"
  >
  </span>
</template>

<style scoped>
.cell {
  background-color: var(--inactive-year);
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  transition: 0.3s;
}

.cell.active {
  background-color: var(--active-year);
  border-radius: 1px;
  transform: rotateZ(45deg);
}
</style>
