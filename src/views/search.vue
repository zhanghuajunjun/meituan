<template>
  <div>
    <search :location="city" :keyword="keyword" @send="sendData"></search>
    <div class="padd-tobo f-dir-mid" style="background:rgb(248,248,248)">
      <div class="crumlb">{{city}}美团>{{city}}{{keyword}}</div>
      <div class="filter-box">
        <div class="classf d-flex">
          <div class="lable">分类</div>
          <div class="allclass lable">全部</div>
          <div class="d-flex f-f-warp" style="width:800px;border-bottom:1px solid #eee;">
            <div v-for="(item,index) in menu" :key="index" class="menu_item">
              <div class="menu_title wh-text-over">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="classf d-flex">
          <div class="lable">区域</div>
          <div class="allclass lable">全部</div>
          <div class="d-flex f-f-warp" style="width:800px;border-bottom:1px solid #eee;">
            <div class="menu_item">推荐商圈</div>
            <div v-for="(item,index) in areas" :key="index" class="menu_item">
              <div class="wh-text-over">{{item.type}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="filter-box common-list">
        <div class="d-flex e">
          <div class="menu_item">智能推荐</div>
          <div class="menu_item">价格排行</div>
          <div class="menu_item">人气最高</div>
          <div class="menu_item">评级最高</div>
        </div>
        <div v-for="item in pois" :key="item.id" class="search_detail" @click="detail(item.name)">
          <div v-if="item.photos.length > 0">
            <img :src="item.photos[0].url" alt class="shop_img" />
          </div>
          <div v-else>
            <img src="../iamge/null.jpg" alt class="shop_img" />
          </div>
          <div>
            <div>{{item.name}}</div>
            <div class="d-flex" style="margin-top: 6px;">
              <el-rate
                v-model="item.biz_ext.rating"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}分"
              ></el-rate>
              <div
                v-if="item.biz_ext.rating>4.5"
                style="color:#666;font-size: 14px;"
                class="marg-lew"
              >非常好</div>
              <div
                v-else-if="item.biz_ext.rating<=4.5&&item.biz_ext.rating>4"
                style="color:#666;font-size: 14px;"
                class="marg-lew"
              >很好</div>
              <div
                v-else-if="item.biz_ext.rating<=4&&item.biz_ext.rating>3.5"
                style="color:#666;font-size: 14px;"
                class="marg-lew"
              >好</div>
              <div v-else style="color:#666;font-size: 14px;" class="marg-lew">一般</div>
            </div>
            <div style="color:#666;font-size:12px;margin-top: 6px;">
              <span v-if="item.business_area.length>0">{{item.business_area}}</span>
              <span v-else>{{item.adname}}</span>
              <span class="marg-lew" v-if="item.address.length !== 0">{{item.address}}</span>
            </div>
            <div
              style="color:#666;font-size:12px;margin-top: 6px;"
              v-if="item.biz_ext.cost.length !== 0"
            >人均￥{{item.biz_ext.cost}}</div>
            <div
              v-if="item.tel !== ''"
              style="color:#222;font-size:14px;margin-top: 6px;"
            >电话：{{item.tel}}</div>
          </div>
        </div>
      </div>
    </div>

    <div id="container"></div>
  </div>
</template>

<script>
import search from "../components/search/search";
export default {
  name: "",
  props: {},
  data() {
    return {
      city: "",
      keyword: "",
      menu: [],
      areas: [],
      pois: [],
    };
  },
  components: {
    search,
  },
  methods: {
    getMenuData() {
      this.$api
        .menu()
        .then((res) => {
          this.menu = res.data.menu;
        })
        .catch((err) => {});
    },
    getData() {
      this.$api
        .results(this.city, this.keyword)
        .then((res) => {
          console.log(res);
          res.data.pois.map((item) => {
            item.biz_ext.rating = Number(item.biz_ext.rating);
          });
          this.pois = res.data.pois;
        })
        .catch((err) => {});
    },
    sendData(data) {
      this.keyword = data;
      this.getData();
    },
    detail(name) {
      this.$router.push({
        path: "/products",
        query: { name: name, city: this.city },
      });
    },
  },
  mounted() {
    this.keyword = this.$route.query.keyword;
    let city = this.$route.query.city;
    this.city = city.slice(0, city.length - 1);
    this.getData();
    this.getMenuData();
    this.$api
      .crumbs(city)
      .then((res) => {
        this.areas = res.data.areas;
      })
      .catch((err) => {});

    // var map = new AMap.Map("container", {
    //   resizeEnable: true,
    // });
    var map = new AMap.Map("container", {
      resizeEnable: true,
    });
    // var placeSearch = new AMap.PlaceSearch({
    //   city: "beijing", // 兴趣点城市
    //   citylimit: true, //是否强制限制在设置的城市内搜索
    //   pageSize: 10, // 单页显示结果条数
    //   children: 0, //不展示子节点数据
    //   pageIndex: 1, //页码
    //   extensions: "base", //返回基本地址信息
    // });
    // //详情查询
    // placeSearch.getDetails("B000A83U0P", function (status, result) {
    //   if (status === "complete" && result.info === "OK") {
    //     placeSearch_CallBack(result);
    //   }
    // });
    // var infoWindow = new AMap.InfoWindow({
    //   autoMove: true,
    //   offset: { x: 0, y: -30 },
    // });
    // //回调函数
    // function placeSearch_CallBack(data) {
    //   var poiArr = data.poiList.pois;
    //   //添加marker
    //   var marker = new AMap.Marker({
    //     map: map,
    //     position: poiArr[0].location,
    //   });
    //   map.setCenter(marker.getPosition());
    //   infoWindow.setContent(createContent(poiArr[0]));
    //   infoWindow.open(map, marker.getPosition());
    // }
    // function createContent(poi) {
    //   //信息窗体内容
    //   var s = [];
    //   s.push("<b>名称：" + poi.name + "</b>");
    //   s.push("地址：" + poi.address);
    //   s.push("电话：" + poi.tel);
    //   s.push("类型：" + poi.type);
    //   return s.join("<br>");
    // }
    AMap.plugin("AMap.Geocoder", () => {
      var geocoder = new AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city: "成都",
      });
      var gps = [116.39, 39.9];
      AMap.convertFrom(gps, "gps", (status, result) => {
        if (result.info === "ok") {
          var lnglats = result.locations; // Array.<LngLat>
          geocoder.getAddress(lnglats, (status, result) => {
            if (status === "complete" && result.info === "OK") {
              // result为对应的地理位置详细信息
              // this.result = result;
              console.log(result);
            }
            var infoWindow = new AMap.InfoWindow({
              autoMove: true,
              offset: { x: 0, y: -30 },
            });
              //添加marker
              var marker = new AMap.Marker({
                map: map,
                position: new AMap.LngLat(116.39, 39.9),
              });
              map.setCenter(marker.getPosition());
          });
        }
      });
    });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.crumlb {
  width: 960px;
  margin: 10px 0;
  color: #222;
  font-size: 12px;
}
.classf {
  padding: 15px 20px 0;
}
.menu_item {
  width: 80px;
  padding: 5px 0;
  font-size: 14px;
  color: #333;
}
.lable {
  font-size: 14px;
  color: #333;
  width: 90px;
}
.allclass {
  text-align: center;
  width: 60px;
  height: 22px;
  background: #ffec00;
  padding: 0 10px;
  border-radius: 22px;
  margin-right: 30px;
}
.filter-box {
  width: 960px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background: white;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.common-list {
  width: 920px;
  padding: 15px 20px 0;
  padding-bottom: 0;
}
.e {
  padding-bottom: 6px;
  border-bottom: 1px solid #eeeeee;
}
.search_detail {
  width: 920px;
  padding: 15px 0;
  display: flex;
  border-bottom: 1px solid #eeeeee;
}
.shop_img {
  width: 220px;
  height: 125px;
  margin-right: 20px;
}
#container {
  width: 400px;
  height: 180px;
}
</style>