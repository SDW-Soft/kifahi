<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <!-- <a class="navbar-brand">{{ routeName }}</a> -->
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <!-- <li class="open">
            <a
              href="#"
              class="dropdown-toggle btn-magnify"
              data-toggle="dropdown"
            >
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li>
          <drop-down title="5 Notifications" icon="ti-bell">
            <li><a href="#">Notification 1</a></li>
            <li><a href="#">Notification 2</a></li>
            <li><a href="#">Notification 3</a></li>
            <li><a href="#">Notification 4</a></li>
            <li><a href="#">Another notification</a></li>
          </drop-down> -->
          <!-- <li>
            <button class="btn" @click="logout">
              <img
                class="w-7 h-7"
                src="~/assets/images/icons/vuesax-broken-info-circle@2x.png"
                alt=""
              />
            </button>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  data() {
    return {
      activeNotifications: false,
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      // this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    async logout() {
      this.$confirm("Êtes-vous sûr?").then(() => {
        try {
          this.$auth.logout({
            data: {
              refreshToken: this.$auth.strategies.local.refreshToken.get(),
            },
          });
          localStorage.removeItem("data");
          localStorage.removeItem("user");
          localStorage.removeItem("access_token");
          this.$router.push(this.localeLocation({ name: "login" }));
        } catch (e) {
          console.log(e.message);
        }
      });
    },
  },
};
</script>
<style></style>
