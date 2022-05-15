<template>
  <div class="container gray p10">
    <div class="form-container">
      <h3>Select Insurance Package below</h3>
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
          Safe (+{{ formatPrice(packageRate(CONST.INSURANCE_PACKAGE_SAFE)) }}
          50%)
        </label>
      </div>
      <div class="form-control">
        <label>
          <input
            type="radio"
            v-model="selectedPackage"
            :value="CONST.INSURANCE_PACKAGE_SUPERSAFE"
          />
          Super Safe (+{{
            formatPrice(packageRate(CONST.INSURANCE_PACKAGE_SUPERSAFE))
          }}
          75%)
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
  methods: {
    formatPrice(price) {
      if (price) {
        return price + this.selectedCurrency + ','
      }
      return ''
    },
  },
}
</script>
