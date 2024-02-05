<template>
  <base-card>
    <h2>Find your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="database" checked @change="setFilter" />
      <label for="database">Database</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="design" checked @change="setFilter" />
      <label for="design">Design</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="mobile" checked @change="setFilter" />
      <label for="mobile">Mobile</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
        design: true,
        mobile: true,
        database: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: #333; /* Dark text color */
}

.filter-option {
  margin-right: 1rem;
  display: inline-block;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

/* Add a slight scale effect and color change on hover */
.filter-option:hover {
  transform: scale(1.05); /* Slight scale effect on hover */
}

.filter-option:hover label,
.filter-option:hover input {
  color: #007bff; /* Change color on hover */
}

.filter-option.active label {
  font-weight: bold;
  color: #007bff; /* Active color */
}

/* Add a subtle animation to the active label */
.filter-option.active label {
  animation: bounce 0.3s ease-in-out;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px); /* Bounce effect */
  }
  60% {
    transform: translateY(-4px); /* Bounce effect */
  }
}
</style>
