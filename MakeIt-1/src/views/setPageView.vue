<template>
    <div>
        This page is {{$route.params.author}} {{ $route.params.setTitle }}
    </div>
    
    <div class="carousel">

        <button class="previous" @click="prevCard" > &#8656;</button>
        <button class="next" @click="nextCard" >&#8658;</button>

        <div class="card"  v-for="(term, index) in store.specificData.terms"   :key="index"  > 
            
            <flashCards v-show="index == currentCard" :card-def="term.definition" :card-term="term.term" ></flashCards>

        </div>
    </div>

   
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/stores/store'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import flashCards from '@/components/flashCards.vue'
export default defineComponent({
    components:{
        flashCards  
    },
    setup () {

        const store = useStore()
        const route = useRoute()
        const setTitleParam = route.params.setTitle as string
        const authorParam = route.params.author as string
        store.readSpecificData(store.user, setTitleParam)

        let currentCard = ref<number>(0)
        const termLength = ref<number>(store.specificData.terms.length -1)


        return {store, route, setTitleParam, authorParam, currentCard, termLength}


    },
    methods:{
        prevCard(){
            this.currentCard--

            if(this.currentCard < 0){
                this.currentCard = this.termLength
            }
        },

        nextCard(){
            this.currentCard++

            if(this.currentCard > this.termLength){
                this.currentCard = 0
            }
        }


    }


})
</script>

<style scoped>

.carousel{
    width: 50vw;
    height: 30rem;
    background-color: var(--color2);
    margin: auto;
    position: relative;
    
}







</style>