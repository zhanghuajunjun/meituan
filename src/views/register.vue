<template>
  <div>
    <div class="box">
      <div class="top_logo flex-j-sb">
        <img
          src="http://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          @click="onClick"
          alt
          class="logo cur"
        />
        <div class="flex-cent">
          <div class="have_account">已有美团账号？</div>
          <div class="login_btn cur" @click="login">登录</div>
        </div>
      </div>
    </div>
    <div class="f-dir-mid">
      <div class="register_box">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model.number="ruleForm.username" class="el_ipt"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model.number="ruleForm.email" class="el_ipt"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" class="el_ipt"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              class="el_ipt"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm" class="el_btn">同意以下协议并注册</el-button>
          </el-form-item>
        </el-form>
        <div class="term">
          <a
            class="f1"
            href="https://rules-center.meituan.com/rules-detail/4"
            target="_blank"
          >《美团点评用户服务协议》</a>
          <a
            class="f1"
            href="https://rules-center.meituan.com/rules-detail/2"
            target="_blank"
          >《美团点评隐私政策》</a>
        </div>
      </div>
    </div>
    <div class="footer">©meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var email = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        email: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur", required: true }],
        checkPass: [
          { validator: validatePass2, trigger: "blur", required: true },
        ],
        username: [{ validator: checkAge, trigger: "blur", required: true }],
        email: [
          { validator: email, trigger: "blur", required: true },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    submitForm() {
      this.$api
        .register(
          this.ruleForm.username,
          this.ruleForm.checkPass,
          this.ruleForm.email
        )
        .then((res) => {
          if (res.code === 200) {
            this.$message({
              message: "恭喜你，注册成功",
              type: "success",
            });
            this.$router.push("/login");
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch((err) => {});
    },
    login() {
      this.$router.push("/login");
    },
    onClick() {
      this.$router.push("/");
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
  border-bottom: 2px solid #eeeeee;
}
.logo {
  width: 126px;
  height: 46px;
}
.top_logo {
  width: 960px;
  padding: 10px 0;
}
.have_account {
  font-size: 14px;
  color: #666666;
  margin-right: 10px;
}
.login_btn {
  font-size: 12px;
  color: #222222;
  padding: 3px 10px;
  background: #fe8c00;
  border-radius: 3px;
}
.register_box {
  width: 960px;
  margin-top: 30px;
}
.el_ipt {
  width: 300px;
}
.el_btn {
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  color: #222;
  font-size: 14px;
  font-weight: 700;
}
.f1 {
  color: #fe8c00;
  text-decoration: none;
  font-size: 13px;
}
.term {
  margin-left: 150px;
}
.footer {
  margin-top: 40px;
  font-size: 14px;
  color: #666666;
  padding-top: 20px;
  border-top: 1px solid #eeeeee;
  text-align: center;
}
</style>