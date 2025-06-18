<template>
  <el-container id="outside" >
    <el-row style="margin:0px,padding:0px;">
      <el-col id="navCol" :xs="0" :span="4" >
        <el-aside  id="navAside">
         <navigation/>
        </el-aside>
      </el-col>
      
      <el-col :span="20">
        <el-container style="flex:80%" id="content">
          <el-header id="head"><appheader/></el-header>
          <el-row id="fullNavCol">
          <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0"  :span="0">
            <horizontalNav id="fullNav"/>
          </el-col>
          </el-row>
          <el-main id="main"><router-view/></el-main>
          <el-footer><appFooter 
            message="We're so happy for you to attend our wedding and we'll see you soon!" 
            message2="If you have any queries, whatsapp us on 07547 768 463"
            /></el-footer>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
  
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
import nav from "@/components/nav.vue";
import horizontalNav from "@/components/horizontalNav.vue";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const yurt = '../src/assets/yurt.jpg';
export default ({
  components: {
    appheader: header,
    appFooter: footer,
    navigation: nav,
    horizontalNav: horizontalNav
  },
  setup() {
    const router = useRouter();
    return{
      zIndex:3000,
      size:'small'
    }
  },
})
</script>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow:hidden
}

body {
  margin:0;
  padding:0;
  background-color:rgb(240, 231, 248);  
}

#outside{
  min-height: 100vh;
}

#navCol{
  background-color: rgb(37,88,53);
}
#fullNavCol{
  background-color: rgb(37,88,53);
}

#navAside{
  justify-items:center;
  width:170px;
  margin:0px;
  padding:0px;
}

#fullNav{
  justify-items:center;
  margin:0px;
  padding:0px;
}

#head{
  font-display: right;
  border-bottom: 0px dashed rgba(62, 8, 150, 0.118) ;
  padding-bottom:100px;
}

#content{
  align-items: center;
}

@media (max-width:450px){
  #head{
    font-size:small;
    padding-bottom:130px;
  }
}@media (max-width:350px){
  #head{
    font-size: 12px;
    padding-bottom:170px;
  }
}

</style>

