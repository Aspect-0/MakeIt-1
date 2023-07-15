import { defineStore } from "pinia";

interface terms{
    id: number
    term: string,
    definition: string,
}

interface State{
    title: string,
    author: string,
    termList: Array<terms>
    idCounter: number
}



export const editStore = defineStore("editStore", {
    state:(): State => {
        return{

            title: "",
            author: "",
            idCounter: 1,
            termList: [{term: "", definition: "", id: 0}],
        }
    },

    actions:{
        addTerm(){
            this.termList.push({term:"", definition:"", id: this.idCounter++})
        },
        removeTerm(input:number){

            console.log(input)
            console.log(this.termList.splice(input,1))
        },
        clearTermList(){
            this.termList = [{term: "", definition: "", id: 0}]
            this.title = ""
            this.author = ""
        },

        setTitle(title: string, author: string,){
            this.title = title
            this.author = author
        },

        setTermList(termList:Array<terms>){
            this.termList = termList
        }


   
    },



})


