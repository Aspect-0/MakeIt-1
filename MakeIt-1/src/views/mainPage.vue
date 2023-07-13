<template>
    <div>
        <section class="top">
            <div class="createCard">
                <h3>Create</h3>
            </div>
        </section>
        
        <h2>Your Cards</h2>
        
        <section class="userCards">
 

                <displayTermSet class="sets" v-for="set in store.termList" :set-title="set.title" :author="set.email" :uid="set.uid" :term-count="set.terms.length" ></displayTermSet>
           
        </section>

        <h2>Other Cards</h2>

        <section class="otherCards">
                <displayTermSet class="sets" v-for="set in store.allSets" :set-title="set.title" :author="set.email" :uid="set.uid" :term-count="set.terms.length" ></displayTermSet>

        </section>
  
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

        
        store.getAllSets()

        return {store}
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
.userCards, .otherCards{

    width: 90%;
    margin: auto;
    margin-top: 1rem;
    display: grid;
    justify-content: left;
    grid-template-columns: repeat(calc(v-bind(store.termListLength)), 1fr);
    
    overflow-x: scroll;


    
} 

.otherCards{
    grid-template-columns: repeat(calc(v-bind(store.allSetsLength)/2),1fr) ;
}


 

</style>