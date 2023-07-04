import { defineStore } from "pinia";
//This store may be used to get data from other users' sets
interface State{
    uid: string,
    author: string,
}


export const useSetStore = defineStore("useSetStore", {
    state: () : State =>{
        return{
            uid: "",
            author: "",
        }
    },
    actions:{
        setTermInfo(uid: string, author: string,){

        }
    },
})
