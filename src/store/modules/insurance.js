import * as CONST from '@/constants'
//moking data
const countries = [
  {
    name: 'Hong Kong',
    currency: 'HKD',
    rate: 1,
  },
  {
    name: 'USA',
    currency: 'USD',
    rate: 2,
  },
  {
    name: 'Australia',
    currency: 'AUD',
    rate: 3,
  },
]

const getDefaults = () => {
  return {
    countries: countries,
    user: {
      name: '',
      age: null,
      country: countries[0].currency,
    },
    package: CONST.INSURANCE_PACKAGE_STANDARD,
    error: null,
  }
}

const state = getDefaults()
const getters = {
  countries: (state) => state.countries,
  user: (state) => state.user,
  selectedPackage: (state) => state.package,
  selectedCountry: (state, getters) =>
    getters.countries.find(
      (country) => country.currency == getters.user.country
    ),
  selectedCurrency: (state, getters) => getters.selectedCountry.currency,
  basePremium: (state, getters) => {
    const userage = getters.user.age || 0
    return userage * 10 * getters.selectedCountry.rate
  },
  packageRate: (state, getters) => (selectedPackage) => {
    if (selectedPackage == CONST.INSURANCE_PACKAGE_SAFE) {
      return getters.basePremium * 50 * 0.01
    }

    if (selectedPackage == CONST.INSURANCE_PACKAGE_SUPERSAFE) {
      return getters.basePremium * 75 * 0.01
    }
    return 0
  },
  premium: (state, getters) => {
    return getters.basePremium + getters.packageRate(getters.selectedPackage)
  },
  error: (state) => state.error,
}

// actions
const actions = {}

// mutations
const mutations = {
  setUser(state, data) {
    state.user = Object.assign({}, state.user, data)
  },
  setPackage(state, data) {
    state.package = data
  },
  restoreDefaults(state) {
    Object.assign(state, getDefaults())
  },
  setError(state, data) {
    state.error = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
