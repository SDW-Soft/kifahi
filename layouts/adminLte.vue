<template>
  <div class="bg-mainbg" dir="rtl">
    <NavBar />
    <!-- <SideBar v-if="load == true" /> -->
    <nuxt />
    <!-- <Footer v-if="load == true" /> -->
  </div>
</template>

<script>
import NavBar from "../components/pages/NavBar";
import SideBar from "../components/pages/SideBar";
import Footer from "../components/pages/Footer";
export default {
  data() {
    return {
      name: null,
      load: true,
      token: null,
    };
  },
  // created() {
  //   this.$watch(this.getAuthState, this.handleAuthStateChange)
  // },
  mounted() {
    

  },
  methods: {
  },
  components: {
    NavBar,
    SideBar,
    Footer,
  },
};
</script>
