<template>
  <div id="settings">
    <h2 class="m-t-0">Settings</h2>
    <form class="form-horizontal">
      <div class="form-group valign">
        <label class="col-sm-2 control-label">Avatar</label>
        <div class="col-sm-10 text-center">
          <img :src="user.avatar" class="img-circle"><br>
          <div class="fileUpload btn btn-default">
            <span>Select a file</span>
            <input type="file" class="upload" @change="fileChanged" id="imageFile">
          </div>
          <button type="button" class="btn btn-primary" @click="uploadAvatar" v-show="image">Update</button>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">Username</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="user.username">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">About</label>
        <div class="col-sm-10">
          <textarea class="form-control" rows="10" v-model="user.about"></textarea>
        </div>
      </div>
      <p class="text-right">
        <button type="button" class="btn btn-primary" @click="updateSettings">Update Info</button>
      </p>
    </form>
  </div>
</template>

<script>
  import clone from 'lodash/clone';

  export default {
    name: 'settings',
    data: function() {
      return {
        user: {}
      }
    },
    methods: {
      fileChanged: function(e) {

      },
      uploadAvatar: function() {

      },
      updateSettings: function() {

      }
    }
  }
</script>

<style scoped>
#settings img {
  max-width: 200px;
  display: inline-block;
  margin-bottom: 20px;
}

.fileUpload {
  position: relative;
  overflow: hidden;
  margin: 10px;
}
.fileUpload input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
}

</style>
