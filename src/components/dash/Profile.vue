<template lang="html">
  <div id="profile">
    <div>
      <p class="text-center"><img :src="user.avatar" class="img-circle"></p>
      <h2 class="text-center">@{{user.username}}</h2>
      <hr>
      <p class="text-center m-b-20">{{user.about}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    created: function() {
      this.getUser();
    },
    data: function() {
      return {
        user: {}
      }
    },
    methods: {
      getUser: function() {
        this.$http.get('/users/' + this.$route.params.username)
            .then(function(res) {
              this.user = res.body;
            })
      }
    }
  }
</script>

<style scoped>
  #profile img {
    max-width: 200px;
  }
</style>
