<template>
    
    <div class="flashCard" :class="{flipped: show}"  @click="show = !show" >
        <div v-if="show == false" class="cardFront">{{ cardTerm }}</div>

        <div v-if="show==true" class="cardBack">{{ cardDef }}</div>


    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
    props:{
        cardTerm:{
            required: true,
            type: String,
        },

        cardDef:{
            required: true,
            type: String,
        }
    },

    setup () {
        let show = ref<boolean>(false)

        return {show}
    }
})
</script>

<style scoped>

.flashCard{
    transform-style: preserve-3d;
    width: 100%;
    height: 20rem;
    position: relative;
    background-color: red;
    transition: all 0.5s;

}

.cardFront, .cardBack{
    position: absolute;    
    backface-visibility: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.cardFront{
    transform: rotateX(0deg);
}
.cardBack{
    transform: rotateX(180deg);
}

.flipped{
    transform: rotateX(180deg);
}


</style>