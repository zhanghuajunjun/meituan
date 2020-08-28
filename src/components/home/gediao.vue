<template>
  <div class="flex-j-c">
    <div class="box">
      <div class="nav flex-a-c">
        <div class="nav_title">有格调</div>
        <div class="nav_tab" @mouseenter="all">
          <div>全部</div>
          <div class="aaa" :class="{'active':current==0}"></div>
        </div>
        <div class="nav_tab" @mouseenter="food">
          <div>约会聚餐</div>
          <div class="aaa" :class="{'active':current==1}"></div>
        </div>
        <div class="nav_tab" @mouseenter="spa">
          <div>丽人spa</div>
          <div class="aaa" :class="{'active':current==2}"></div>
        </div>
        <div class="nav_tab" @mouseenter="video">
          <div>电影演出</div>
          <div class="aaa" :class="{'active':current==3}"></div>
        </div>
        <div class="nav_tab" @mouseenter="travel">
          <div>品质出游</div>
          <div class="aaa" :class="{'active':current==4}"></div>
        </div>
      </div>
      <div class="detail">
        <div
          v-for="(item,index) in pois"
          :key="index"
          style="margin-bottom: 20px;"
          :class="{'mar':(index+1)%3===0}"
        >
          <div v-if="item.photos.length > 0">
            <img :src="item.photos[0].url" alt class="img" />
          </div>
          <div v-else>
            <img src="../../iamge/null.jpg" alt class="img" />
          </div>
          <div>{{item.name}}</div>
          <div class="produce wh-text-over">{{item.type}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    positions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      name: "景点",
      current: "0",
      pois: [],
    };
  },
  components: {},
  methods: {
    all() {
      if (this.name !== "景点") {
        this.current = "0";
        this.name = "景点";
        this.getData();
      }
    },
    food() {
      if (this.name !== "美食") {
        this.current = "1";
        this.name = "美食";
        this.getData();
      }
    },
    spa() {
      if (this.name !== "丽人") {
        this.current = "2";
        this.name = "丽人";
        this.getData();
      }
    },
    video() {
      if (this.name !== "电影") {
        this.current = "3";
        this.name = "电影";
        this.getData();
      }
    },
    travel() {
      if (this.name !== "旅游") {
        this.current = "4";
        this.name = "旅游";
        this.getData();
      }
    },
    getData() {
      this.$api
        .results(this.positions.city, this.name)
        .then((res) => {
          this.pois = res.data.pois.splice(0, 6);
        })
        .catch((err) => {});
    },
  },
  mounted() {
   
      this.getData();
    
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  width: 960px;
}
.nav {
  width: 920px;
  height: 40px;
  background: linear-gradient(
      to right,
      rgb(243, 182, 74) 2%,
      rgb(242, 197, 69) 97%
    )
    rgb(243, 182, 74);
  margin-top: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 20px;
}
.nav_title {
  font-size: 18px;
  color: white;
  margin-right: 20px;
}
.nav_tab {
  font-size: 14px;
  color: white;
  margin-right: 15px;
  position: relative;
}
.aaa {
  visibility: hidden;
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #fff;
  content: " ";
  display: block;
  width: 2px;
  height: 0;
  top: 33px;
  left: 0px;
  bottom: 0;
  right: 0;
  margin: auto;
}
.active {
  visibility: visible;
}
.detail {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.img {
  width: 293px;
  height: 200px;
  margin-bottom: 10px;
}
.produce {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
  width: 293px;
}
// .mar {
//   margin-right: 20px;
// }
</style>