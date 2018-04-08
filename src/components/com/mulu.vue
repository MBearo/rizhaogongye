<template>
  <div>
      
  </div>
</template>

<script>
export default {
    props: {
      mulu: {}
    },
    created() {
      // console.log(this.$route)
    },
    methods: {
      goAnchor(index) {
        var anchor = this.$parent.$el.querySelector('#' + this.mulu[index].href)
        document.documentElement.scrollTop = anchor.offsetTop
      }
    }
}
</script>

<style>

</style>
