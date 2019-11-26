import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import axios from 'axios'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

axios.defaults.baseURL = "https://fora-todayilearned.firebaseio.com/"

var firebaseConfig = {
  apiKey: "AIzaSyA1TiWrx6mBY2P6A9EF_ge1r9O6vBG3vSM",
  authDomain: "fora-todayilearned.firebaseapp.com",
  databaseURL: "https://fora-todayilearned.firebaseio.com",
  projectId: "fora-todayilearned",
  storageBucket: "fora-todayilearned.appspot.com",
  messagingSenderId: "1022110819942",
  appId: "1:1022110819942:web:deb65a6c70a6900481afa7",
  measurementId: "G-3L03WFRZBX"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
