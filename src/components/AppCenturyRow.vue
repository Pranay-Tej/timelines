<script>
import AppYearCell from "./AppYearCell.vue";
import { computed } from "vue";

export default {
  components: { AppYearCell },
  props: {
    startYear: {
      type: Number,
      default: 0,
    },
  },
  setup({ startYear }) {
    // computed properties
    const computedStartDate = computed(function () {
      return `${
        startYear < 0 ? Math.abs(startYear) : startYear + 1
      } ${startYear >= 0 ? "AD" : "BC"}`;
    });
    const computedEndDate = computed(function () {
      const endDate = Math.abs(startYear + 100);
      return `${
        startYear < 0 ? endDate + 1 : endDate
      } ${startYear >= 0 ? "AD" : "BC"}`;
    });

    return {
      computedStartDate,
      computedEndDate,
    };
  },
};
</script>

<template>
  <div class="row">
    <div class="rowYears startYear">{{ computedStartDate }}</div>
    <AppYearCell v-for="n in 10" :key="n" :year="startYear + (n - 1) * 10" />
    <div class="rowYears">{{ computedEndDate }}</div>
  </div>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr repeat(10, 0.25fr) 1fr;
  justify-items: center;
  align-items: center;
  margin-bottom: 0.3rem;
}

.rowYears {
  font-size: 0.9rem;
  justify-self: left;
}

.startYear {
  justify-self: right;
}
</style>
