
<template>
  <img src="https://i.niupic.com/images/2022/11/02/aaa1.png" @click="toGit" />
</template>

<script>
export default {
  name: "GitControl",
  methods: {
    toGit() {
      console.log("toGit");

      window.open("https://github.com/Tooy8/TooyLowCode", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
}
</style>