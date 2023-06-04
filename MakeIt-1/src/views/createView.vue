<template>
    <div class="createPage">
        <h2>Create</h2>

     
            <div class="title">

                <input type="text" placeholder="Title Your Set" class="" required v-model="title">
            </div>



            <termComponent v-for=" (term, index) in store.termList" :key="index
                " :index="index"></termComponent>

            <a class="add" @click="store.addTerm"></a>

            <button @click="create" class="createButton" >Create</button>


 
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { termsStore } from '@/stores/termCreation'
import { useStore } from '@/stores/store'
import termComponent from '@/components/termComponent.vue'
import router from '@/router'
interface form {
    title: ""

}
export default defineComponent({
    components: {
        termComponent
    },
    setup() {
        const store = termsStore()
        const userStore = useStore()
        const title = ref<string>(store.title)


        return { store,title, userStore }

    }
    ,
    methods: {
        create(){
            if(this.title){
                this.createTerms(this.userStore.user.uid)
            this.store.clearTermList()
            }else{
                alert("Please include a title")
            }

        },

        createTerms(uid:any){

            this.store.title = this.title
            console.log(this.store.title)
            this.userStore.createTermsList(uid)
            this.$router.push("/main")
        }
    }

})





</script>

<style scoped>
.createPage {
    background-color: var(--color1);
    min-height: 95vh;
    padding: 1rem;
    position: relative;
    padding-bottom: 8rem;
    color: var(--color5);
    font-family: Raleway;
}

.title{
    height: 4rem;
    background-color: var(--color4);
    border-radius: 10px ;
    margin-bottom: 1rem;
    align-items: center;
    display: flex;
    width: 80vw;
    margin: auto;
    margin-bottom: 1rem;
}

.title input {
    background-color: transparent;
    height: 1.5rem;
    width: 40%;
    background-color: transparent;
    text-decoration: none;
    border: none;
    font-size: 1.5rem;
 
    margin-left: 2rem;
    color: white;

}

.title input:focus{
    border: none;
    text-decoration: none;

    outline: none;

    
}

.title:focus-within{
    border-bottom: 3px solid var(--color5);
 
}

.title input::placeholder{
    opacity: 1;
    color: var(--color6);
}
.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.add {
    position: absolute;
    width: 55px;
    height: 55px;
    background: transparent;
    cursor: pointer;
    border: 4px solid var(--color4);
    border-radius: 10rem;
    bottom: 1; 
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
}

.add:after {
    content: '';
    position: absolute;
    transform: translate(-50%, -50%);
    height: 4px;
    width: 50%;
    background: var(--color4);
    top: 50%;
    left: 50%;
}

.add:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color4);
    height: 50%;
    width: 4px;
}

.add:hover:before,
.add:hover:after {
    background: var(--color1);
    transition: 0.2s;
}

.add:hover {
    background-color: var(--color4);
    transition: 0.2s;
}

.createButton{
    height: 4rem;
    width: 7rem;
    border-radius: 8px;
    background-color: #222fa5;
    color: var(--color5);
    border: none;
    padding: none;
    position: absolute;
    right: 0;
    margin-right: 3rem;
    margin-top: 3rem;
    font-family: "Raleway";

    
}
</style>