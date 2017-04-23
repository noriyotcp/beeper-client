<template lang="html">
  <div id="dashWrap">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-md-offset-1 col-sm-5">
          <sidebar></sidebar>
        </div>

        <div class="col-md-7 col-sm-7 mainView">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue';

  export default {
    name: 'dashboard',
    components: {
      sidebar: Sidebar
    },
    created: function() {
      if (this.$auth.loggedIn()) {
        this.$http.get('/users/me')
            .then(function(res) {
              this.$store.commit('setCurrentUser', res.body);
            })
            .catch(function(res) {
              this.$store.commit('clearCurrentUser');
            })
      } else {
        this.$store.commit('clearCurrentUser');
      }
    }
  }
</script>

<style scoped>
#dashWrap {
  min-height: 100%;
  padding-top: 50px;
  background: #42275a; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #42275a , #734b6d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #42275a , #734b6d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.mainView {
  background: #fff;
  border-radius: 6px;
  padding: 20px;
}
</style>
