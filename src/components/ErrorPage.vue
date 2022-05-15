<template>
  <div class="container">
    <h1>Ooops!</h1>
    <p v-html="error"></p>
    <div class="container">
      <router-link to="/"><button class="default">OK :(</button></router-link>
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
}
</script>
