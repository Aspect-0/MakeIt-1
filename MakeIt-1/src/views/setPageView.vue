<template>
    <div class="setTitle">
        {{ $route.params.setTitle }}
    </div>

 
    
    <section class="carousel">

        <button class="previous change" @click="prevCard" > &#8656;</button>
        <button class="next change" @click="nextCard" >&#8658;</button>

        <div class="card" v-for="(term, index) in store.specificData.terms"   :key="index"  > 
            
            <flashCards v-show="index == currentCard" :card-def="term.definition" :card-term="term.term" ></flashCards>

        </div>
    </section>
        <div class="termLength">
            {{ store.specificData.terms.length }} Terms
        </div>

    <div class="setAuthor">
        Author: {{ $route.params.author }}
    </div>

    <section class="terms">
        <individualTerms v-for="term in store.specificData.terms" :key="term" :term-content="term.term" :definition-content="term.definition" ></individualTerms>
    </section>

    <div class="editButton">

        <RouterLink class="noDec" @click="uploadDataToEdit" :to="{name: 'edit', params:{uid: $route.params.uid, author: $route.params.author, setTitle: $route.params.setTitle }}" >Edit Your Set</RouterLink>
    </div>
   

   
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/stores/store'
import { editStore } from '@/stores/termEdit'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import flashCards from '@/components/flashCards.vue'
import individualTerms from '@/components/individualTerms.vue'
import { useSetStore } from '@/stores/obtainSetData'

export default defineComponent({
    components:{
        flashCards, individualTerms
    },

    setup () {

        const store = useStore()
        const route = useRoute()
        const storeEdit = editStore()
        const setStore = useSetStore() // Maybe use setStore later to get info from other users
        const setTitleParam = route.params.setTitle as string
        const authorParam = route.params.author as string
        store.readSpecificData(route.params.uid, setTitleParam)

        let currentCard = ref<number>(0)
        const termLength = ref<number>(store.specificData.terms.length -1)

        let toLeft = ref<boolean>(false)
        let toRight = ref<boolean>(false)


        return {store, route, setTitleParam, authorParam, currentCard, termLength, toRight, toLeft, setStore, storeEdit, }


    },
    methods:{
        prevCard(){
            this.currentCard--

            if(this.currentCard < 0){
                this.currentCard = this.termLength
            }

            this.toLeft = true
            this.toLeft = !this.toLeft
        },

        nextCard(){
            this.currentCard++

            if(this.currentCard > this.termLength){
                this.currentCard = 0
            }

            this.toRight = true
            this.toRight = !this.toRight
        },

        uploadDataToEdit(){
            this.storeEdit.setTitle(this.setTitleParam, this.authorParam)
            this.storeEdit.setTermList(this.store.specificData.terms)
            console.log(this.store.specificData.terms)


        },


    }


})
</script>

<style scoped>

.termLength{
    font-size: 0.9;
    text-align: right;
    margin-right: 25vw;
    color: rgba(255, 255, 255, 0.758);
}
.setTitle{
    font-size: 2rem;
    margin-left: 25vw;
    margin-bottom: 2rem;
}

.setAuthor{
    font-size: 1.2rem;
    margin-left: 25vw;
    margin-bottom: 2rem;
}
.carousel{
    width: 50vw;
    height: 20rem;
    line-height: 1.6rem;
    margin: auto;
    position: relative;
    margin-bottom: 1rem;
    
}

.change{
    position: absolute;
    z-index: 2;
    
    top: 25%;
    font-size: 6rem;
    background-color: transparent;
    outline: none;
    border: none;
    color: var(--color4);
    
}

.change:hover{
    color: #42507a;
}
.next{
    right: 0;
    margin-right: -8rem;
    
    
}
.previous{
    left: 0;
    margin-left: -8rem;
}

.terms{
    box-sizing: border-box;
    width: 48vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.6rem;

}

.noDec{
    text-decoration: none;
    position: relative;
    z-index: 2;
    color: var(--color2);
}




.editButton{
    position: relative;
    background-color: var(--color3);
    width: 10rem;
    height: 3rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    border-radius: 0.3rem;
    margin-bottom: 4rem;
}

.editButton:before{
    border-radius: 0.3rem;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 0;
    background-color: var(--color4);
    z-index: 1; 
    transition: all 0.5s;
    
}
.editButton:hover:before{
    width: 100%;
}

.editButton:hover .noDec{
    color: var(--color3);
}




</style>