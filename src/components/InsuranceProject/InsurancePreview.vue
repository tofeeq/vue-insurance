<template>
  <div class="container gray">
    <h1>Summary</h1>
    <h4>{{ user.name }}</h4>
    <p>Age: {{ user.age }}</p>
    <p>Where do you live: {{ selectedCountry.name }}</p>
    <p>Package: {{ selectedPackage }}</p>
    <p>Premium: {{ premium }}{{ selectedCurrency }}</p>
    <div class="container">
      <button @click="goback">Back</button>
      <router-link to="/"><button class="default">Buy</button></router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InsurancePreview',
  computed: {
    ...mapGetters('insurance', [
      'user',
      'selectedCountry',
      'selectedPackage',
      'premium',
      'selectedCurrency',
    ]),
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
  },
}
</script>
