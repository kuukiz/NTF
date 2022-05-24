<template>
  <el-card class="alter">
    <template #header>
      <el-row>
        <el-col :span="3"><el-avatar :size="50" :src="circleUrl" /></el-col>
        <el-col :span="19"
          ><span>{{ userName }}</span></el-col
        >
      </el-row>
    </template>
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
        ><el-button type="primary" id="setbut" @click="message"
          >确认修改</el-button
        ></el-col
      >
      <el-col :span="11" :pull="17"
        ><el-button type="" id="setbut" @click="cancel">取消</el-button></el-col
      >
    </el-row>
  </el-card>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      name: "",
      password: "",
    };
  },
  methods: {
    message() {
      // 确认信息修改后跳转回个人信息页面
      this.$router.push("/message");
    },
    cancel() {
      this.$router.push("/message");
    },
    getUser() {
      axios({
        method: "GET",
        url: "/api/getuserbyname",
        params: {
          name: window.name,
        },
      }).then((res) => {
        console.log(res.data);
        this.userName = res.data.user.name;
        this.name = res.data.user.name;
        this.password = res.data.user.password;
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<style>
.alter {
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
