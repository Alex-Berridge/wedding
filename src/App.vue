<template>
  <el-container id="outside" >
    <el-aside id="navAside">
      <el-row>
        <navigation/>
      </el-row>
    </el-aside>
    <el-container style="flex:80%" id="content">
      <el-header height="100px" id="head"><appheader/></el-header>
      <el-main id="main"><router-view/></el-main>
      <el-footer><appFooter 
        message="We're so happy for you to attend our wedding and we'll see you soon!" 
        message2="If you have any queries, whatsapp us on 07547 768 463"
        /></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
import nav from "@/components/nav.vue";
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
    navigation: nav
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

#navAside{
  min-width:140px;
  max-width:180px;
  flex:35%;
  background-color: rgb(37,88,53);
  justify-items:center;
}

#head{
  font-display: right;
  padding-bottom: 60px;
  border-bottom: 3px dashed rgba(62, 8, 150, 0.118) ;
}

#content{
  align-items: center;

}

</style>

