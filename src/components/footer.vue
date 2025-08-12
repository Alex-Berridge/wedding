<template>
  <el-row>
    <i>{{ message }}</i>
  </el-row>
  <el-row>
    <i>{{ message2 }}</i>
  </el-row>
  
</template>

<script>
export default {
  props: {
    message: String,
    message2: String  }
}
</script>