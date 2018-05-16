<template>
    <div>
        <span class="content-span"> 〉推荐攻略〈 </span>
        <div class="content" v-for="(item, index) in msg" :key="index">
            <h5>{{item.title}}</h5>
            <dl>
                <dt>
                    <img :src="item.url" alt="">
                </dt>
                <dd>
                    <p class="item-ontent">{{item.content}}</p>
                    <p class="item-browse">{{item.browse}}</p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Content",
  data() {
    return {
      msg: null
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("/content").then(result => {
        this.msg = result.data;
      });
    }
  }
};
</script>

<style>
.content-span {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 0;
  font-size: 14px;
  color: #545454;
}
h5 {
  padding: 5px 0;
}
.content {
  padding: 10px;
  border-bottom: 1px solid #eee;
  background: #fff;
  position: relative;
}
.content dl {
  display: flex;
}
.content dl dt {
  flex: 2;
}
.content dl dt > img {
  width: 100%;
}
.content dl dd {
  flex: 4;
  padding-left: 10px;
  align-items: flex-start;
  font-size: 13px;
  line-height: 18px;
  color: #999;
}
.item-browse {
  position: absolute;
  bottom: 10px;
}
.item-ontent {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
}
</style>
