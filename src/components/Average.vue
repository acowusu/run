<template>
  <vue-time :micros="average"></vue-time>
</template>

<script>
import VueTime from  './Time.vue'
export default {
  name: 'VueAverage',
  components: {
    VueTime
  },
  data() {
    return {
      items: [],
      count: 0
    }
  },
  props: {
    msg: String,
    number: Number
  },
  computed: {
    average() {
      const denominator = this.items.length > 0 ? this.items.length : 1
      return this.items.reduce((a, b) => a + b, 0) / denominator
    },
    started() {
      return this.items.length > 0
    },
  },
  methods: {
    
    addValue(value) {
      if (this.items.length === this.number) {
        this.items.shift()
      }
      this.items.push(value)
    },
    reset() {
      this.items = []
    }

  }

}
</script>

<style>

</style>