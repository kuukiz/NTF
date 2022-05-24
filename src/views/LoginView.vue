<template>
  <el-card class="set">
    <div class="set-dev">
      <h2>登录</h2>
      <el-row class="input">
        <el-col :span="3"><label>账户：</label></el-col>
        <el-col :span="19">
          <el-input v-model="name"></el-input>
        </el-col>
      </el-row>
      <el-row class="input">
        <el-col :span="3"><label>密码：</label></el-col>
        <el-col :span="19">
          <el-input v-model="password"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11" :pull="10"
          ><el-button type="primary" id="setbut" @click="login"
            >登录</el-button
          ></el-col
        >
        <el-col :span="11" :pull="17"
          ><el-button type="" id="setbut" @click="register"
            >注册</el-button
          ></el-col
        >
      </el-row>
    </div>
  </el-card>
</template>
<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "setting",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    // 跳转注册页面
    register() {
      this.$router.push("/register");
    },
    // 登录账户
    login() {
      if (this.name == "" || this.password == "") {
        this.$alert("账户和密码不能为空", "登录失败", {
          confirmButtonText: "确定",
        });
      } else {
        axios({
          method: "POST",
          url: "/api/login",
          data: {
            id: 1, //测试时避免异常
            name: this.name,
            password: this.password,
          },
        }).then((res) => {
          console.log(res);
          // 登录成功跳转首页
          if (res.data.msg == "success") {
            console.log(this.name);
            window.name = this.name;
            console.log(window.name);
            this.$alert("即将跳转", "登录成功", {
              confirmButtonText: "确定",
              callback: () => {
                this.$router.push("/home");
              },
            });
          } else {
            this.$alert("账户或密码错误", "登录失败", {
              confirmButtonText: "确定",
            });
          }
        });
      }
    },
  },
  created() {},
};
</script>
<style>
.set-dev {
  margin: 0 auto;
  padding-left: 20px;
}

.set {
  height: 350px;
  width: 600px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.input {
  height: 60px;
  line-height: 40px;
  font-size: 20px;
}

#setbut {
  margin-top: 40px;
  margin-left: 430px;
}
</style>
