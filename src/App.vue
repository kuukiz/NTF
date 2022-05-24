<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="linkTo(1)">首页</el-menu-item>
    <!-- <el-menu-item index="2" @click="linkTo(2)">购物车</el-menu-item> -->
    <el-menu-item index="3" @click="linkTo(3)">个人信息</el-menu-item>
    <!-- <el-menu-item index="4" @click="linkTo(4)">登录</el-menu-item> -->
    <!-- <el-menu-item index="5" @click="linkTo(5)">注册</el-menu-item> -->
    <!-- <el-menu-item index="7" @click="linkTo(7)">修改信息</el-menu-item> -->
    <el-menu-item index="8" @click="linkTo(8)">上传商品</el-menu-item>
  </el-menu>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
// import axios from "axios";
export default {
  methods: {
    linkTo(index) {
      if (window.name != "") {
        // axios({
        //   method: "GET",
        //   url: "/api/getuserbyname",
        //   params: {
        //     name: window.name,
        //   },
        // }).then((res) => {
        //   console.log(res.data);
        //   this.name = res.data.user.name;
        // });
        switch (index) {
          case 1:
            this.$router.push("/home");
            break;
          // case 2:
          //   this.$router.push("/shopping");
          //   break;
          case 3:
            this.$router.push("/message");
            break;
          // case 4:
          //   this.$router.push('/login');
          //   break;
          // case 5:
          //   this.$router.push('/register');
          //   break;
          // case 7:
          //   this.$router.push('/alter');
          //   break;
          case 8:
            this.$router.push("/upload");
            break;
        }
      } else {
        this.$alert("请登录后尝试", "尚未登录", {
          confirmButtonText: "确定",
        });
      }
    },
  },
  mounted() {
    this.$router.push("/login");
  },
};
</script>