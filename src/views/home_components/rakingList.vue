<template>
  <div class="content">
      <span v-html="parent"></span>
      <button @click="transfer">传值</button>
  </div>
</template>

<script>
export default {
  name:'rakingList',
  props:['parent'],
  methods:{
    transfer(){
      this.$emit('finish','我是子')
    }
  }
}
</script>

<style>

</style>