<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>Everything seems silent...</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>

<style scoped>
/* Header Styling with Animation */
header {
  text-align: center;
  padding: 1rem;
  background-color: #3d008d; /* Add a background color */
  color: white; /* Set text color to white */
  transition: background-color 0.5s ease, color 0.5s ease; /* Add smooth transitions */
}

header:hover {
  background-color: #270041; /* Change background color on hover */
}

/* List Styling with Animation */
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

/* Center-align h3 with Animation */
h3 {
  text-align: center;
  margin-bottom: 1rem; /* Add spacing below h3 */
  font-size: 1.5rem; /* Increase font size for emphasis */
  color: #3d008d; /* Set text color to match header */
  transition: color 0.5s ease; /* Add color transition */
}

h3:hover {
  color: #270041; /* Change text color on hover */
}
</style>
