<script>
export default {
    emits: ['update-count'],
    props: {
    initialCount: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      count: this.initialCount,
    };
  },
  methods: {
    countUp() {
      this.count++;
      this.$emit('update-count', this.count);
    },
    countDown() {
      if (this.count > 0) {
        this.count--;
        this.$emit('update-count', this.count);
      }
    }
  },
};
</script>

<template>
  <button type="button" @click="countDown()">-</button>
  <input type="number" v-model="count" style="width: 10%" readonly />
  <button type="button" @click="countUp()">+</button>
</template>

<style>
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

input {
  text-align: center;
}
</style>
