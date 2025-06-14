<template>
  <i>{{ message }}</i>
  <i>{{ message2 }}</i>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: String,
    message2: String  }
}
</script>