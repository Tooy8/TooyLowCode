
<template>
  <config-item :label='label'>
    <el-input v-model="mValue" v-bind="mOptions" :placeholder='mOptions.placeholder' size='small'></el-input>
  </config-item>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";
export default {
  name: "SchemaString",
  mixins: [schemaMixin],
};
</script>