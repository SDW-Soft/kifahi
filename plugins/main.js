// import Vue from 'vue'
// import VueConfirmDialog from 'vue-confirm-dialog'

// Vue.use(VueConfirmDialog)
// Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert";
import VueSocialSharing from 'vue-social-sharing'
import ToggleButton from 'vue-js-toggle-button'
import VueAnalytics from 'vue-analytics'
import VueFullscreen from 'vue-fullscreen'

// import Vue3EasyDataTable from 'vue3-easy-data-table';
// import 'vue3-easy-data-table/dist/style.css';

Vue.use(VueAnalytics, {
  id: 'G-1J0NP3PJ3X',
  checkDuplicatedScript: true
})
Vue.use(ToggleButton)
Vue.use(VueSimpleAlert)
Vue.use(VueSocialSharing)
// app.component('EasyDataTable', Vue3EasyDataTable)


// import Vue from 'vue'
import VueHtml2pdf from 'vue-html2pdf'
Vue.use(VueHtml2pdf)


import Chart from 'chart.js';
import VueChartJS from 'vue-chartjs';

Vue.use(VueChartJS);

