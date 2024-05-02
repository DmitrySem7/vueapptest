<script setup>
import Cell from "@/components/Cell.vue";

import {useUserSetting} from "@/store/customUserSetting.js";
import {useGameCore} from "@/store/gameCore.js"

const userSetting = useUserSetting();
const GameCore = useGameCore();
GameCore.start();
let SizeMap = GameCore.getSizeMap;

</script>

<template>
  <div class="game-map" >
    <el-card style="max-width: 600px" >
      <el-row class="row-bg mapGrid">
      <Cell v-for="item in SizeMap" :keyNames="item"/>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.mapGrid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
}
</style>