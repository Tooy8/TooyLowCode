
<template>
  <div>
    <config-wrap title="必输配置">
      <config-item label="属性名">
        <el-input v-model="content.curComponent.property" placeholder="请输入属性名" size="small"></el-input>
      </config-item>
    </config-wrap>
    <config-wrap title="基础配置">
      <config-item label="标题">
        <el-input v-model="content.curComponent.label" placeholder="请输入标题" size="small"></el-input>
      </config-item>
      <config-item label="备注">
        <el-input v-model="content.curComponent.options.note" placeholder="请输入标题" size="small"></el-input>
      </config-item>
      <config-item label="最大数量">
        <el-input-number v-model="content.curComponent.options.limit" size="small"></el-input-number>
      </config-item>
    </config-wrap>
  </div>
</template>

<script>
export default {
  name: 'SchemaArrayConfig',

  inject: ['content']
}
</script>
