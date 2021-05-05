<template>
    <div class="overlay">
        <form class="modalForm">
            <div  class="modalForm__header">
                <div class="modalForm__heading">
                    <h1>Initiate Transaction</h1>
                    <img @click="close" class="fit-image" src="../assets/images/icons/close.png" alt="">
                </div>
                <p>Enter user’s email address and a form would be sent to them.</p>
            </div>
            
            <div class="modalForm__body">
                <div class="block-input block-input--large">
                    <label>Payment Description</label>
                    <input id="block-input--border" type="text" placeholder="Enter brief description">
                </div>

                <div class="block-input block-input--large">
                    <label>Account Details</label>
                    <input id="block-input--border" type="text" placeholder="Enter receiving account">
                </div>

                <span class="modalForm__attach">
                    <div class="mr-4" style="padding: .4rem; border-radius: 5px; border: 1px solid var(--primary); display: flex; justify-content: center; align-items: center;">
                        <img class="fit-image border" src="../assets/images/icons/attach.png" alt="">
                    </div>
                   <p>Attach Supporting Documents</p>
                </span>

                <div class="modalForm__buttons">
                    <div class="modalForm__cancel">
                        <button @click="close" class="text-medium btn btn--full btn--white">Cancel</button>
                    </div>

                    <div class="modalForm__request">
                        <button @click.prevent="$emit('showNotification')" class="text-medium btn btn--primary btn--full">Send user form</button>
                    </div>
                </div>


            </div>
            
        </form>
    </div>
</template>


<script>
import BlockInput from '@/components/BlockInput'
export default {
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

    .modalForm {
        /* positioning */
        

        /* box-model */
        width: 50%;

       

        /* visual */
        background-color: white;
        border-radius: 10px;
        border: 1px solid var(--primary);
    }

    .modalForm__header {
        /* box-model */
        padding-bottom: 2rem;
        padding-left: 4rem;
        padding-right: 4rem;
        padding-top: 4rem;
        /* visual */
        border-bottom: 1px solid var(--light-gray);
    }

     .modalForm__header p {
        margin-top: 3rem;
    }

    .modalForm__heading {
        /* positioning */
        display: flex;
        justify-content: space-between;
    }

    .modalForm__body {
        /* box-model */
        padding: 2rem 4rem;
    }

    .modalForm__add {
        /* positioning */
        display: flex;
        justify-content: flex-end;
        align-items: center;

        /* box-model */
        width: 50rem; 
        margin-top: 2rem;
        margin-bottom: 2rem;
        
    }

    .modalForm__attach {
        /* positioning */
        display: flex;
        align-items: center;

        /* box-model */
        width: 50rem; 
        margin-top: 2rem;
        margin-bottom: 2rem;
        
    }

    .modalForm__buttons {
        /* positioning */
        display: flex;
        justify-content: space-between;
        /* box-model */
        width: 50rem;
        height: 5rem;
     
    }

    .modalForm__cancel {
        /* box-model */
        width: 40%;
    }

    .modalForm__request {
        /* box-model */
        width: 55%;
    }


/* this is a component that groups a label with an input */

    .block-input {
        /* box-model */
        width: 41.4rem;
        
    }

    .block-input--large {
        /* box-model */
        width: 50rem;
        
    }

    /* Its width is always 100% of its parent  */
    .block-input label {
        /* box-model */
        display: block;
        max-width: 100%;
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;

        /* typography */
        font-size: 1.5rem;
        line-height: 1.8rem;
       
    }

    .block-input input   {
        /* box-model */
        display: block;
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;

        /* typography */
        color: var(--black);
        
        /* visual */
        border-radius: 5px;
        border: none;
    }

    #block-input--border {
        border: 1px solid var(--text-color);
    }
    
    .block-input input::placeholder {
        /* typography */
        font-size: 1.6rem;
        color: var(--text-color);

        /* misc */
        opacity: .6;
        
    }

    
    .block-input input:focus {
        /* visual */
        outline: none;
        border-style: solid;
        border-color: var(--primary);
        border-width: 1px;
        
    }
}
</style>