<!--
 * @Description: 页面构建

-->
<template>
  <div class="build">
    <control />
  </div>
</template>

<script>
import Control from "@/components/Control";

export default {
  components: {
    Control,
  },
};
</script>
<style lang="scss" scoped>
.build {
  height: 100vh;
  background: #f7f8fa;
}
</style>
