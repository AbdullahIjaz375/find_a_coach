<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  transition: box-shadow 0.3s ease; /* Add a smooth transition effect to box-shadow */
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3); /* Change the box-shadow on hover */
}
</style>
