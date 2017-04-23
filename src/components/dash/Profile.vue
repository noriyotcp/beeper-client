<template lang="html">
  <div id="profile">
    <div>
      <p class="text-center"><img :src="user.avatar" class="img-circle"></p>
      <h2 class="text-center">@{{user.username}}</h2>
      <hr>
      <p class="text-center m-b-20">{{user.about}}</p>
      <beeplist :endpoint="'/users/' + $route.params.username + '/beeps'"></beeplist>
    </div>
  </div>
</template>

<script>
  // memo: using resolver, See '@': resolve('src') in build/webpack.base.conf.js
  import BeepList from '@/components/dash/BeepList.vue';

  export default {
    name: 'profile',
    components: {
      beeplist: BeepList
    },
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
