<template>
    <div class="container">
        <RouterLink @click="setStore.setTermInfo($props.uid, $props.author)" :to="{name: 'sets',  params:{uid: $props.uid, setTitle: $props.setTitle, author: $props.author}}" >Test</RouterLink>

        <h2 class="setTitle" >{{ setTitle }}</h2>
        <img src="" alt="" class="setImage">
        <h5 class="termCount">{{ termCount }} terms</h5>
        <h3 class="author">{{ author }}</h3>
    </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSetStore } from '@/stores/obtainSetData'
export default defineComponent({
    props:{
      setTitle:{
        required: true,
        type: String,
      },
      termCount:{
        required: true,
        type: Number,
      },
      author:{
        required: true,
        type: String,
      },
      uid:{
        required: true,
        type: String,
      }
    },
    setup (props) {
      console.log(props.author, props.uid)
      const setStore = useSetStore()
        return {setStore}
    }
})
</script>

<style scoped>

.container{
    height: 7rem;
    width: 20rem;
    background-color: var(--color4);
    margin-bottom: 1rem;
    margin-right: 1rem;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
}

.termCount{
    opacity: 50%;
}

.author{
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;

}

.container:before{
    content: "";
    height: 0.5rem;
    width: 0%;
    background-color: blue;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 10px 10px;
    transition: all 0.2s;
}

.container:hover:before{

    width: 100%;
}

</style>