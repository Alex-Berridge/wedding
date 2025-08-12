<template>
  <el-container id="main">
    <el-row>
      <el-col :span="8"><img src="@/assets/poloroids.jpg"></el-col>
      <el-col :offset="1" :span="12">
        <el-row>You're invited!</el-row>
        <el-row>We would love for you to join us in celebrating our marriage and first year wedding anniversay!</el-row>
        <el-row>After 8 wonderful years together we wanted to get married, so in November 2024 we did! 
          And now one year later we can celebrate that with everyone we care about on 
          November 8th at <router-link to="/maps">The Lawn Club</router-link>. 
        </el-row>
        <el-row><img src="@/assets/yurt.jpg"></el-row>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default ({
  setup(){
    const url = '@/assets/poloroids.jpg';
    const url2 = '';
    return{
      image1: url,
      image2: url2
    }
  }
})
</script>

<style scoped>
img{
  padding:0;
  min-width: none;
  max-width:100%;
  object-fit: contain;
}

.el-row{
  padding:5px;
}
.el-row:last-child {
  margin-bottom:0;
}

.router-link{
  margin:0;
  padding:0;
}


</style>