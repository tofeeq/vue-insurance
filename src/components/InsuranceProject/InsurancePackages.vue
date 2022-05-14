<template>
  <div class="container gray p10">
    <div class="form-container">
      <div class="form-control">
        <label>
          <input
            type="radio"
            v-model="selectedPackage"
            :value="CONST.INSURANCE_PACKAGE_STANDARD"
          />
          Standard
        </label>
      </div>
      <div class="form-control">
        <label>
          <input
            type="radio"
            v-model="selectedPackage"
            :value="CONST.INSURANCE_PACKAGE_SAFE"
          />
          Safe (+{{ packageRate(CONST.INSURANCE_PACKAGE_SAFE) }}
          {{ selectedCurrency }}, 50%)
        </label>
      </div>
      <div class="form-control">
        <label>
          <input
            type="radio"
            v-model="selectedPackage"
            :value="CONST.INSURANCE_PACKAGE_SUPERSAFE"
          />
          Super Safe (+{{ packageRate(CONST.INSURANCE_PACKAGE_SUPERSAFE) }}
          {{ selectedCurrency }}, 75%)
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InsurancePackages',
  computed: {
    ...mapGetters('insurance', ['selectedCurrency', 'packageRate']),
    selectedPackage: {
      get() {
        return this.$store.state.insurance.package
      },
      set(value) {
        this.$store.commit('insurance/setPackage', value)
      },
    },
  },
}
</script>
