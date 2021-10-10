<template>
  <div class="not-found">
    <div class="error-code">404</div>
    <p>This page is not available</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error-code {
  font-size: 4rem;
}

.not-found {
  max-width: 768px;
  margin: auto;
  padding: 4rem 1rem;
  text-align: center;
}
</style>
