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
    background-color: var(--color4);
    transition: all 0.5s;
    border-radius: 0.3rem;
    
}

.cardFront, .cardBack{
    position: absolute;    
    backface-visibility: hidden;
    height: 100%;
    width: 80%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
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