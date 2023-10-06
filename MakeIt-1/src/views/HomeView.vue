<template>
  <section class="sec1">
    <div class="container">
      <div class="type head">Welcome to MakeIt-1!</div>
      <div class="type delay">The Worse Quizlet Clone</div>
    </div>

    <div class="slide">
      Made with    
      <img src="../assets/icons8-vue-js.svg" alt=""> 
      <img src="../assets/icons8-firebase.svg" alt=""> 
      <img src="../assets/icons8-typescript.svg" alt="">
    </div>

    <section class="first">
      <div class="text">
        Try out features on this website!
      </div>

      <div class="blob">
        <img class="clipboard" src="../assets//clipboard-svgrepo-com.svg" alt="">
      </div>
    </section>


    
    <div ref="woosh" class="animate">
      Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Facilisis magna etiam tempor orci eu. Dictum at tempor commodo ullamcorper a lacus vestibulum. In egestas erat imperdiet sed euismod nisi porta lorem mollis. At tempor commodo ullamcorper a lacus vestibulum. Diam maecenas sed enim ut sem viverra aliquet. 
    </div>


    <div ref="woosh2" class="animate">

      Thank you for checking out my website!
    </div>

    <div class="bottom">

    </div>

     

  </section>
  
</template>

<script lang="ts">


import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({

  components:{
    
  },
  
  setup () {
    
    const woosh = ref<HTMLElement|null>(null)
    const woosh2 = ref<HTMLElement|null>(null)
    const checkScroll = (el:any) =>{
      const height = el.value?.getBoundingClientRect()

      if(el == woosh &&  height.bottom <= window.innerHeight && height.right <= window.innerHeight){
        el.value?.classList.add("active")
      } else if(el == woosh2 &&  height.bottom <= window.innerHeight && height.right <= window.innerHeight){
        el.value?.classList.add("activeLeft")
      } else{
       el.value?.classList.remove("active")
       el.value?.classList.remove("activeLeft")
      }
    }

   


    onMounted(()=>{
      checkScroll(woosh)
      checkScroll(woosh2)
      window.addEventListener("wheel", ()=>{
        checkScroll(woosh)
        checkScroll(woosh2)
      })

    })

    return{
      woosh,woosh2,
    }
  },
  methods:{
 
  }
})
</script>

<style scoped>

.test{
  margin-bottom: 40rem;
}
.sec1{
  padding: 1rem;
}
.container{
  display: inline-block;
  margin-bottom: 1rem;
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

.slide{ 
  display: flex;
  align-items: center;
  font-size: 2rem;
  animation: slide-in 5s ease-in;
  
  

}
.blob{
  height: 50rem;
  width: 50rem;
  background-image: url(../assets/blob.svg);
  display: flex;
  justify-content: center;
  position: relative;
  right: 0;
  animation: float 3s ease-in-out infinite;
}
.clipboard{
  filter: grayscale(1) invert(1);
  height: 25rem;
  width: 25rem;
  position: relative;
  margin: auto;
  
}

.text{
  font-size: 3rem;
  padding: 1rem;
}

.first{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  

}
.bottom{
  height: 5rem;
  background-color: black;
}

.animate{
  height: 30rem;
  width: 35vw;
  margin-left: 2rem;
  opacity: 0;
}

.aniL{
  text-align: right;
}

.active{
  opacity: 1;
  font-size: 2rem;
  animation: slide-in 0.5s;
}
.activeLeft{
  opacity: 1;
  font-size: 2rem;
  margin-left: auto;
  margin-right: 1rem;
  animation: slide-left 0.5s;
}


@keyframes typing{
  from{width: 0;}
  to {width: 100%;}
}

@keyframes cursor-blink{
  from{ border-color: transparent;}
  to {border-color: orange;}
}
 
@keyframes slide-in{
  0%{
     transform: translateX(-500px);

  }
  100%{
    transform: translateX(0px);
  }
}
 
@keyframes slide-left{
  0%{
     transform: translateX(500px);

  }
  100%{
    transform: translateX(0px);
  }
}

@keyframes float {
  50%{
    transform: translateY(5%);
  }
}


.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
  background-color: red;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}


</style>