<template>
  <div class="box">
    <div class="left pos-re">
      <div v-for="(item,index) in menu" :key="index">
        <div class="item ddd">
          <div class="flex-a-c">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#icon-${item.icon}`" />
            </svg>
            <div class="menu_title">{{item.name}}</div>
          </div>
          <div>
            <i class="iconfont icon-arrow-backimg iconfonts"></i>
          </div>
          <div class="pos-ab nav_detail">
            <div v-for="(item1,index1) in item.child" :key="index1">
              <div class="flex-j-sb aaa">
                <div style="font-size: 14px;">{{item1.title}}</div>
                <div style="font-size: 12px;color: #999999;">更多 ></div>
              </div>
              <div class="f-f-warp d-flex">
                <div v-for="(item2,index2) in item1.child" :key="index2">
                  <div
                    style="font-size: 12px;color: #999999;margin-right: 10px;margin-top: 10px;"
                    class="hover"
                  >{{item2}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="d-flex">
        <el-carousel height="240px" class="carousel" :interval="5000">
          <el-carousel-item v-for="(item,index) in swiperUrl" :key="index">
            <div>
              <img :src="item.url" alt class="swiper_img" />
            </div>
          </el-carousel-item>
        </el-carousel>
        <img
          src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
          alt
          class="img1"
        />
      </div>
      <div class="img d-flex">
        <img
          src="http://p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png"
          alt
          class="img2"
        />
        <img
          src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
          alt
          class="img3"
        />
        <img
          src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
          alt
          class="img4"
        />
      </div>
    </div>
    <div class="right">
      <div class="right-top f-dir-mid">
        <img
          src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
          alt
          class="avatar_img"
        />
        <div v-if="user ===''">
          <div style="text-align: center;">Hi,你好</div>
          <div class="btn cur" @click="register">注册</div>
          <div class="btn cur" @click="login">立即登录</div>
        </div>
        <div v-else>
          <div style="text-align: center;">{{user}}</div>
          <div class="d-flex f-f-warp">
            <div class="f-dir-mid" style="width:50px; margin-top:10px">
              <!-- <i class="iconfont icon-icon-"></i> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-" />
              </svg>
              <div style="font-size: 12px;">订单</div>
            </div>
            <div class="f-dir-mid" style="width:50px; margin-top:10px">
              <!-- <i class="iconfont icon-enjoy1"></i> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-enjoy1" />
              </svg>
              <div style="font-size: 12px;">收藏</div>
            </div>
            <div class="f-dir-mid" style="width:50px;margin-top:10px">
              <!-- <i class="iconfont icon-diyongquan"></i> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-diyongquan" />
              </svg>
              <div style="font-size: 12px;">抵用券</div>
            </div>
            <div class="f-dir-mid" style="width:50px;margin-top:10px">
              <!-- <i class="iconfont icon-yue"></i> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yue" />
              </svg>
              <div style="font-size: 12px;">余额</div>
            </div>
            <div class="f-dir-mid" style="width:50px;margin-top:10px">
              <!-- <i class="iconfont icon-gengduo"></i> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gengduo" />
              </svg>
              <div style="font-size: 12px;">更多</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-bottom f-dir-mid">
        <img
          src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
          alt
          class="QR_code"
        />
        <div>美团APP手机版</div>
        <div class="enh">
          <span class="price">1元起</span>
          <span>吃喝玩乐</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      menu: [],
      iconfonts: [
        { icon: "meishi" },
        { icon: "waimai" },
        { icon: "jiudian" },
        { icon: "minsu_" },
        { icon: "Artboard" },
        { icon: "jipiaohuochepiao" },
        { icon: "ktv" },
        { icon: "shenghuofuwu" },
        { icon: "liren" },
        { icon: "jiehun" },
        { icon: "qinziyou" },
        { icon: "yundongjianshen" },
        { icon: "jiazhuangjiancai" },
        { icon: "xuexipeixun2" },
        { icon: "yiliao" },
        { icon: "jiuba" },
      ],
      swiperUrl: [
        {
          url:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
        {
          url:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          url:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          url:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
        {
          url:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
      ],
      user: "",
    };
  },
  components: {},
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
      this.$router.push("/login");
    },
  },
  mounted() {
    this.$api
      .menu()
      .then((res) => {
        console.log(res);
        res.data.menu.map((item, index) => {
          for (let i = 0; i < this.iconfonts.length; i++) {
            if (index == i) {
              this.$set(item, "icon", this.iconfonts[i].icon);
            }
          }
        });
        this.menu = res.data.menu;
      })
      .catch((err) => {});
    let user = localStorage.getItem("username");
    if (user) {
      this.user = user;
    }
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  width: 960px;
  margin-top: 10px;
  display: flex;
}
.left {
  background: white;
  z-index: 99;
  width: 200px;
  border-bottom: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  padding-top: 20px;
  margin-top: -20px;
  margin-right: 10px;
}
.item {
  padding: 3.5px 12px;
  display: flex;
  justify-content: space-between;
}
.item:hover {
  background: rgb(255, 247, 235);
  cursor: pointer;
}
.item:hover .menu_title {
  font-weight: 600;
}
.menu_title {
  font-size: 13px;
  color: #646464;
}
.icon {
  width: 16px !important;
  height: 16px !important;
  margin-right: 10px;
}
.iconfonts {
  font-size: 12px;
  color: #999999;
}
.iconfont {
  width: 24px;
  height: 24px;
}
.carousel {
  width: 430px;
}
.swiper_img {
  width: 430px;
  height: 240px;
}
.img1 {
  width: 140px;
  height: 240px;
  margin: 0 10px;
}
.img {
  margin-top: 10px;
}
.img2 {
  width: 210px;
  height: 200px;
}
.img3 {
  width: 210px;
  height: 200px;
  margin: 0 10px;
}
.img4 {
  width: 140px;
  height: 200px;
}
.right-top {
  width: 156px;
  height: 178px;
  padding: 30px 0;
  background: white;
  border: 1px solid #dddddd;
  margin-bottom: 10px;
}
.avatar_img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 3px solid #cccccc;
  margin-bottom: 5px;
}
.btn {
  font-size: 14px;
  color: #333333;
  padding: 5px 0;
  width: 110px;
  border-radius: 20px;
  border: 1px solid #eeeeee;
  text-align: center;
  margin-top: 15px;
}
.right-bottom {
  width: 156px;
  height: 198px;
  background: white;
  border: 1px solid #dddddd;
}
.QR_code {
  width: 95px;
  height: 95px;
  margin-bottom: 20px;
}
.enh {
  margin-top: 10px;
  font-size: 12px;
  color: #3f3f3f;
}
.price {
  color: red;
  margin-right: 5px;
}
.nav_detail {
  height: 510px;
  width: 310px;
  background: white;
  left: 200px;
  padding: 20px;
  visibility: hidden;
  top: 20px;
}
.ddd:hover > .nav_detail {
  visibility: visible;
}
.aaa {
  padding: 10px 0;
  border-bottom: 1px solid #eeeeee;
}
</style>