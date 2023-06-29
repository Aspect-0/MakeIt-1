<template>
    <div>
        <section class="top">
            <div class="createCard">
                <h3>Create</h3>
            </div>
        </section>
        
        <h2>Your Cards</h2>
        
        <section class="userCards">
 

                <displayTermSet class="sets" v-for="set in store.termList" :set-title="set.title" :author="set.email" :term-count="set.terms.length" ></displayTermSet>
           
        </section>

        <h2>Other Cards</h2>

        <section class="otherCards"></section>
  
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/stores/store';
import displayTermSet from '@/components/displayTermSet.vue';
export default defineComponent({
    components:{
        displayTermSet
    },
    setup () {
        const store = useStore()
        store.readUserData(store.user)
        // const termListLength = store.termList.length
        let termListLength = 0

        console.log(store.termList)
        console.log(typeof(store.termList))

        for( const a in store.termList){
            termListLength += 1
        }

        console.log(termListLength)

        return {store, termListLength}
    },
    methods:{

    }
})
</script>

<style scoped>

section{
    margin-bottom: 1rem;
}
.createCard{
    height: 20rem;
    width: 40rem;
    background-color: var(--color4);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    color:white;

}
.userCards{

    width: 90%;
    margin: auto;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(calc(v-bind(termListLength)/2), 1fr);
    overflow-x: scroll;

    
} 

.otherCards{
    
}
 

</style>