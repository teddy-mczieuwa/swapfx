<template>
    <div class="overlay">
        <div class="notification">
            <img @click="close" class="close" src="../assets/images/icons/close.png" alt="">
            
            <figure>
                <img src="../assets/images/icons/success.png" alt="">
                <figcaption>{{message}}</figcaption>
            </figure>
        </div>
    </div>
</template>


<script>
import BlockInput from '@/components/BlockInput'
export default {
    props:["message"],
    components: {
        BlockInput
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 640px) {
    .overlay {
        /* positioning */
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        

        /* box-model */
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;

        /* visual */
        backdrop-filter: blur(6px);
    }

    .notification {
        width: 30%;
        height: 50%;
        background-color: white;
        border: 1px solid var(--light-gray);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .notification figure figcaption {
        /* typography */
        font-family: 'Poppins';
        font-weight: 700;
        color: var(--black);
        font-size: 2.5rem;
        
        /* box-model */
        margin-top: 4rem;
    }
    

    .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }
}
</style>