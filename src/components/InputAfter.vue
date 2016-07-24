<template>
  <div class="input-after" @click="changeSentState(true)">
    <div v-bind:style=" {color: color, fontSize: size} "> {{content}} </div>
  </div>
</template>
<script>
import { changeSentState } from '../store/actions'
export default {
  props: {
    size: String,
    color: String,
    content: [String, Number]
  },
  vuex: {
    actions: {
      changeSentState
    }
  }
}
</script>
<style>
.input-after {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
}
</style>
