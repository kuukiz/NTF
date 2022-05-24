<template>
  <el-card class="set">
    <div class="set-dev">
      <h2>注册</h2>
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
          ><el-button type="primary" id="setbut" @click="register"
            >注册</el-button
          ></el-col
        >
        <el-col :span="11" :pull="17"
          ><el-button type="" id="setbut" @click="login"
            >取消</el-button
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
  name: "login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    // 注册账户
    register() {
      if (this.name == "" || this.password == "") {
        this.$alert("账户或密码不能为空", "登录失败", {
          confirmButtonText: "确定",
        });
      } else {
        axios({
          method: "GET",
          url: "/api/getuserbyname",
          params: {
            name: this.name,
          },
        }).then((res) => {
          if (res) {
            console.log(res.data.user);
            // 没有重名时允许注册
            if (res.data.user == null) {
              console.log("can register");
              axios({
                method: "POST",
                url: "/api/register",
                data: {
                  address: "",
                  name: this.name,
                  password: this.password,
                },
              }).then((res) => {
                // 注册成功跳转首页
                if (res) {
                  console.log(this.name);
                  window.name = this.name;
                  console.log(window.name);
                  this.$alert("即将跳转", "注册成功", {
                    confirmButtonText: "确定",
                    callback: () => {
                      this.$router.push("/home");
                    },
                  });
                }
              });
            } else {
              this.$alert("账户已存在，请更换账户名", "注册失败", {
                confirmButtonText: "确定",
              });
            }
          }
        });
      }
    },
    login() {
      this.$router.push("/login");
    },
    created() {},
  },
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