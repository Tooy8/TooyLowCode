
<template>
  <div class="flex p10 bg-white">
    <div class="w70 f13 f-grey pt10 ">{{ label }}</div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfigItem",
  props: ["label", "info"],
  data() {
    return {};
  },
};
</script>