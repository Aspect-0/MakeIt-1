<template>
    <div class="container">
        <div class="termContent term">
            {{ termContent }}
        </div>
        <div class="definitionContent def">
            {{ definitionContent }}
        </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        termContent:{
            required: true,
            type: String,
        },
        definitionContent:{
            required: true,
            type: String,
        }
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    .container{
        display: flex;
        width: 100%;
        background-color: var(--color4);
        margin-bottom: 1rem;
        border-radius: 0.3rem;
        padding: 1vw;
        /* line-height: 1.6rem; */
    }

    .term{
        width: 35%;
        position: relative;

    }

    .term:after{
        content: '';
        position: absolute;
        height: 100%;
        width: 2px;
        right: 0;
        margin-right: 2rem;
        
        background: rgba(0, 0, 0, 0.532);
        border-radius: 1rem;

        
    }
    .def{
        width: 65%;
        
    }

</style>