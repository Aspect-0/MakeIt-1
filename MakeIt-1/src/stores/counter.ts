import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from '@/firebase/config'
interface users{
  username: string,
  password: string
}
interface State {
  user: null|users|any
}


export const useCounterStore = defineStore('counter', {
  state:(): State => {
    return{
      user: null
    }
  },
  actions:{
    setUsers(param:any){
      this.user = param
      console.log(this.user)
    },

    async signup(username:string, password:string){
      console.log("signing up")
      const res = await createUserWithEmailAndPassword(auth, username, password )
      if (res){
        this.setUsers(res.user)
        console.log(res.user)
      }else{
        throw new Error("Could not complete signup")
        
      }
    },
    async login(username:string, password: string){
      console.log("logging in")
      const res = await signInWithEmailAndPassword(auth, username, password)
      if (res) {
        this.setUsers(res.user)
        console.log(res.user)
      }else{
        throw new Error ("Could not complete login")
      }
    },
    async signOut(){
      await signOut(auth)
      this.setUsers(null)

    }

  }
}
)
