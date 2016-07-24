<template>
  <div class="input-after">
    <div v-bind:style=" {color: color, fontSize: size} "> {{content}} </div>
  </div>
</template>
<script>

  export default {
    props: {
      size: String,
      color: String,
      content: [String, Number]
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
