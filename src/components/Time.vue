<template>
  <span>{{hours}}:{{minutes}}: {{seconds}}: {{milliseconds}}</span>
</template>

<script>
export default {
  name: 'VueTime',
  props: {
    micros: Number
  },
  computed: {
        hours() {
      return Math.floor(this.micros / 1000 / 60 / 60).toString().padStart(2, '0')
    },
    minutes() {
      return (Math.floor(this.micros / 1000 / 60) % 60).toString().padStart(2, '0')
    },
    seconds() {
      return (Math.floor(this.micros / 1000) % 60).toString().padStart(2, '0')
    },
    milliseconds() {
      return (Math.floor(this.micros) % 1000).toString().padStart(3, '0')
    }
  }
}
</script>

<style>

</style>