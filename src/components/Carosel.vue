<template>
<div class="slide" @mouseover="stop()" @mouseout="move()">
    <div class="slideshow">
        <ul>
            <li v-for="(img, index) in imgArray" v-show="index===flag" :key="index">
                <img :src="img" alt="">
            </li>
        </ul>
    </div>
    <div class="bar">
        <span v-for="(item, index) in imgArray" :class="{active: index===flag}" @click="change(index)" :key="index"></span>
    </div>
</div>
</template>

<script>
export default {
  name: "Carosel",
  data() {
    return {
      timer: null,
      flag: 0,
      imgArray: [
        "../../static/images/1.jpeg",
        "../../static/images/2.jpeg",
        "../../static/images/3.jpeg"
      ]
    };
  },
  methods: {
    autoPlay() {
      this.flag++;
      if (this.flag === this.imgArray.length) {
        this.flag = 0;
      }
    },
    play() {
      this.timer = setInterval(this.autoPlay, 1500);
    },
    change(index) {
      this.flag = index;
    },
    stop(){
        clearInterval(this.timer);
    },
    move(){
        this.timer = setInterval(this.autoPlay, 1500);
    }
  },
  created() {
    this.play();
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.slide {
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
}
.slideshow {
  width: 100%;
  height: auto;
}
.slideshow ul li {
  position: absolute;
}
.slideshow ul li>img {
  width: 100%;
  height: auto;
}
.bar{
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.bar>span{
  width: 40px;
  height: 5px;
  background: white;
  display: inline-block;
}
.active {
  background: orange !important;
}
</style>
