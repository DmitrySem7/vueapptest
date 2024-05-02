<script setup>

import NavBar from "@/components/NavBar.vue";
import GameMap from "@/components/GameMap.vue";
import ToolBar from "@/components/ToolBar.vue";
import {useUserSetting} from './store/customUserSetting.js';

const useSetting = useUserSetting();
</script>

<template>
  <el-row >
    <el-col :span="4"> <el-affix>
    <NavBar/>
    </el-affix></el-col>
    <el-col :span="16"><GameMap/></el-col>
    <el-col :span="4"><ToolBar/></el-col>
  </el-row>
</template>

<style scoped>

</style>
