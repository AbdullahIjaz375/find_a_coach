<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.design {
  background-color: #006666;
  color: white;
}

.database {
  background-color: #004080;
  color: white;
}

.mobile {
  background-color: #ff9933;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
