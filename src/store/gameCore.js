import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {defaultDataCell} from "@/modelData/cellData.js";
import {state} from "@/modelData/setupStateGame.js";

export const useGameCore=defineStore("gameCore",()=>{
    const map = reactive({cells:[]});
    function start(){
        generateMap();
    }


    function generateMap(){
        for(let i=0;i<state.sizeMap;i++){
            map.cells.push(defaultDataCell())
        }
        console.log(map.cells);
    }
    const getSizeMap = computed(()=>state.sizeMap);
    const getCellIndexMap = computed((index)=>map.cells[index]);
    return{
        start, getSizeMap,getCellIndexMap
    }
})



