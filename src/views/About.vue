<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <button @click="decrement_count">-</button>
    <button @click="increment_count">+</button>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
  },
  methods: {
    increment_count() {
      this.$store.commit('INCREMENT_COUNT', 2);
    },
    decrement_count() {
      this.$store.commit('DECREMENT_COUNT', 2);
    },
  },
};
</script>
