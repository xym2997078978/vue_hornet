<template>
  <div class="nav">
      <a href="#" v-for="(item, index) in msg" :key="index">
          <img :src="item.url" alt="">
          <span>{{item.describe}}</span>
      </a>
  </div>
</template>

<script>
export default {
    name: 'navComponent',
    props: ['data'],
    data(){
        return{
            msg: [
                {
                    url: '../../static/images/nav/1.png',
                    describe: '找攻略'
                },
                {
                    url: '../../static/images/nav/2.png',
                    describe: '看游记'
                },
                {
                    url: '../../static/images/nav/3.png',
                    describe: '问达人'
                },
                {
                    url: '../../static/images/nav/4.png',
                    describe: '结伴'
                },
                {
                    url: '../../static/images/nav/5.png',
                    describe: '酒店'
                },
                {
                    url: '../../static/images/nav/6.png',
                    describe: '旅行商城'
                },
                {
                    url: '../../static/images/nav/7.png',
                    describe: '机票'
                },
                {
                    url: '../../static/images/nav/8.png',
                    describe: '当地玩乐'
                }
            ]
        }
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.nav{
    width: 100%;
    height: 175px;
    background: #fff;
}
.nav>a{
    width: 25%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    padding-top: 15px;
    background: #fff;
}
.nav>a>img{
    width: 50%;
}
.nav>a>span{
    margin-top: 10px;
    font-size: 14px;
}
</style>
