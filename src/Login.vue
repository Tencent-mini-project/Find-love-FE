<template>
  <div class="login">
    <logo></logo>
    <text-input name="输入手机号码">
      <!--<input-after color="#00bea0"  :content="isSend"></input-after>-->
      <component :is="currentView" content="获取验证码" color="#00bea0"></component>
      <!--<count-down></count-down>-->
    </text-input>
    <text-input name="输入验证码"></text-input>
  </div>
</template>
<script>
import Logo from './components/Logo'
import TextInput from './components/TextInput'
import InputAfter from './components/InputAfter'
import CountDown from './components/CountDown'
export default {
  components: {
    TextInput,
    Logo,
    InputAfter,
    CountDown
  },
  vuex: {
    getters: {
      isSend: state => state.isSend
    }
  },
  computed: {
    currentView() {
      console.log(this.isSend)
      return this.isSend ? 'CountDown' : 'InputAfter'
    }
  }
}
</script>
<style>
body {
    border: 0px;
    margin: 0px;
}
.login {
    box-sizing: border-box;
    padding: 0px 30px;
    width: 100vw;
    height: 100vh;
    background-image: url('assets/3X/bg_login.jpg');
    background-repeat:no-repeat;
    background-position: 10%;
    background-size: cover;
}
</style>
