<template lang="html">
  <div>
    <h3 class="text-center">Login</h3>

    <input type="text" class="form-control m-b-15" placeholder="Username" v-model="user.username">
    <input type="password" class="form-control m-b-15" placeholder="Password" v-model="user.password">

    <hr>

    <button class="btn btn-lg btn-primary btn-block m-b-15"
      @click="login">Sign in</button>

    <p class="text-center">
      Don't have an account? <router-link to="/auth/register">Sign up!</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login: function() {
      this.$http.post("/auth", this.user)
        .then(function(res) {

        })
    }
  }
}
</script>

<style lang="css">
</style>
