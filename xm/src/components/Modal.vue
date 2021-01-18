<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a
            href="javascript:;"
            class="icon-close"
            @click="$emit('cancel')"
          ></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- 点击调用父组件方法 当按钮类型为1时显示确定 按钮为2时 显示取消 反之则全部显示-->
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"
            @click="$emit('submit')"
            >{{ sureText }}</a
          >
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 2"
            @click="$emit('cancel')"
            >{{ cancelText }}</a
          >
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{
              sureText
            }}</a>
            <a href="javascript:;" class="btn" @click="$emit('cancel')">{{
              cancelText
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  // 接收父组件传的值
  props: {
    // 弹框类型 small小 middle中 large大 form表单
    modelType: {
      type: String,
      // 默认值
      default: "form",
    },
    // 弹框标题
    title: String,
    // 按钮类型1：确定 2：取消 3：确定 取消
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    // 是否显示弹框
    showModal: Boolean,
  },
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/modal.scss";
</style>
