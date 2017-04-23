<template lang="html">
  <div id="newsfeed">
    <h2 class="m-t-0 m-b-20">Latest Beeps</h2>
    <beeplist></beeplist>
  </div>
</template>

<script>
import BeepList from './BeepList.vue';

export default {
  name: 'newsfeed',
  components: {
    beeplist: BeepList
  }
}
</script>

<style scoped>
</style>
