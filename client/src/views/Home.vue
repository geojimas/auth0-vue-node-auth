<template>
  <div>
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from '../components/HomeContent'
export default {
  name: 'home',
  components: {
    HomeContent,
  },
}
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
