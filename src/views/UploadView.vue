<template>
  <el-card class="upload">
    <template #header>
      <el-row>
        <el-col><span>上传新商品</span></el-col>
      </el-row>
    </template>
    <el-row class="input">
      <el-col :span="3"><span>图片：</span></el-col>
      <el-col :span="19"
        ><el-avatar shape="square" :size="50" src="" @click="uploadphoto"
      /></el-col>
    </el-row>
    <el-row class="input">
      <el-col :span="3"><label>标题：</label></el-col>
      <el-col :span="19">
        <el-input v-model="title"></el-input>
      </el-col>
    </el-row>
    <el-row class="input">
      <el-col :span="3"><label>价格：</label></el-col>
      <el-col :span="19">
        <el-input v-model="price"></el-input>
      </el-col>
    </el-row>
    <el-row class="input_content">
      <el-col :span="3"><label>简介：</label></el-col>
      <el-col :span="19">
        <el-input v-model="content" :rows="8" type="textarea" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11" :pull="10"
        ><el-button type="primary" id="setbut" @click="upload"
          >上传</el-button
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
      title: "",
      content: "",
      price: "",
    };
  },
  methods: {
    upload() {
      if (this.title == "" || this.price == "") {
        this.$alert("标题和价格不能为空", "上传失败", {
          confirmButtonText: "确定",
        });
      } else {
        axios({
          method: "POST",
          url: "/api/addgoods",
          data: {
            content: this.content,
            title: this.title,
            price: this.price,
          },
        }).then((res) => {
          // 上传成功跳转首页
          if (res) {
            this.$alert("即将跳转", "上传成功", {
              confirmButtonText: "确定",
              callback: () => {
                this.$router.push("/home");
              },
            });
          }
        });
      }
    },
    uploadphoto() {},
    cancel() {
      this.$router.push("/home");
    },
  },
};
</script>
<style>
.upload {
  height: 500px;
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
.input_content {
  height: 150px;
  line-height: 40px;
  font-size: 20px;
}
</style>
