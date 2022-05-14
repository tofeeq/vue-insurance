import Vue from 'vue'
import * as CONSTANTS from '@/constants'

Vue.mixin({
  created() {
    this.CONST = CONSTANTS
  },
})
