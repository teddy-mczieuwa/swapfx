<template>
  <div class="container authentication">
        <img class="landing-logo-left" src="../assets/images/top-left-landing-logo.png" alt="landing page top left logo">
        <img class="landing-logo-right" src="../assets/images/bottom-right-landing-logo.png" alt="landing page bottom right logo">

        <div>
            <div class="authentication-heading">
              <img src="../assets/images/large-logo.png" alt="">
                <!-- <img src="assets/images/text-logo.png" alt="Swapfx logo">
                <h1>Swap<span class="authentication-heading--sub">FX</span></h1> -->
            </div>

            <p>Login to your profile</p>

            <form> 
                <div class="authentication-form-container">
                    <div class="block-input">
                        <label>Email Address</label>
                        <input type="text" placeholder="emikelucy@gmail.com">
                    </div>
                    <div class="block-input">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password">
                    </div>
                </div>
                
                <div class="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>

                <div class="auth-button">
                  <Button title="Login to your profile"/>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import BlockInput from '@/components/BlockInput'
import Button from '@/components/Button'
export default {
  name: 'Authentication',
  components: {
    BlockInput,
    Button
  }
}
</script>

<style scoped>

@media screen and (min-width: 640px) {

    /* center the content of the container */
    .authentication {
        /* positioning */
        display: flex;
        justify-content: center;
        align-items: center;

        /* box-model */
        height: 100vh;
        
        /* typography */
        font-family: 'poppins';
        color: white;

        /* visual */
        background-color: var(--landing-background);
    }

    .authentication-heading {
        /* positioning */
        display: flex;
        align-items: center;
        justify-content: space-around;

        /* box-model */
        margin: 0 auto;
        width: 75%;

        /* typography */
        font-size: 3rem;
        font-weight: 700;

    }

    .authentication-heading img {
        /* box-model */
        height: 5rem;
    }

    .authentication-heading--sub {
        /* typography */
        color: var(--primary);
    }

    p {
        /* box-model */
        margin-top: 4rem;
        margin-bottom: 3rem;

        /* typography */
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
    }

    .authentication-form__container {
        /* positioning */
        display: flex;
        flex-direction: column;
        align-items: center;

        
        /* box-model */
        margin-top: 2rem;
    }
    
    /* position the large logo to the top left */
    .landing-logo-left {
        /* positioning */
        position: absolute;
        top: 0;
        left: 0;
    }

    /* position the smaller logo to the bottom right */
    .landing-logo-right {
        /* positioning */
        position: absolute;
        bottom: 0;
        right: 0;
    }
    
    /* Forgot password link in the authentication page */
    .forgot-password {
        /* box-model */
       
        text-align: right;
        margin-top: 2rem;
        margin-bottom: 2rem;

        /* typography */
        font-size: 1.2rem;
    }

    .forgot-password a {
        text-decoration: none;
        color: var(--primary);
    }

    .auth-button {
        /* box-model */
        width: 100%;

        /* typography */
        font-size: 1.5rem;
        font-weight: bold;
        
        /* visual */
        background-color: var(--primary);
        border-radius: 5px;

        /* misc */
        /* overflow: hidden; */
    }

}

</style>