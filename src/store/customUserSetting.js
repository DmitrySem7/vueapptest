import { defineStore } from 'pinia';
import {ref, computed, reactive, watch} from "vue";

export const useUserSetting = defineStore('UserSetting',()=>{
    const theme = ref(true);
    const color = reactive({
        background: "var(--background)",
        text: "var(--primary-text)",
        active: "var(--active-text)"
    });
    const state = reactive({
        theme
    })
    const getTheme = computed(()=>{
        return state.theme
    })
    const getBackground = computed(()=>{
        return color.background;
    })
    const getText = computed(()=>{
        return color.text;
    })
    const getActive = computed(()=>{
        return color.active;
    })
    /*const color = computed((theme)=>{
        let text="";
        let active_text=""
        let background="";
        if(theme===true){
            background="#545c64";
            text="#fff";
            active_text="#ffd04b";
        }else{
            background="wheat";
            text="gray";
            active_text="gray";
        }
        return{
            text, active_text, background
        }
    })*/
    function inversionTheme(theme){
        state.theme=!state.theme;
    }
    function colorThemeChenge(){
        switch(state.theme){
            case true:
                color.text="var(--text)";
                color.active="var(--active-text)";
                color.background="var(--background)";
                break;
            default:
                color.text="var(--alt-text)";
                color.active="var(--alt-active-text)";
                color.background="var(--alt-background)";
                break;
        }
    }
    watch(theme,(newValue,oldValue)=>{
        colorThemeChenge();
    })
    return{
        getTheme, inversionTheme, theme,getBackground,getText,getActive,
    }
})