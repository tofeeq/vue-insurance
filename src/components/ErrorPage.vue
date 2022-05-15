<template>
  <div class="container">
    <h1>Oops!</h1>
    <p v-html="error"></p>
    <div class="container">
      <button @click="goback">Back</button>
      <router-link to="/"><button class="default">Home</button></router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ErrorPage',
  computed: {
    ...mapGetters('insurance', ['error']),
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
  },
}
</script>
