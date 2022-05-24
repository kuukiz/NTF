<template>
  <el-card class="good">
    <el-row>
      <el-col :span="9"
        ><el-avatar shape="square" :size="200" src="this.$route.query.img_url"
      /></el-col>
      <el-col :span="15">
        <el-card class="goodmessage">
          <el-row>
            <el-col
              ><span>名称：{{ this.$route.query.title }}</span></el-col
            >
          </el-row>
          <el-row>
            <el-col
              ><span>价格：{{ this.$route.query.price }}</span></el-col
            >
          </el-row>
          <el-row>
            <el-col
              ><span>简介：{{ this.$route.query.content }}</span></el-col
            >
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11" :pull="10"
        ><el-button type="primary" id="setbut" @click="buygood"
          >购买</el-button
        ></el-col
      >
      <el-col :span="11" :pull="17"
        ><el-button type="" id="setbut" @click="cancel">取消</el-button></el-col
      >
    </el-row>
  </el-card>
</template>
<script>
// import axios from "axios";

export default {
  data() {
    return {
      good: {},
    };
  },
  methods: {
    buygood() {
      //   axios({
      //     method: "POST",
      //     url: "/api/update/good",
      //     data: {
      //       id: this.$route.query.id,
      //       status: 1,
      //     },
      //   }).then((res) => {
      //     console.log(res);
      //     // 购买成功跳转首页
      //     if (res.data.msg == "success") {
      //       this.$alert("即将跳转", "购买成功", {
      //         confirmButtonText: "确定",
      //         callback: () => {
      //           this.$router.push("/home");
      //         },
      //       });
      //     } else {
      //       this.$alert("账户余额不足", "购买失败", {
      //         confirmButtonText: "确定",
      //       });
      //     }
      //   });
    },
    cancel() {
      this.$router.push("/home");
    },
  },
  created() {
    console.log(this.$route.query);
  },
};
</script>
<style>
.good {
  height: 350px;
  width: 600px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

#setbut {
  margin-top: 40px;
  margin-left: 430px;
}
</style>
