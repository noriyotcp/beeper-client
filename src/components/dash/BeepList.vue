<template lang="html">
  <div>
    <div id="beepsWrapper">
      <beep v-for="beep in beeps" :beep="beep" :key="beep.id"></beep>
    </div>
    <div id="beepsLoading" class="text-center" v-show="this.beepsLoading">
      <i class="fa fa-spin fa-spinner"></i>
    </div>
  </div>

</template>

<script>
  import Beep from './Beep.vue';

  export default {
    name: 'BeepList',
    components: {
      beep: Beep
    },
    created: function() {
      this.beeps = [];
      this.getBeeps(1);

      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    props: {
      endpoint: { type: String, default: "/beeps" }
    },
    data: function() {
      return {
        beeps: [],
        page: {},
        beepsLoading: false
      }
    },
    methods: {
      getBeeps: function(page) {
        this.beepsLoading = true;
        this.$http.get(this.endpoint + '?page=' + page)
            .then(function(res) {
              this.beeps = this.beeps.concat(res.body.data);
              this.page  = { current: res.body.current_page, last: res.body.last_page };
              this.beepsLoading = false;
            })
            .catch(function() {
              this.beepsLoading = false;
            })
      },
      handleScroll: function() {
        if (document.body.scrollHeight - window.innerHeight - document.body.scrollTop == 0) {
          if (this.page.current < this.page.last) {
            this.getBeeps(this.page.current + 1);
          }
        }
      }
    }
  }
</script>

<style scoped>
#beepsWrapper {
    margin: 0 -20px;
}

#beepsLoading {
  padding: 40px;
}

#beepsLoading i {
  font-size: 40px;
}
</style>
