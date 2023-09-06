
<template>
  <config-item :label='label'>
    <el-slider v-model="mValue" v-bind="mOptions" show-input>
    </el-slider>
  </config-item>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";

export default {
  name: "SchemaNumber",

  mixins: [schemaMixin],

  data() {
    return {
      defaultOptions: {
        max: 100,
      },
    };
  },
};
</script>