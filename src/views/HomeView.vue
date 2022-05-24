<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="7">
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
        <el-col :span="3">
          <span>账户余额：{{ this.balance }}</span></el-col
        >
      </el-row>
    </el-header>
    <el-main>
      <transition :name="fade">
        <div>
          <el-row>
            <el-col
              :span="12"
              v-for="good in goods.slice((page - 1) * 4, page * 4)"
              :key="good.id"
              class="row"
            >
              <el-card @click="buy(good)" class="good">
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
            </el-col>
            <div></div>
          </el-row>
        </div>
      </transition>
      <div class="demo-pagination-block">
        <el-pagination
          :background="background"
          layout="prev, pager, next, jumper"
          :default-page-size="4"
          :total="this.number"
          hide-on-single-page="true"
          @current-change="handleCurrentChange"
        />
      </div>
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
      number: 0,
      balance: 0,
      page: 1,
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
        this.number = this.goods.length;
        console.log(this.number);
      });
    },

    buy(good) {
      console.log(good);
      this.$router.push({ path: "/good", query: good });
    },
    async handleCurrentChange(val) {
      this.page = val;
      console.log(`当前页: ${val}`);
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

.good {
  height: 240px;
  width: 700px;
  margin: auto;
}
.goods {
  display: flex;
  justify-content: center;
}
.goodmessage {
  height: 200px;
}
.row {
  margin-top: 30px;
}

.demo-pagination-block {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
