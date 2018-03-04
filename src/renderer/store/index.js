import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: user,
    shared: shared
  }
})
// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as firebase from 'firebase'

// import AuthModule from './AuthModule'
// import ChatModule from './ChatModule'
// import shared from './shared'

// Vue.use(Vuex)

// export const store = new Vuex.Store({
//   modules: {
//     auth: AuthModule,
//     chat: ChatModule,
//     shared: shared
//   },
//   state: {
//     loading: false,
//     error: null,
//     onlineUsers: []
//   },
//   mutations: {
//     setLoading (state, payload) {
//       state.loading = payload
//     },
//     setError (state, payload) {
//       state.error = payload
//     },
//     clearError (state) {
//       state.error = null
//     },
//     setOnlineUsers (state, payload) {
//       state.onlineUsers = payload
//     }
//   },
//   actions: {
//     loadOnlineUsers ({commit}) {
//       firebase.database().ref('presence').on('value', function (snapshot) {
//         let result = []
//         result[0] = snapshot.numChildren()
//         result[1] = snapshot.val()
//         commit('setOnlineUsers', result)
//       })
//     },
//     clearError ({commit}) {
//       commit('clearError')
//     }
//   },
//   getters: {
//     loading (state) {
//       return state.loading
//     },
//     error (state) {
//       return state.error
//     },
//     onlineUsers (state) {
//       return state.onlineUsers
//     }
//   }
// })