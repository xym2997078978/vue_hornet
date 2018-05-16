<template>
  <div class="wrap">
      <heads></heads>
      <section>
          <Carosel></Carosel>
          <NavComponent :data='data'></NavComponent>
          <Content></Content>
      </section>
  </div>
</template>

<script>
import Heads from "./Heads";
import Carosel from "./Carosel";
import NavComponent from "./NavComponent";
import Content from "./Content";
export default {
  name: "Home",
  data() {
    return {
      data: 666
    };
  },
  components: {
    Heads,
    Carosel,
    NavComponent,
    Content
  }
};
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
}
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  background: #eee;
}
</style>
