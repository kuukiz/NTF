<template>
  <el-card class="message">
    <template #header>
      <el-row>
        <el-col :span="3"><el-avatar :size="50" src="" /></el-col>
        <el-col :span="19"
          ><span>{{ name }}</span></el-col
        >
      </el-row>
    </template>
    <el-button @click="alter">修改信息</el-button>
  </el-card>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      photo: "",
    };
  },
  methods: {
    alter() {
      this.$router.push("/alter");
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
        this.name = res.data.user.name;
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<style>
.message {
  height: 350px;
  width: 600px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>
