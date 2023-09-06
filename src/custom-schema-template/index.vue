<!--
 * @Description: 属性组件配置模板

-->
<!-- <template>
  <ul>
    <li v-for="(s, key, index) in schema" :key="index">
      <component :key="index" :is="getComponents(s.type)" v-model="value[key]" v-bind="s" :schema="s">
        <custom-schema-template v-if="s.child" :schema="s.child" :value="value[key]"></custom-schema-template>
      </component>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'custom-schema-template',

  provide() {
    return {
      mode: this
    }
  },

  props: {
    schema: {
      typeof: Object,
      default: () => { }
    },
    value: {
      typeof: Object,
      default: () => { }
    }
  },

  methods: {
    getComponents(type) {
      return `schema-${type}`
    }
  }
}
</script> -->





<template>
  <ul>
    <li v-for="(s, key, index) in schema" :key="index">
      <component :key="index" :is="typeToComponent[s.type]" v-model="value[key]" v-bind="s" :schema="s">
        <custom-schema-template v-if="s.child" :schema="s.child" :value="value[key]"></custom-schema-template>
      </component>


    </li>
  </ul>
</template>

<script>
import typeToComponent from '@/utils/schema-template'

export default {
  name: 'custom-schema-template',

  provide() {
    return {
      mode: this
    }
  },

  props: {
    schema: {
      typeof: Object,
      default: () => { }
    },
    value: {
      typeof: Object,
      default: () => { }
    }
  },

  data() {
    return {
      typeToComponent
    }
  }
}
</script>

