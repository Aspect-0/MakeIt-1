import { defineStore } from "pinia";
 
import { ref } from "vue";
interface terms{
    term: string,
    definition: string,
}

interface State{
    title: string,
    author: string,
    termList: Array<terms>
}



export const termsStore = defineStore("termsStore", {
    state:(): State => {
        return{

            title: "",
            author: "",
            termList: [
                {term: "", definition: ""}
            ]
        }
    },

    actions:{
        addTerm(){
            this.termList.push({term:"", definition:""})
        },
        removeTerm(input:number){
            this.termList.splice(input, 1)
        },

   
    },



})


