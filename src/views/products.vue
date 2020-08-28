<template>
  <div>
    <products :location="city" :hot="hot"></products>
    <div class="padd-tobo f-dir-mid" style="background:rgb(248,248,248)">
      <div class="crumlb">{{city}}美团>{{city}}{{name}}</div>
      <div class="filter-box flex-j-sb">
        <div class="search_detail">
          <div>
            <div style="color:#666;font-size: 26px;">{{product.name}}</div>
            <div class="d-flex" style="margin-top: 6px;">
              <el-rate
                v-model="product.biz_ext.rating"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}分"
              ></el-rate>
              <div
                v-if="product.biz_ext.rating>4.5"
                style="color:#666;font-size: 14px;"
                class="marg-lew"
              >非常好</div>
              <div
                v-else-if="product.biz_ext.rating<=4.5&&product.biz_ext.rating>4"
                style="color:#666;font-size: 14px;"
                class="marg-lew"
              >很好</div>
              <div
                v-else-if="product.biz_ext.rating<=4&&product.biz_ext.rating>3.5"
                style="color:#666;font-size: 14px;"
                class="marg-lew"
              >好</div>
              <div v-else style="color:#666;font-size: 14px;" class="marg-lew">一般</div>
            </div>
            <div style="color:#666;font-size:14px;margin-top: 6px;">
              <span v-if="product.business_area.length>0">{{product.business_area}}</span>
              <span v-else>{{product.adname}}</span>
              <span class="marg-lew" v-if="product.address.length !== 0">{{product.address}}</span>
            </div>
            <div
              style="color:#666;font-size:14px;margin-top: 6px;"
              v-if="product.biz_ext.cost.length !== 0"
            >人均￥{{product.biz_ext.cost}}</div>
            <div
              v-if="product.tel !== ''"
              style="color:#222;font-size:14px;margin-top: 6px;"
            >电话：{{product.tel}}</div>
          </div>
        </div>
        <div id="container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../components/products/products";
export default {
  name: "",
  props: {},
  data() {
    return {
      name: "",
      city: "",
      hot: [],
      product: {},
      result: "",
    };
  },
  components: {
    products,
  },
  methods: {
    // 店铺详情
    getData() {
      this.$api
        .products(this.name, this.city)
        .then((res) => {
          console.log(res);
          res.data.product.biz_ext.rating = Number(
            res.data.product.biz_ext.rating
          );
          this.product = res.data.product;
          var map = new AMap.Map("container");
          AMap.plugin("AMap.Geocoder", () => {
            var geocoder = new AMap.Geocoder({
              // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
              city: this.city,
            });
            var gps = [res.data.product.exit_location];
            AMap.convertFrom(gps, "gps", (status, result) => {
              if (result.info === "ok") {
                var lnglats = result.locations; // Array.<LngLat>
                geocoder.getAddress(lnglat, (status, result) => {
                  if (status === "complete" && result.info === "OK") {
                    // result为对应的地理位置详细信息
                    this.result = result;
                  }
                });
              }
            });
          });
          console.log(this.result);
        })
        .catch((err) => {});
    },
    // 热门搜索
    getHotData() {
      this.$api
        .hotPlace(this.city)
        .then((res) => {
          let index = Math.floor(Math.random() * res.data.result.length - 4);
          this.hot = res.data.result.slice(index, index + 4);
        })
        .catch((err) => {});
    },
  },
  mounted() {
    this.city = this.$route.query.city;
    this.name = this.$route.query.name;
    this.getData();
    this.getHotData();
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
.filter-box {
  width: 960px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background: white;
  margin-bottom: 10px;
  padding: 20px;
}
.search_detail {
  width: 920px;
  padding: 15px 0;
  display: flex;
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