<template>
  <div>
    <div class="container">
      <h1>Tell us about yourself</h1>
      <p v-if="error" class="error" v-html="'Error: ' + error"></p>
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
  data() {
    return {
      error: '',
    }
  },
  computed: {
    ...mapGetters('insurance', ['premium', 'selectedCurrency', 'user']),
  },
  methods: {
    validationError() {
      if (this.user.age > 100) {
        return 'Your age is over our accepted limit. <br /> We are sorry but we can not insure you now.'
      }
    },
    preview() {
      this.error = ''
      if (!this.user.name) {
        this.error = 'Please enter your name'
        return
      }
      if (!this.user.age) {
        this.error = 'Please enter your age'
        return
      }

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
