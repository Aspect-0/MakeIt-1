
import { defineStore } from 'pinia'
import { termsStore } from './termCreation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase,ref, onValue, set} from "firebase/database";
import { auth } from '@/firebase/config'
interface users{
  username: string,
  password: string
}
interface terms{
  definition: string,
  term: string,
}

interface database{
  email: string,
  terms: Array<terms>
  title: string,
  uid: string,
}

interface State {
  user: null|users|any,
  termList: Array<database>,
  specificData: any,
  author: string,
  selectUID: string | null,
}
 
 

export const useStore = defineStore('counter', {
  state:(): State => {
    return{
      user: null,
      termList: [],
      specificData: {},
      author: "",
      selectUID: "",
    }
  },
  actions:{
    setUsers(param:any){
      this.user = param
      console.log(this.user)

      if(this.user){
      
              this.author = param.email.slice(0, param.email.length - 10)
              console.log(this.author)



      }
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
        uid: this.user.uid
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
    readSpecificData(userID:any, title:string){
      
      const db = getDatabase()
      const path = ref(db, 'users/' + `${userID}/` + `${title}` )
      onValue(path, (vals) =>{
        const v = vals.val()
        this.specificData = v
      })

    }

  }
}
)

 