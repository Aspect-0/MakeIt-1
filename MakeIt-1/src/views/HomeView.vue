<template>
  <section class="sec1">
    <div class="container">
      <div class="type head">Welcome to MakeIt-1!</div>
      <div class="type delay">The Worse Quizlet Clone</div>
    </div>

 
  </section>
  
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({

  setup () {
    const right = ref()

    return {right}
  }
})
</script>

<style scoped>
 
.container{
  display: inline-block;
}

.head{
  font-size: 5rem;
}

.type{
  overflow: hidden;
  width: 0; 
  white-space: nowrap;
  
  animation: typing 2s steps(30, end) forwards ;
}

.delay{
  animation-delay: 2.5s;
  font-size: 3rem;
}

@keyframes typing{
  from{width: 0;}
  to {width: 100%;}
}

@keyframes cursor-blink{
  from{ border-color: transparent;}
  to {border-color: orange;}
}
 


</style>