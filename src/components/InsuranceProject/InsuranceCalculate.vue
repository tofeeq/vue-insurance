<template>
  <div>
    <div class="container">
      <h1>Tell us about yourself</h1>
      <insurance-form></insurance-form>
      <insurance-packages></insurance-packages>
      <div class="container">
        <strong>Your Premium is : {{ premium }}{{ selectedCurrency }}</strong>
        <div class="container">
          <router-link to="/"><button>Back</button></router-link>
          <button class="default" @click="preview">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InsuranceCalculate',
  components: {
    insuranceForm: () => import('./InsuranceForm'),
    insurancePackages: () => import('./InsurancePackages'),
  },
  computed: {
    ...mapGetters('insurance', ['premium', 'selectedCurrency', 'user']),
  },
  methods: {
    validationError() {
      if (!this.user.name) {
        return 'Please enter your name'
      }
      if (this.user.age > 100) {
        return 'Sorry we only support customers upto age 100'
      }
    },
    preview() {
      let error = this.validationError()
      if (error) {
        this.$store.commit('insurance/setError', error)
        this.$router.push('error')
        return
      }
      this.$router.push('preview')
    },
  },
}
</script>
