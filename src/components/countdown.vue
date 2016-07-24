<template>
  <div class="countdown">
    <input-after color="rgba(0,0,0,0.3)" :content="msg" ></input-after>
  </div>
</template>
<script>
import InputAfter from './InputAfter'
import { changeSentState } from '../store/actions'
export default {
  components: {
    InputAfter
  },
  data() {
    return {
      countdown: 60
    }
  },
  ready(){
    let self = this
    let timer = null
    function countdown() {
      if (timer !== null) {
        clearTimeout(timer)
      }
      if (self.countdown > 0) {
        self.countdown--
        timer = setTimeout(countdown, 1000)
      }
      else {
        self.changeSentState(false)
      }
    }
    countdown()
  },
  vuex: {
    actions: {
      changeSentState
    }
  },
  computed: {
    msg() {
      return '已发送...' + this.countdown + '秒'
    }
  }
}
</script>
<style>
.countdown {
  color: rgba(0,0,0,0.3);
}
</style>
