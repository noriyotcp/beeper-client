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

<style scoped>
  #auth {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .authForm {
    background: #fff;
    padding-bottom: 15px;
    padding-top: 10px;
    border-radius: 10px;
  }
</style>
