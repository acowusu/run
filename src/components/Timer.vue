<template>
  <VueTime :micros="micros"></VueTime>
</template>

<script>
import VueTime from  './Time.vue'
export default {
  name: 'VueTimer',
  components: {
    VueTime
  },
  data() {
    return {
      interval: 0,
      startTime:0,
      micros: 0
    }
  },
  props: {
    msg: String,
  },
  computed: {
    started() {
      return this.micros > 0
    },
  },
  methods: {
    start() {
      this.startTime =  performance.now()
      this.interval = setInterval(this.update, 100)
    },
    update() {
      this.micros = performance.now() - this.startTime
      // console.log(this.micros)
    },
    
    reset() {
      this.micros = 0
      this.startTime = 0
      clearInterval(this.interval)

    }

  },
  
  destroyed() {
    clearInterval(this.interval)
  }

}
</script>

<style>

</style>