<template>
  <div class="login">
    <logo></logo>
    <text-input name="输入手机号码"></text-input>
    <text-input name="输入验证码"></text-input>
  </div>
</template>
<script>
import Logo from './components/Logo'
import TextInput from './components/TextInput'
export default {
  components: {
    Logo,
    TextInput
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
    padding: 0px 60px;
    width: 100vw;
    height: 100vh;
    background-image: url('assets/3X/bg_login.jpg');
    background-repeat:no-repeat;
    background-position: 10%;
    background-size: cover;
}
</style>
