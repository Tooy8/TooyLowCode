<!--
 * @Description: 页面配置
 
-->
<template>
  <div class="p10">
    <config-item label='背景色'>
      <config-color-picker v-model="project.config.backgroundColor"></config-color-picker>
    </config-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PageConfig",
  computed: {
    ...mapGetters(["project"]),
  },
};
</script>