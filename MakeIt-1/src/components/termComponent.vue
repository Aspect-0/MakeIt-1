<template>
  <div class="termCard" >

      <h1>{{ index + 1 }}</h1>

      <input type="text" @input="pushTerm" v-model="term" placeholder="Enter Term"  >
      <input type="text" @input="pushDefinition" v-model="definition" placeholder="Enter Definition" >

      <button>Image</button>

      <a class="close" v-show="store.termList.length != 1 " @click="store.removeTerm(index)" ></a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'


interface terms{
  id: number,
  term: string,
  definition: string,
}

interface State{
  title: string,
  author: string,
  termList: Array<terms>
  idCounter: number
  removeTerm: (index: number) => void
}

export default defineComponent({
  props:{
      index: {
          type: Number,
          required: true,
      },
      store:{
          type: Object as () => State,
          required: true,
      }
  },
  setup (props) {
     
    
      const term = ref<string>(props.store.termList[props.index].term)
      const definition = ref<string>(props.store.termList[props.index].definition)
     
      return {term, definition}
  },

  methods:{
    pushTerm(){
      this.store.termList[this.$props.index].term = this.term
    },
    pushDefinition(){
      this.store.termList[this.$props.index].definition = this.definition
    }
  }
  
})
</script>

<style scoped>

.termCard{
  width: 80vw;
  height: 20vh;
  border-radius: 10px;
  background-color: var(--color4);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--color5);
  margin: auto;
  margin-bottom: 1rem;
  position: relative;

}

input{
  height: 1.5rem;
  width: 40%;
  background-color: transparent;
  text-decoration: none;
  border: none;
  font-size: 1.5rem;
  border-bottom: 3px solid var(--color5);
  color: white;
}
input:focus{
  border: none;
  text-decoration: none;
  border-bottom: 3px solid yellow;
  outline: none;
}

::placeholder{
  opacity: 1;
  color: var(--color6);
}



.close {
position: absolute;
right: 0px;
top: 32px;
width: 32px;
height: 32px;
opacity: 0.3;
}
.close:hover {
opacity: 1;

}
.close:before, .close:after {
position: absolute;
left: 15px;
content: ' ';
height: 33px;
width: 3px;
background-color: red;
}
.close:before {
transform: rotate(45deg);
}
.close:after {
transform: rotate(-45deg);
}



</style>