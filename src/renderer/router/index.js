import Vue from "vue"
import Router from "vue-router"
import AuthGuard from "./auth-guard"

import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"

Vue.use(Router)

export default new Router({
	mode: "hash",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
			//  beforeEnter: AuthGuard
		},
		{
			path: "/login",
			name: "Login",
			component: Login,
		},
		//   {
		//     path: '/register',
		//     name: 'Signup',
		//     component: Signup
		//   },
		{
			path: "/profile",
			name: "Profile",
			component: Profile,
			// beforeEnter: AuthGuard
		},
		//   {
		//     path: '/chat/:id',
		//     name: 'Chat',
		//     component: Chat,
		//     props: true,
		//     beforeEnter: AuthGuard
		//   },
		//   {
		//     path: '/create',
		//     name: 'CreateChat',
		//     component: Create,
		//     beforeEnter: AuthGuard
		//   }
		{
			path: "*",
			name: "Login",
			component: Login,
		},
	],
})
