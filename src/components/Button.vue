<template>
    <button class="btn btn--full btn--primary">{{title}}</button>
</template>

<script>
export default {
    props:["title"]
}

</script>
<style>
@media screen and (min-width: 640px) {
    
    /* call to action button */
    .btn {
        /* box-model */
        display: inline-block;
        padding-top: 1rem;
        padding-bottom: 1rem;

        /* typography */
        text-align: center;

        /* visual */
        border:none;
        border-radius: 5px;
    }

    .btn-sm {
        /* box-model */
        display: inline-block;
        padding-top: .5rem;
        padding-bottom: .5rem;

        /* typography */
        text-align: center;

        /* visual */
        border:none;
        border-radius: 5px;
    }

    /* button takes up the full width of its parent */
    .btn--full { width: 100%;}
    .btn--large { width: 75%;}


    .btn--primary {
        /* typography */
        color: white;
        font-family: 'Poppins';

        /* visual */
        background-color: var(--primary);
        border: 1px solid var(--primary);

    }

    .btn--normal {width: 50%;}

    .btn--white {
        /* typography */
        color: var(--black);
        font-family: 'Poppins';

        /* visual */
        background-color: white;
        border: 1px solid var(--primary);
    }
}
</style>