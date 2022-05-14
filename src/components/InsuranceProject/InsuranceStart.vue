<template>
  <div class="container gray">
    <h1>Hello There!</h1>
    <p>Let's buy some insurance. It is going to take only a few steps</p>
    <div class="form-control">
      <button class="default" @click="insuranceCalculate">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsuranceStart',
  methods: {
    insuranceCalculate() {
      this.$router.push('/calculate')
    },
  },
  mounted() {
    this.$store.commit('insurance/restoreDefaults')
  },
}
</script>
