<template>
  <div class="box">
    <top :positions="positions"></top>
    <div class="cent">
      <mid></mid>
    </div>
    <div class="cent">
      <gediao :positions="positions"></gediao>
    </div>
  </div>
</template>

<script>
import top from "../components/home/top";
import mid from "../components/home/mid";
import gediao from "../components/home/gediao";
export default {
  name: "",
  props: {},
  data() {
    return { positions: {}};
  },
  components: {
    top,
    mid,
    gediao,
  },
  methods: {},
  mounted() {
    this.$api
      .position()
      .then((res) => {
        this.positions = JSON.parse(res.data);
      })
      .catch((err) => {});
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  background: rgb(248, 248, 248);
}
.cent {
  display: flex;
  justify-content: center;
}
</style>
