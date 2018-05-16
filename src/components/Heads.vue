<template>
    <header>
      <!-- <slot>小野猫</slot> -->
        <span><img src="../../static/images/logo.png" alt=""></span>
        <input type="text" placeholder="搜索目的地/攻略/游记">
        <a href="https://passport.mafengwo.cn/">登录</a>
    </header>
</template>

<script>
export default {
  name: "Heads",
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
header {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
header > span {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
header > input {
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  outline: none;
}
header > a {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: orange;
}
</style>
