

<!--
 * @Description: 图片组件
-->
<template>
  <div :style="[$wrapStyle(imageStyle), $cmpStyle(this.imageStyle)]">
    <img class="img" mode="widthFix" :style="[getImgStyle()]" :src="imageValue.imagePath || defaultImage" />
  </div>
</template>

<script>
export default {
  name: "McImg",

  props: {
    imageStyle: {
      type: Object,
      default: () => { },
    },
    imageValue: {
      type: Object,
      default: () => { },
    },
  },

  data() {
    return {
      defaultImage:
        "https://img01.yzcdn.cn/public_files/2019/03/05/2b60ed750a93a1bd6e17fc354c86fa78.png!large.webp",
    };
  },

  methods: {
    getImgStyle() {
      return {
        borderRadius: `${this.imageStyle.cmpRadius}px`
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
}
</style>
