<template>
    <div class="created-user-success">
        <figure>
            <img src="../assets/images/icons/success.png" alt="">
            <figcaption>{{message}}</figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    props:['message']
}
</script>

<style>
    .created-user-success {
        /* positioning */
        margin: 0 auto;
    
        text-align: center;

        /* box-model */
        width: 100%;
        height: 100%;
    }

    .created-user-success figure { margin-top: 10rem;}

    .created-user-success figure figcaption {
        /* typography */
        font-family: 'Poppins';
        font-weight: 700;
        color: var(--black);
        font-size: 2.5rem;
        
        /* box-model */
        margin-top: 4rem;
    }
</style>