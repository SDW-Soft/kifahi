<template>
  <!-- Navbar -->
  <div class="bg-white">
    <nav :class="{ 'py-4 w-4/5': !isMobile }" class="flex relative h-20 m-auto">
      <!-- Left navbar links -->
      <ul class="navbar-nav flex gap-4 w-1/4 absolute left-0" v-if="!isMobile">
        <li class="nav-item d-none d-sm-inline-block">
          <select name="" id="" class="px-4 h-8 mt-1 text-md font-alex">
            <option value="">عربية</option>
            <!-- <option value="">عربية</option>
            <option value="">عربية</option> -->
          </select>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link
            to="/"
            class="nav-link h-10 flex gap-2 px-4 bg-success10000 text-white rounded"
          >
            <svg
              class="mt-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.53698 13L7.32995 13.0009C6.91786 14.1656 5.80686 15 4.50098 15C2.84412 15 1.50098 13.6569 1.50098 12C1.50098 10.3431 2.84412 9 4.50098 9C5.80723 9 6.91849 9.83485 7.3303 11.0001L9.53698 11L13.001 5L16.1716 5.00009C16.5835 3.83485 17.6947 3 19.001 3C20.6578 3 22.001 4.34315 22.001 6C22.001 7.65685 20.6578 9 19.001 9C17.6951 9 16.5841 8.16562 16.172 7.0009L14.155 7L11.269 11.999L14.156 17L16.1716 17.0001C16.5835 15.8349 17.6947 15 19.001 15C20.6578 15 22.001 16.3431 22.001 18C22.001 19.6569 20.6578 21 19.001 21C17.6951 21 16.5841 20.1656 16.172 19.0009L13.001 19L9.53698 13ZM19.001 17C18.4487 17 18.001 17.4477 18.001 18C18.001 18.5523 18.4487 19 19.001 19C19.5533 19 20.001 18.5523 20.001 18C20.001 17.4477 19.5533 17 19.001 17ZM4.50098 11C3.94869 11 3.50098 11.4477 3.50098 12C3.50098 12.5523 3.94869 13 4.50098 13C5.05326 13 5.50098 12.5523 5.50098 12C5.50098 11.4477 5.05326 11 4.50098 11ZM19.001 5C18.4487 5 18.001 5.44772 18.001 6C18.001 6.55228 18.4487 7 19.001 7C19.5533 7 20.001 6.55228 20.001 6C20.001 5.44772 19.5533 5 19.001 5Z"
                fill="white"
              />
            </svg>
            <p class="mt-2 text-md font-alex">شارك الفكرة</p>
          </nuxt-link>
        </li>
      </ul>
      <div
        class="cursor-pointer w-16 h-16 bg-blue-900 text-white"
        v-if="isMobile"
        @click="toggleSidebar"
      >
        <svg
          class="mx-auto mt-4"
          fill="#fff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="25px"
          height="25px"
          viewBox="0 0 124 124"
          xml:space="preserve"
        >
          <g>
            <path
              d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"
            />
            <path
              d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"
            />
            <path
              d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"
            />
          </g>
        </svg>
      </div>
      <nuxt-link
        :class="{ 'pt-3 mr-3': isMobile }"
        to="/"
        class="flex gap-2 font-alex"
      >
        <div class="w-10 h-10 logo text-white text-2xl text-center rounded">
          #
        </div>
        <p class="mt-2">كفاحي</p>
      </nuxt-link>
      <!-- Right navbar links -->
      <ul class="navbar-nav flex gap-4 w-2/4 mr-5 mt-2" v-if="!isMobile">
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" class="font-alex"> الرئيسية</nuxt-link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" class="font-alex"> شارك معنا</nuxt-link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" class="font-alex"> أبلغ عن أخطاء</nuxt-link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" class="font-alex"> اتصل بنا</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="w-full pb-6" v-if="isMobile && isSidebarOpen">
      <ul class="navbar-nav grid gap-6 w-full text-center text-black400">
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" class="font-alex"> الرئيسية</nuxt-link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" class="font-alex"> شارك معنا</nuxt-link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" class="font-alex"> أبلغ عن أخطاء</nuxt-link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <nuxt-link to="/" class="font-alex"> اتصل بنا</nuxt-link>
        </li>
      </ul>
      <div class="m-auto w-1/4">
        <select
          name=""
          id=""
          class="w-full mx-auto mt-6 px-4 h-8 text-md font-alex"
        >
          <option value="">عربية</option>
          <!-- <option value="">عربية</option>
            <option value="">عربية</option> -->
        </select>
      </div>
      <hr class="my-8" />
      <div class="w-5/12 m-auto mb-4">
        <nuxt-link
          to="/"
          class="nav-link h-10 flex gap-2 px-4 bg-success10000 text-white rounded"
        >
          <svg
            class="mt-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.53698 13L7.32995 13.0009C6.91786 14.1656 5.80686 15 4.50098 15C2.84412 15 1.50098 13.6569 1.50098 12C1.50098 10.3431 2.84412 9 4.50098 9C5.80723 9 6.91849 9.83485 7.3303 11.0001L9.53698 11L13.001 5L16.1716 5.00009C16.5835 3.83485 17.6947 3 19.001 3C20.6578 3 22.001 4.34315 22.001 6C22.001 7.65685 20.6578 9 19.001 9C17.6951 9 16.5841 8.16562 16.172 7.0009L14.155 7L11.269 11.999L14.156 17L16.1716 17.0001C16.5835 15.8349 17.6947 15 19.001 15C20.6578 15 22.001 16.3431 22.001 18C22.001 19.6569 20.6578 21 19.001 21C17.6951 21 16.5841 20.1656 16.172 19.0009L13.001 19L9.53698 13ZM19.001 17C18.4487 17 18.001 17.4477 18.001 18C18.001 18.5523 18.4487 19 19.001 19C19.5533 19 20.001 18.5523 20.001 18C20.001 17.4477 19.5533 17 19.001 17ZM4.50098 11C3.94869 11 3.50098 11.4477 3.50098 12C3.50098 12.5523 3.94869 13 4.50098 13C5.05326 13 5.50098 12.5523 5.50098 12C5.50098 11.4477 5.05326 11 4.50098 11ZM19.001 5C18.4487 5 18.001 5.44772 18.001 6C18.001 6.55228 18.4487 7 19.001 7C19.5533 7 20.001 6.55228 20.001 6C20.001 5.44772 19.5533 5 19.001 5Z"
              fill="white"
            />
          </svg>
          <p class="mt-2 text-md font-alex">شارك الفكرة</p>
        </nuxt-link>
      </div>
    </div>
  </div>
  <!-- /.navbar -->
</template>
<script>
import MobileDetect from "mobile-detect";
// import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    return {
      isSidebarOpen: false,
      display: false,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    };
  },
  async mounted() {
    this.fetchDeviceType();
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    fetchDeviceType() {
      const userAgent = navigator.userAgent;
      const md = new MobileDetect(userAgent);
      this.isMobile = md.phone() !== null || md.mobile() === "UnknownMobile";
      this.isTablet = md.tablet() !== null || md.mobile() === "UnknownTablet";
      this.isDesktop = !this.isMobile && !this.isTablet;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
  component: {
    // notifications,
  },
};
</script>

<style scoped>
.font-alex {
  /* FontsArabic/Regular 16 */
  font-family: Alexandria, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.logo {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(255, 0, 31, 0.49),
    rgba(21, 191, 140, 1)
  );
}
</style>
