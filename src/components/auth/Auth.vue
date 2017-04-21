<template lang="html">
  <div id="auth">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4 authForm">
          <h2 class="text-center">Beeper</h2>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth"
}
</script>

<style lang="css">
</style>
