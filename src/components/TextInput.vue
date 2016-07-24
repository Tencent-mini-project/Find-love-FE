<template>
  <div class="text-input">
    <input placeholder="{{name}}"  unselectable="on" />
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      name: String
    }
  }
</script>
<style>
.text-input {
  display: flex;
  align-items:center;
  position: relative;
  box-sizing: border-box;
  height: 50px;
  border-bottom: 1px solid #00bea0;
  font-size: 18px;
  font-weight: 100;
}
.text-input input {
  font-size: 18px;
  color: #00bea0;
  background-color: rgba(0,0,0,0);
  border: 0px;
  outline: 0px;
}
.text-input input:placeholder {
  color: rgba(0,0,0,0.3);
}
.text-input input:-moz-placeholder {
  color: rgba(0,0,0,0.3);
}
.text-input input::-webkit-input-placeholder {
   color: rgba(0,0,0,0.3);
}
.text-input input:-ms-input-placeholder {
  color: rgba(0,0,0,0.3);
}
</style>
