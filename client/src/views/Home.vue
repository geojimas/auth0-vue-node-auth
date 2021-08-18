<template>
  <div>
    <Content />
  </div>
</template>

<script>

import Content from "../components/Content";
export default {
  name: "home",
  components: {
    Content
  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>