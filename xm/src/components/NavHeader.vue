<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" @click="login" v-if="!username">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>

    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a :href="`/#/product/:${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <li class="product">
                <a href="#" target="_blank">
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-1.jpg" />
                  </div>
                  <div class="pro-name">小米电视大师 82英寸至尊纪念版</div>
                  <div class="pro-price">49999元</div>
                </a>
              </li>
              <li class="product">
                <a href="#" target="_blank">
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-2.jpg" />
                  </div>
                  <div class="pro-name">小米电视大师 82英寸</div>
                  <div class="pro-price">9999元</div>
                </a>
              </li>
              <li class="product">
                <a href="#" target="_blank">
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-3.png" />
                  </div>
                  <div class="pro-name">小米透明电视</div>
                  <div class="pro-price">49999元</div>
                </a>
              </li>
              <li class="product">
                <a href="#" target="_blank">
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-4.jpg" />
                  </div>
                  <div class="pro-name">小米电视 大师 65英寸OLED</div>
                  <div class="pro-price">9999元</div>
                </a>
              </li>
              <li class="product">
                <a href="#" target="_blank">
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-5.jpg" />
                  </div>
                  <div class="pro-name">Redmi 智能电视 MAX 98''</div>
                  <div class="pro-price">19999元</div>
                </a>
              </li>
              <li class="product">
                <a href="#" target="_blank">
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-6.png" />
                  </div>
                  <div class="pro-name">查看全部</div>
                  <div class="pro-price">查看全部</div>
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "nav-header",
  data() {
    return {
      username: "",
      phoneList: [],
    };
  },
  //   过滤器
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return `¥${val.toFixed(2)}元`;
    },
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6,
          },
        })
        .then((res) => {
          //   只获取前六条
          //   if (res.list.length > 6) {
          //     this.phoneList = res.list.slice(0, 6);
          //   }
          this.phoneList = res.list;
          // console.log(res)
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>


<style lang='scss'>
@import "../assets/scss/base";
@import "../assets/scss/mixin";
@import "../assets/scss/config";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      // 调用flex
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #f60;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #f60;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &::after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 643px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-left: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            opacity: 0;
            height: 0;
            width: 1226px;
            overflow: hidden;
            transition: all 0.3s;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            background-color: #fff;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;

              &::before {
                content: "";
                top: 28px;
                position: absolute;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before {
                display: none;
              }
              a {
                display: inline-block;
              }
              img {
                height: 110px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
