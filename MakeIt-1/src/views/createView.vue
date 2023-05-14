<template>
    <div>
        <h2>Create</h2>

        <form ref="form" @submit.prevent="" >
            <input type="text" placeholder="Title Your Set" class="title" v-model="formData.title"  >

            <termComponent v-for="c in cardCount" :term="" ></termComponent>

            
            <button @click="resetForm" >text</button>
        </form>

            <button @click="addCard" >Add Card</button>
            <button @click="removeCard" >Remove Card</button>

    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import { useStore } from '@/stores/store';
import termComponent from '@/components/termComponent.vue'
    interface form{
        title: ""

    }
export default defineComponent({
    components:{
        termComponent
    },
    setup () {
        const store = useStore()
        const initialFormData: form = {
            title: "",
        }

        let cardCount = ref(3)

        const formData = ref<form>({...initialFormData})
        const resetForm = () => {
            console.log(formData.value.title)
        Object.assign(formData.value, initialFormData);
    };
        return {store, initialFormData, formData, resetForm, cardCount }

    }
    ,
    methods: {
        addCard(){
            this.cardCount = this.cardCount + 1
            console.log(this.cardCount)
        },
        removeCard(){
            this.cardCount = this.cardCount - 1
            console.log(this.cardCount)
        }
    }
    
})





</script>

<style scoped>

</style>