<template lang="html">
  <div id="sidebar" class="text-center">
    <h4 class="text-center">Username</h4>
    <hr>
    <div class="row">
        <div class="col-sm-6">
            <a href="#" class="btn btn-block btn-default"><i class="fa fa-user"></i> Profile</a>
        </div>
        <div class="col-sm-6">
            <a href="#" class="btn btn-block btn-default"><i class="fa fa-newspaper-o"></i> Feed</a>
        </div>
    </div>

    <div class="beepNowWrap m-t-20 m-b-20">
        <textarea class="form-control" rows="10" placeholder="Start writing your beep here!" maxlength="320"></textarea>
        <p class="text-muted">320 characters remaining</p>
        <p class="text-center no-margin"><button class="btn btn-primary">Beep Now!</button></p>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <p class="text-center no-margin">
                <a href="#"><i class="fa fa-cog"></i> Settings</a>
            </p>
        </div>
        <div class="col-sm-6">
            <p class="text-center no-margin">
                <a href="#"><i class="fa fa-power-off"></i> Logout</a>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

<style scoped>
  #sidebar {
    background: #fff;
    padding: 20px;
    border-radius: 6px;
  }

  .beepNowWrap {
    background: #f0f0f0;
    margin: 20px -20px;
    padding: 20px;
  }

  .beepNowWrap textarea {
    background: transparent;
    border: transparent;
    box-shadow: none;
    resize: vertical;
  }
</style>
