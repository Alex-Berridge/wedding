<template>
    <nav>
      <i>
        <el-row class='navElement'><router-link to="/">Home</router-link></el-row>
        <el-row class='navElement'><router-link to="/details">Details</router-link></el-row>
        <el-row class='navElement'><router-link to="/maps">The Lawn Club</router-link></el-row>
        <el-row class='navElement'><router-link to="/guide">Guide</router-link></el-row>
        <el-row class='navElement'><router-link to="/gifts">Wedding Gifts</router-link></el-row>
        <el-row class='navElement'><router-link to="/invite">The Wedding Post</router-link></el-row>
      </i>
    </nav>
</template>

<script>
</script>

<style scoped>
nav a {
  font-weight: bold;
  color: rgb(240, 231, 248);
}

nav a.router-link-exact-active {
  color: #15804f;
  font-size:larger
}

.navElement{
  padding:20px;
  font-size:large
}

</style>