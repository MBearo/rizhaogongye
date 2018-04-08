<template>
  <div class="container">
    <div class="main flex">
      <div class="">
        <sousuojieguo></sousuojieguo>
        <gongsiliebiao></gongsiliebiao>
      </div>
      <div class="right flex-0">
        <condition></condition>
      </div>
    </div>

  </div>
</template>

<script>
  import condition from '../com/shaixuan'
  import gongsiliebiao from '../com/dakuai/gongsiliebiao'
  import sousuojieguo from '../com/dakuai/sousuojieguo'
  export default {
    data() {
      return {

      }
    },
    components: {
      condition,
      gongsiliebiao,
      sousuojieguo
    },
    methods: {

    },
    mounted() {

    },
  }

</script>

<style scoped>
  .container {
    /* background-color: #fbfbfb; */
  }

  .right {
    width: 225px;
    box-sizing: border-box;
    padding-left: 10px;
  }

  .right>div {
    border-radius: 4px;
    /* border: 1px solid #e6e6e6; */
    background-color: white;
  }

  .main {
    padding: 10px 0;
    max-width: 1000px;
    margin: 0 auto;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .main>div {
    /* border: 1px solid #e6e6e6;
    background-color: white;
    padding:  10px;
    box-sizing: border-box;
    border-radius: 4px; */
  }

</style>
