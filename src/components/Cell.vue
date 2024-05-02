<script setup>
  const props = defineProps({
    keyNames: {
      type: Number,
      required:true
    },
  })
</script>

<template>
 <div :id="props.keyNames">
   <el-button class="cell-button" type="primary" :icon="Edit" />
 </div>
</template>

<style scoped>
.cell{
  width: 100%;
}
.cell-button{
  width: 50px;
  height: 50px;
}
</style>