
<template>
  <div>
    <config-wrap title='必输配置'>
      <config-item label='属性名'>
        <el-input v-model="content.curComponent.property" placeholder="请输入属性名" size='small'></el-input>
      </config-item>
    </config-wrap>
    <config-wrap title='基础配置'>
      <config-item label='标题'>
        <el-input v-model="content.curComponent.label" placeholder="请输入标题" size='small'></el-input>
      </config-item>
      <config-item label='默认值'>
        <el-input-number v-model="content.curComponent.value" size='small'></el-input-number>
      </config-item>
      <config-item label='最小值'>
        <el-input-number v-model="content.curComponent.options.min" size='small'></el-input-number>
      </config-item>
      <config-item label='最大值'>
        <el-input-number v-model="content.curComponent.options.max" size='small'></el-input-number>
      </config-item>
    </config-wrap>
  </div>
</template>

<script>
export default {
  name: "SchemaNumberConfig",

  inject: ["content"],
};
</script>

