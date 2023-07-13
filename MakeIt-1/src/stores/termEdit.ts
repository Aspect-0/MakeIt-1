import { defineStore } from "pinia";

interface terms{
    term: string,
    definition: string,
}

interface State{
    title: string,
    author: string,
    termList: Array<terms>
}



export const editStore = defineStore("editStore", {
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

            console.log(input)
            console.log(this.termList.splice(input,1))
        },
        clearTermList(){
            this.termList = [{term: "", definition: ""}]
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


