
<template>
  <div class="page">
    <pageHeader />
    <div class="page-body">
      <control />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  .page-body {
    height: calc(100vh - 56px);
    width: 100%;
    margin-top: 56px;
    overflow: auto;
  }
}
</style>