<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue';
import {useUserSetting} from '../store/customUserSetting.js';
import {storeToRefs} from 'pinia';
import {ref, watch} from 'vue';

const userSetting = useUserSetting();
const {theme} = storeToRefs(userSetting);
const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}



</script>

<template>
  <div :class="['nav-bar']">
    <el-menu :collapse="isCollapse"
             @mouseenter="isCollapse = false"
             @mouseleave="isCollapse= true"
             :active-text-color="userSetting.getActive"
             :background-color="userSetting.getBackground"
             :text-color="userSetting.getText"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-switch v-model="theme" size="small" />
        <span>Сменить тему</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>



<style scoped>

</style>