<template>
    <div ref="page" >
        <div class="aa">
            test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test 
        </div> <div class="aa">
            test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test 
        </div>

        <div ref="slide" class="bb">
            slide slide
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue'
export default defineComponent({
    setup () {
        const page = ref<HTMLElement|null> (null)
        const slide = ref<HTMLElement |null >(null)

        
        onMounted(() => {

            page.value?.addEventListener('wheel', ()=>{
                const bounding = slide.value?.getBoundingClientRect()
                
                console.log(bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || slide.value?.clientHeight) &&
                bounding.right <= (window.innerWidth || slide.value?.clientWidth))

                if( bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || slide.value?.clientHeight) &&
                bounding.right <= (window.innerWidth || slide.value?.clientWidth)){

                    slide.value?.classList.add("active")
                } else {
                    slide.value?.classList.remove("active")
                }

                     console.log(bounding)
        })

        const bounding = slide.value?.getBoundingClientRect()
        console.log(bounding)
        console.log(window.innerHeight)
        if( bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || slide.value?.clientHeight) &&
                bounding.right <= (window.innerWidth || slide.value?.clientWidth)){

                    slide.value?.classList.add("active")
                }


            })

            
            


        return {page,slide}
    },



  
})
</script>

<style scoped>

.bb{
    height: 5rem;
    width: 5rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    opacity: 0;
}


.aa{
    margin-bottom: 40vh;
}
.active{
    transition: all 1s;
    opacity: 1;
    color: yellow;
    visibility: visible;
    animation: slide 1s;
}

@keyframes slide {
    0% {

        transform: translateY(50%);
    } 
    100% {
   
        transform: translateY(0);
    } 
}

</style>