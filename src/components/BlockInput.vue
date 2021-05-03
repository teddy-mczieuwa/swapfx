<template>
  <div class="block-input">
      <label>Email Address</label>
      <input type="text" placeholder="emikelucy@gmail.com">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media screen and (min-width: 640px) {
    /* this is a component that groups a label with an input */

    .block-input {
        /* box-model */
        width: 41.4rem;
        
    }

    .block-input--large {
        /* box-model */
        width: 45rem;
        
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
