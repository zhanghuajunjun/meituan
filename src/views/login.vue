<template>
  <div class="box">
    <div style="width:960px">
      <img
        src="http://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
        @click="onClick"
        alt
        class="logo cur"
      />
      <div class="flex-j-sb">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
        <div class="right">
          <div>
            <div>账号登陆</div>
            <el-input placeholder="用户名" v-model="username" class="el_ipt">
              <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
            <el-input placeholder="密码" v-model="password" type="password" class="el_ipt">
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
            <div class="forget_pass cur">忘记密码？</div>
            <div id="login" @click="login">登录</div>
            <div class="null">
              还没有账号？
              <span style="color:#fe8c00;" @click="register" class="cur">免费注册</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_top">
        <div>关于美团</div>
        <div class="xian"></div>
        <div>加入我们</div>
        <div class="xian"></div>
        <div>商家入驻</div>
        <div class="xian"></div>
        <div>美团手机版</div>
      </div>
      <div class="footer">©meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {},
  methods: {
    onClick() {
      this.$router.push("/");
    },
    login() {
      if (this.username === "" || this.password === "") {
        this.$message.error("账号或密码不能为空");
      } else {
        this.$api
          .login(this.username, this.password)
          .then((res) => {
            console.log(res);
            if (res.code === 200) {
              this.$message({
                message: res.msg,
                type: "success",
              });
              this.$router.push("/");
              localStorage.setItem("username", res.data.username);
            } else {
              this.$message.error(res.msg);
              this.username = "";
              this.password = "";
            }
          })
          .catch((err) => {});
      }
    },
    register() {
      this.$router.push("/register");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  justify-content: center;
}
.logo {
  width: 126px;
  height: 46px;
  padding: 40px 0 30px 0;
}
.el_ipt {
  width: 300px;
  margin-top: 20px;
}
.right {
  margin-top: 20px;
  width: 400px;
  display: flex;
  justify-content: center;
}
.forget_pass {
  margin-top: 20px;
  width: 300px;
  color: #fe8c00;
  font-size: 12px;
  text-align: end;
}
#login {
  width: 300px;
  color: #222;
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  font-weight: 700;
  font-size: 14px;
  padding: 8px 0;
  text-align: center;
  border-radius: 5px;
  margin-top: 20px;
}
#login:hover {
  cursor: pointer;
}
.null {
  font-size: 14px;
  margin-top: 20px;
}
.footer_top {
  margin-top: 40px;
  font-size: 12px;
  color: #999999;
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}
.xian {
  width: 1px;
  height: 10px;
  background: #999999;
  margin: 0 20px;
}
.footer {
  font-size: 12px;
  color: #999999;
}
</style>