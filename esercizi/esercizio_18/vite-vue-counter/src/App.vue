<template lang="">
  <main>
    <div class="container flex">
      <AppTrigger @trigger="increaseByOne"/>
      <AppCounter :counter="counter"/>
    </div>
  </main>
</template>

<script>
import AppCounter from './components/AppCounter.vue';
import AppTrigger from './components/AppTrigger.vue';

export default {
  components: {
    AppCounter,
    AppTrigger
  },

  data() {
        return {
            counter: 0
        }
    },

  methods: {
    increaseByOne() {
      this.counter += 1;
    }
  }
}
</script>

<style lang="">
  
</style>