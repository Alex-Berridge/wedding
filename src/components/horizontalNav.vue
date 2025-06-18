<template>
    <nav>
        <i>
        <el-row  justify="space-evenly"> 
            <el-row class="row-bg" justify="space-evenly">
                <el-col :span="6">
                    <router-link to="/">Home</router-link>
                </el-col>
                <el-col :span="6">
                    <router-link to="/details">Details</router-link>
                </el-col>
                <el-col :span="6">
                    <router-link to="/maps">The Lawn Club</router-link>
                </el-col>
            </el-row>
            <br><br>
            <el-row class="row-bg" justify="space-evenly">
                <el-col :span="6">
                    <router-link to="/guide">Guide</router-link>
                </el-col>
                <el-col :span="6">
                    <router-link to="/gifts">Wedding Gifts</router-link>
                </el-col>
                <el-col :span="6">
                    <router-link to="/invite">The Wedding Post</router-link>
                </el-col>
            </el-row>
        </el-row>
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