
<template>
  <config-item :label='label'>
    <Imgpond v-model="mValue" v-bind="mOptions" :count="1" />
  </config-item>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";

export default {
  name: "SchemaUpload",

  mixins: [schemaMixin],
};
</script>