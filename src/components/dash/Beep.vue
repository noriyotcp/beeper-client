<template lang="html">
  <div class="beep">
    <div class="row">
      <div class="col-xs-2 text-center" v-show="showUserInfo">
          <router-link :to="'/profile/'+beep.author.username">
              <img :src="beep.author.avatar" class="img-circle no-margin">
          </router-link>
      </div>
      <div class="col-xs-12">
        <router-link :to="'/profile/'+beep.author.username">@{{beep.author.username}}</router-link>
        <small class="text-muted">said:<br><br></small>
        <p :class="{
            small: beep.text.length >= 150,
            medium: beep.text.length <150 && beep.text.length > 50,
            big: beep.text.length <= 50
        }">
            {{beep.text}}
        </p>
      </div>
    </div>
    <div class="beepFooter">
      <button class="btn" @click="likeBeep" :class="[beep.liked ? 'btn-primary' : ' btn-default']">
        <i class="fa fa-heart" :class="[beep.liked ? 'fa-heart' : 'fa-heart-o']"></i>
          {{beep.likes}} like{{beep.likes != 1 ? 's' : ''}}
      </button>
      <strong class="pull-right">
        <i class="fa fa-calendar"></i> {{beepDate(beep.created_at)}}
        <i class="fa fa-clock-o"></i> {{beepTime(beep.created_at)}}
      </strong>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'beep',
    props: {
      beep: {},
      showUserInfo: { type: Boolean, default: true }
    },
    methods: {
      likeBeep: function() {
        this.$http.patch('/beeps/' + this.beep.id + '/like')
            .then(function(res) {
              if (this.beep.liked) {
                this.beep.likes--;
                this.beep.liked = false;
              } else {
                this.beep.likes++;
                this.beep.liked = true;
              }
            })
      },
      beepDate: function(timestamp) {
        return moment(timestamp*1000).format("DD-MM-YYYY");
      },
      beepTime: function(timestamp) {
        return moment(timestamp*1000).format("HH:mm");
      }
    }
  }
</script>

<style scoped>
.beep {
  background: #f0f0f0;
  border-bottom: 1px solid #d6d6d6;
  padding: 40px 20px 0px;
}

.beep p {
  margin: 0;
}

.beep img {
  max-width: 100%;
}

.beep .row {
  display: flex;
  align-items: center;
}

.small {
    font-size: 13px;
}

.medium {
  font-size: 18px
}

.big {
  font-size: 23px;
}

.beepFooter {
  margin: 40px -20px 0;
  background: #f8f8f8;
  color: #734b6d;
  padding: 10px 20px;
}

.beepFooter .btn-default {
  color: #734b6d;
}

.beepFooter .btn-primary {
  background: #734b6d;
}

.beepFooter strong {
  margin-top: 7px;
}
</style>
