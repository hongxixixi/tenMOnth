<template>
    <div class="container">
      <div class='pic' ref='pic'></div>
      <span class="nav" v-bind:style="{width:len+'px'}" ></span>
      <span class="button">
        <button v-on:click='clickEvent("cut")' v-show='len'>punch</button>
        <button v-on:click='clickEvent("restart")'>restart</button>
      </span>
   </div>
</template>

<script>
export default {
  name: 'click',
  data(){
    return {
      len:400,
    }
  },
  methods:{
    clickEvent:function(str){
      if(str=='cut'){
        this.len-=20;
        this.$refs.pic.classList.add('click');
          setTimeout(() => {
          this.$refs.pic.classList.remove('click');
        },100)
      }
      else{
        this.len=400;
      }
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  width: 50%;
  height: 30%;
  background: grey;
  margin: 0 auto;
  text-align: center;
}
.pic{
  position: relative;
  background: url(../assets/bag.png)center no-repeat;
  width: 200px;
  height: 500px;
  margin: 0 auto;
}
.container .button{
  width: 100%;
  display: inline-block;
  text-align: center;
  padding: 10px 5px 50px;
}
span button{
  margin: 0 10px;
  height: 26px;
  border-radius: 3px;
}

.container .nav{
  display: inline-block;
  background: red;
  height: 26px;
  margin: 10px 0 0px 0;
}
.click{
  animation: click 100ms ease;
}

@keyframes click {
  0% {
    top:0;
  }
  50%{
    top:50px;
  }
  100%{
    top:0;
  }
}

</style>
