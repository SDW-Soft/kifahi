<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4" v-if="load">
    <!-- Brand Logo -->

    <a href="index3.html" class="brand-link">
      <img
        src="dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">MGT Mutuelle Dash</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            v-if="data.avatar"
            :src="data.avatar"
            class="img-circle elevation-2"
            alt="User Image"
          />
          <img
            v-else
            src="dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ data.name }}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <nuxt-link to="/home" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt" />
              {{ $t("Dashboard") }}</nuxt-link
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Dossier<i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none">
              <li class="nav-item">
                <nuxt-link to="/users" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Utilisateurs") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Déblocaque") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Paramétrage") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Nom de serveur") }}</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Données de base<i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none">
              <li class="nav-item">
                <nuxt-link to="/section" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Mise à jour Section") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/sector" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Mise à jour Secteur") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/wilaya" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Mise à jour Wilaya") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/hospital" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Mise à jour Hopitaux") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/cnas" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Mise à jour Agence CNAS") }}</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Adhérent<i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none">
              <li class="nav-item">
                <nuxt-link to="/member" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Fiche Adhérent") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/cotisation" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Cotisations") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/carte" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Cartes") }}</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Cotisations<i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none">
              <li class="nav-item">
                <nuxt-link to="/majdepot" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Saidi et Maj des dépots") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/traitment" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Traitement des dépots") }}</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Préstations<i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none">
              <li class="nav-item">
                <nuxt-link to="/presmajdepot" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Gestion et MAJ des dépot") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/majvolet" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Gestion et MAJ des volets") }}</nuxt-link
                >
              </li>
              <hr>
              <li class="nav-item">
                <nuxt-link to="/majcnas" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Dépot CNAS") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/traitmentcnas" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Traitement dépot CNAS") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/preparationcnas" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Préparation dépot CNAS") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/impressionbordereau" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Impression Bordereau CNAS") }}</nuxt-link
                >
              </li>
              <hr>
              <li class="nav-item">
                <nuxt-link to="/rejetscnas" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Traitement rejets CNAS") }}</nuxt-link
                >
              </li>
              <hr>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Preparation des dépots") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Impression Décomptes") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Impression Bordereau") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Deverrouiller bordereau") }}</nuxt-link
                >
              </li>
              <hr>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Maj des Actes MGT") }}</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Radiations<i class="right fas fa-angle-left"></i></p>
            </a>
            <ul class="nav nav-treeview" style="display: none">
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Gestion des relances et radiations") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Radiations FSD") }}</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/home" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt" />
                  {{ $t("Liste adhérent relancés et radiés") }}</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="access.notes">
            <nuxt-link to="/notes" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt" />
              {{ $t("Etats") }}</nuxt-link
            >
          </li>
          <li class="nav-item" v-if="access.notes">
            <nuxt-link to="/notes" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt" />
              {{ $t("Fenetre") }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      load: false,
      data: {},
      access: {
        quran: false,
        verses: false,
        schools: false,
        users: false,
        cheikhs: false,
        students: false,
        groups: false,
        reciters: false,
        competitions: false,
        notifications: false,
        homeworks: false,
        conversations: false,
        notes: false,
      },
    };
  },
  mounted() {
    this.load = true;
  },
  components: {},
};
</script>
