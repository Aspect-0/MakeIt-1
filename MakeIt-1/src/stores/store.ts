
import { defineStore } from 'pinia'
import { termsStore } from './termCreation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase,ref, onValue, set} from "firebase/database";
import { auth } from '@/firebase/config'
interface users{
  username: string,
  password: string
}
interface State {
  user: null|users|any,
  termList: any
}
 
 

export const useStore = defineStore('counter', {
  state:(): State => {
    return{
      user: null,
      termList: [],
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

    },

  
    createTermsList(userID:any){
      const termStore = termsStore()
      const db = getDatabase()
      set(ref(db, 'users/' + `${userID}/` + termStore.title ), {
        email: this.user.email,
        title: termStore.title,
        terms: termStore.termList,
      })

    },

    readUserData(userID:any){
      const uid = userID.uid
      const db = getDatabase()
      console.log(uid)
      const userTermList = ref(db, 'users/' + `${uid}`);
      onValue(userTermList, (titles) =>{
        const title = titles.val()
        this.termList = title
      })
     
 

    },

  }
}
)

 