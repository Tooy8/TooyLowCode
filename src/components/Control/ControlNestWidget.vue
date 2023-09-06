<!--
 * @Description: 可嵌套物料列表
-->
<template>
  <draggable v-model="list" group="itxst" ghostClass="ghost" chosenClass="chosen" selector="selector" :animation="500"
    :sort="true" :class="[isWidget ? 'nest-child' : 'nest-area']">
    <widget-shape v-for="item in list" :key="item.id" :widget="item">
      <component :is="item.component" v-bind="item">
        <ControlNestWidget :widgets.sync="item.children" :isWidget="true"></ControlNestWidget>
      </component>
    </widget-shape>
  </draggable>
</template>

<script>

export default {
  name: "ControlNestWidget",

  inject: ["chontrol"],

  props: {
    isWidget: {
      type: Boolean,
      default: false,
    },
    widgets: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      list: [],
    };
  },

  watch: {
    widgets: {
      handler(val) {
        this.list = val;
      },
      immediate: true,
      deep: true,
    },
    list: {
      handler(val) {
        this.$emit("update:widgets", val);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.nest-child {
  min-height: 80px;
  background: #f7f8fa80;
}

.nest-area {
  min-height: 600px;
}

.nest-none {
  background: url("https://file.qingflow.com/assets/empty-content/applying-editorial-tips.png");
  background-size: 100% 100%;
}
</style>