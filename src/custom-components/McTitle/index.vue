<!--
 * @Description: 标题组件

-->

<template>
  <div class="title" :style="[$wrapStyle(styles)]">
    <div class="pt10 pb10" :class="[
      attrs.model == 'center' ? 'title-mid-model' : 'title-left-model'
    ]" :style="[$cmpStyle(styles)]">
      <!-- 主标题 -->
      <div class="title" :class="[attrs.model == 'center' ? 'mb8' : 'mr5']" :style="[titleStyle()]">
        {{ value.title || '' }}
      </div>

      <!-- 副标题 -->
      <div class="info" :style="[subTitleStyle()]">{{ value.info || '' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McTitle',

  props: {
    styles: {
      type: Object,
      default: () => { }
    },
    attrs: {
      type: Object,
      default: () => { }
    },
    value: {
      type: Object,
      default: () => { }
    }
  },

  methods: {
    baseStyle() {
      // console.log('baseStyle');
      // console.log(JSON.stringify(this.styles));
      // console.log(this.$baseStyle(this.styles));
      return this.$baseStyle(this.styles)
    },
    // 主标题样式
    titleStyle() {
      return {
        color: this.styles.titleColor,
        fontSize: this.$unit(this.styles.titleSize),
        fontWeight: this.styles.tilteWeight
      }
    },
    // 副标题样式
    subTitleStyle() {
      return {
        color: this.styles.infoColor,
        fontSize: this.$unit(this.styles.infoSize),
        fontWeight: this.styles.infoWeight
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  .title-left-model {
    display: flex;
    align-items: flex-end;
    padding-left: 10px;
    padding-right: 10px;
  }

  .title-mid-model {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
