import Vue from "vue"
import axios from "axios"

import App from "./App"
import router from "./router"
import { store } from "./store"

import firebase from "firebase"
import firebaseui from "firebaseui"

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "ionicons/dist/css/ionicons.min.css"
import "admin-lte/dist/css/AdminLTE.min.css"
import "admin-lte/dist/css/skins/skin-blue.min.css"
console.log(router)
router
window.jQuery = window.$ = jQuery
require("bootstrap/dist/js/bootstrap.min")
require("admin-lte")

const config = {
	apiKey: "AIzaSyDdspiJ0VAnGLeyRziofRCSld1bpBoms7E",
	authDomain: "andrewsadmin.firebaseapp.com",
	databaseURL: "https://andrewsadmin.firebaseio.com",
	projectId: "andrewsadmin",
	storageBucket: "andrewsadmin.appspot.com",
	messagingSenderId: "734746045873",
}
firebase.initializeApp(config)

if (!process.env.IS_WEB) Vue.use(require("vue-electron"))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	components: { App },
	router,
	store,
	template: "<App/>",
}).$mount("#app")
