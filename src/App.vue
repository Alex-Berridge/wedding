<template>
<!-- <el-col :span="20" class="dev">
  <el-row>
    <i>This page is under development, be with you soon!</i><br/>
  </el-row>
  <br/>
  <el-row>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.383522124856!2d-2.2544920230110725!3d53.47947686475358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1dd2d68e415%3A0x3d100bb9c3c15c50!2sThe%20Lawn%20Club!5e0!3m2!1sen!2suk!4v1746363596015!5m2!1sen!2suk" 
    width="600" height="450" 
    style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </el-row>
  
   <img style="width:200px;" src="../src/assets/yurt.jpg" alt="Image of Frances and Alex">
  
</el-col> -->

  <el-row>
    <appappheader class="mainElement"/>
  </el-row>
  <el-row>
    

    <navigation class="mainElement" />
    <router-view/> <!-- content view from the current view in question-->
    <appFooter class="mainElement"  
      message="We're so happy for you to attend our wedding and we'll see you soon!" 
      message2="If you have any queries, whatsapp us on 07957 774 317"/>
  </el-row>
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
    appappheader: header,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

router-view {
  border-style: dashed;
  border-color:red;
}

body {
  background-color:blueviolet;
  align-content: center;
}

.dev{
  color:white;
}

img{
  width: fit-content;
}



</style>

