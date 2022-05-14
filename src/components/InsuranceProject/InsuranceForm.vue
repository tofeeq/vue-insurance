<template>
  <div>
    <div class="form-container">
      <div class="form-control">
        <label>Name</label>
        <input
          placeholder="name"
          :value="user.name"
          @input="updateUser($event, 'name')"
        />
      </div>
      <div class="form-control">
        <label>Age</label>
        <input
          type="number"
          placeholder="18"
          :value="user.age"
          @input="updateUser($event, 'age')"
        />
      </div>
      <div class="form-control">
        <label>Where do you live?</label>
        <select :value="user.country" @change="updateUser($event, 'country')">
          <option
            v-for="country in countries"
            :value="country.currency"
            :key="country.currency"
          >
            {{ country.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InsuranceForm',
  computed: {
    ...mapGetters('insurance', ['countries', 'user']),
  },
  methods: {
    updateUser(event, field) {
      const user = { ...this.user }
      user[field] = event.target.value
      this.$store.commit('insurance/setUser', user)
    },
  },
}
</script>
