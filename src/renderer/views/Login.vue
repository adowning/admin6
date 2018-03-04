     <template>
            <div class="container">
                <div class="row vertical-offset-100">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">                                
                                <div class="row-fluid user-row">
                                    <img src="http://s11.postimg.org/7kzgji28v/logo_sm_2_mr_1.png" class="img-responsive" alt="Conxole Admin"/>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form accept-charset="UTF-8" role="form" class="form-signin"  v-if="login">
                                    <fieldset>
                                        <label class="panel-login">
                                            <div class="login_result"></div>
                                        </label>
                                        <input class="form-control" placeholder="Username" id="email" v-model="email" type="text">
                                        <input class="form-control"    name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password" required>
                                    </fieldset>
                                    <fieldset >
                      
                                        <br>
                                        <button class="btn btn-lg btn-success btn-block" @click="onSignin">Login</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
           
            </template>
<script>
export default {
	data() {
		return {
			email: "",
			password: "",
			login: true,
		}
	},
	computed: {
		user() {
			return this.$store.getters.user
		},
		error() {
			return this.$store.getters.error
		},
		loading() {
			return this.$store.getters.loading
		},
	},
	watch: {
		user(value) {
			if (value !== null && value !== undefined) {
				console.log("pushing to profiel")
				this.$router.push("/profile")
			}
		},
	},
	methods: {
		onSignin() {
			// this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
			this.$store.dispatch("signUserIn", {
				email: this.email,
				password: this.password,
			})
		},
		registerUser() {
			// this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
			this.$store.dispatch("registerUser", {
				email: "c@c.com",
				password: "asdfasdf",
				username: this.username,
				photoURL: this.photoURL,
			})
		},
		onDismissed() {
			this.$store.dispatch("clearError")
		},
	},
}
</script>
 <style scoped>
.form-signin input[type="text"] {
	margin-bottom: 5px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}
.form-signin input[type="password"] {
	margin-bottom: 10px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
.form-signin .form-control {
	position: relative;
	font-size: 16px;
	font-family: "Open Sans", Arial, Helvetica, sans-serif;
	height: auto;
	padding: 10px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.vertical-offset-100 {
	padding-top: 100px;
}
.img-responsive {
	display: block;
	max-width: 100%;
	height: auto;
	margin: auto;
}
.panel {
	margin-bottom: 20px;
	background-color: rgba(255, 255, 255, 0.75);
	border: 1px solid transparent;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>

