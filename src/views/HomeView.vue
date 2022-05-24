<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="searchText" placeholder="请输入关键词">
            </el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="search">搜索商品</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <transition :name="fade">
        <div>
          <el-card
            v-for="good in goods"
            :key="good.id"
            class="goods"
            @click="buy(good)"
          >
            <el-row>
              <el-col :span="9"
                ><el-avatar shape="square" :size="200" src="good.img_url"
              /></el-col>
              <el-col :span="15">
                <el-card class="goodmessage">
                  <el-row>
                    <el-col
                      ><span>名称：{{ good.title }}</span></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col
                      ><span>价格：{{ good.price }}</span></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col
                      ><span>简介：{{ good.content }}</span></el-col
                    >
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
// import cookie from "cookie";
// import router from "@/router";
// const web=window.cont;
import axios from "axios";

export default {
  data() {
    return {
      goods: [],
    };
  },
  methods: {
    getgoods() {
      axios({
        method: "GET",
        url: "/api/getGoods",
      }).then((res) => {
        console.log(res.data.goods);
        this.goods = res.data.goods;
      });
    },

    buy(good) {
      console.log(good);
      this.$router.push({ path: "/good", query: good });
    },
  },
  created() {
    this.getgoods();
  },
};
</script>


<style>
.el-header {
  background-color: #fff;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 20px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  /*text-align: center;*/
  line-height: 20px;
  display: inline-table;
  height: 710px;
}

.goods {
  height: 240px;
  width: 600px;
  margin: auto;
  margin-top: 10px;
}

.goodmessage {
  height: 200px;
}
</style>
