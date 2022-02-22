<template>
  <span>{{msg}}: {{count}}</span>
</template>

<script>
export default {
  name: 'VueCounter',
  data() {
    return {
      count: 0
    }
  },
  props: {
    msg: String,
    delta: Number
  },
  methods: {
    increment() {
      this.count++
    },
    next() {
      this.count += this.delta
    },
    decrement() {
      this.count--
    },
    setValue(value) {
      this.count = value
    },
    reset() {
      this.count = 0
    }

  }

}
</script>

<style>

</style>