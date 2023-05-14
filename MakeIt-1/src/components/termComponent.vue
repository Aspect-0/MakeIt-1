<template>
    <div class="termCard" >
        <input type="text" v-model="term" >
        <input type="text" v-model="definition" >

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'


export default defineComponent({
    props:{
        term:{
            type:String
        },
        definition: {
            type: String
        }

    },
    setup () {
        
       
        return {}
    }
})
</script>

<style scoped>

.termCard{
    width: 80vw;
    height: 20vh;
    border-radius: 10px;
    background-color: antiquewhite;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

input{
    height: 1rem;
    width: 40%;
    background-color: transparent;
    text-decoration: none;
    border: none;
    font-size: 1rem;
    border-bottom: 3px solid black;
}
input:focus{
    border: none;
    text-decoration: none;
    border-bottom: 3px solid black;
    outline: none;
}

</style>