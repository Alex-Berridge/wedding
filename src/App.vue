<template>
  <app-header class="mainElement"/>
  <navigation class="mainElement" />
  <router-view/> <!-- content view from the current view in question-->
  <app-footer class="mainElement" 
    message="We're so happy for you to attend our wedding and we'll see you soon!" 
    message2="If you have any queries, whatsapp us on 07957 774 317"/>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
import nav from "@/components/nav.vue";

export default ({
  components: {
    appappheader: header,
    appFooter: footer,
    navigation: nav
  },
  setup() {
    const router = useRouter();
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

router-view {
  border-style: dashed;
}
</style>
