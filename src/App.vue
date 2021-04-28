<template>

  <div class="container dashboard">
 <SideBar/>
 <main class="main">
   <div class="container-p4">
    <Header/>
    <router-view></router-view>
   </div>
   
 </main>
</div>

</template>

<script>
import SideBar from '@/components/SideBar'
import Header from '@/components/Header'
import DashboardHeading from '@/components/DashboardHeading'
import DashboardDataCard from '@/components/DashboardDataCard'
import DashboardChart from '@/components/DashboardChart'
import DashboardRates from '@/components/DashboardRates'
import DashboardActivities from '@/components/DashboardActivities'

export default {
  components: {
     SideBar,
    Header,
    DashboardHeading,
    DashboardDataCard,
    DashboardChart,
    DashboardRates,
    DashboardActivities
  }
}
</script>


<style>

@media screen and (min-width: 640px) {
















  
*,*::after,*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    /* border-width: 0;
    border-style: solid;
    border-color: gray; */
}


html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;

}

a {color: var(--text-color);}

:root {
    --landing-background: #0C0D1F;
    --fx-heading: #B50E99;
    --primary: #0EB683;
    --green: #DAFFEF;
    --secondary: #F7FBFB;
    --text-color: #979797;
    --black: #2B2B2B;
    --red: #ED0000;
    --gray: #E2E2E8;
    --light-gray: #EDEDED;
    --dark-gray: #2B2B2B;
    
}
    
    /* constrain the width and the height of the container to the browser window */
    .main {
        /* box-model */
        width: 80%;
        margin-left: 20%;
    }
    
    .container {
        /* box-model */
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
    }

    .container-p4 {
        /* box-model */
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        padding-left: 4rem;
        padding-right: 4rem;
    }

    /* form */
    .create-user-form {
        width: 100%;
        display: flex;
    }

    .create-user-form--margin-left {
        margin-left: 4rem;
    }
}







    /* WIDTH - percentages */
    .w-full {width: 100%;}

    .w-1-of-2 {width: 50%;}

    .w-1-of-3 {width: 33.33%;}

    .w-2-of-3 {width: 66.67%;}

    .w-1-of-4 {width: 25%;}

    .w-2-of-4 {width: 50%;}

    .w-3-of-4 {width: 75%;}

    .w-1-of-5 {width: 20%;}

    .w-2-of-5 {width: 40%;}

    .w-3-of-5 {width: 60%;}

    .w-4-of-5 {width: 80%;}

    .w-1-of-6 {width: 16.67%;}

    .w-2-of-6 {width: 33.33%;}

    .w-3-of-6 {width: 50%;}

    .w-4-of-6 {width: 66.67%;}

    .w-5-of-6 {width: 83.33%;}

    .w-1-of-12 {width: 8.33%;}

    .w-2-of-12 {width: 16.67;}

    .w-3-of-12 {width: 25%;}

    .w-4-of-12 {width: 33.33%;}

    .w-5-of-12 {width: 41.67%;}

    .w-6-of-12 {width: 50%;}

    .w-7-of-12 {width: 58.33%;}

    .w-8-of-12 {width: 66.67%;}

    .w-9-of-12 {width: 75%}

    .w-10-of-12 {width: 83.33%;}

    .w-11-of-12 {width: 91.67%;}

    /* HEIGHT */
    .height-45 {height: 45%;}
    .height-75 {height: 75%;}



    /* MARGIN RIGHT */

    .mr-0 {margin-right: 0;}

    .mr-1 {margin-right: .25rem;}

    .mr-2 {margin-right: .5rem;}

    .mr-3 {margin-right: .75rem;}

    .mr-4 {margin-right: 1rem;}

    .mr-5 {margin-right: 1.25rem;}

    .mr-6 {margin-right: 1.5rem;}

    .mr-8 {margin-right: 2rem;}

    .mr-10 {margin-right: 2.5rem;}

    .mr-12 {margin-right: 3rem;}

    .mr-16 {margin-right: 4rem;}

    .mr-20 {margin-right: 5rem;}

    .mr-24 {margin-right: 6rem;}

    .mr-32 {margin-right: 8rem;}

    .mr-40 {margin-right: 10rem;}

    .mr-48 {margin-right: 12rem;}

    .mr-56 {margin-right: 14rem;}

    .mr-64 {margin-right: 16rem;}

    /* MARGIN LEFT*/

    .ml-0 {margin-left: 0;}

    .ml-1 {margin-left: .25rem;}

    .ml-2 {margin-left: .5rem;}

    .ml-3 {margin-left: .75rem;}

    .ml-4 {margin-left: 1rem;}

    .ml-5 {margin-left: 1.25rem;}

    .ml-6 {margin-left: 1.5rem;}

    .ml-8 {margin-left: 2rem;}

    .ml-10 {margin-left: 2.5rem;}

    .ml-12 {margin-left: 3rem;}

    .ml-16 {margin-left: 4rem;}

    .ml-20 {margin-left: 5rem;}

    .ml-24 {margin-left: 6rem;}

    .ml-32 {margin-left: 8rem;}

    .ml-40 {margin-left: 10rem;}

    .ml-48 {margin-left: 12rem;}

    .ml-56 {margin-left: 14rem;}

    .ml-64 {margin-left: 16rem;}


    .-ml-0 {margin-left: 0;}

    .-ml-1 {margin-left: .25rem;}

    .-ml-2 {margin-left: .5rem;}

    .-ml-3 {margin-left: .75rem;}

    .-ml-4 {margin-left: 1rem;}

    .-ml-5 {margin-left: 1.25rem;}

    .-ml-6 {margin-left: 1.5rem;}

    .-ml-8 {margin-left: 2rem;}

    .-ml-10 {margin-left: 2.5rem;}

    .-ml-12 {margin-left: 3rem;}

    .-ml-16 {margin-left: 4rem;}

    .-ml-20 {margin-left: 5rem;}

    .-ml-24 {margin-left: 6rem;}

    .-ml-32 {margin-left: 8rem;}

    .-ml-40 {margin-left: 10rem;}

    .-ml-48 {margin-left: 12rem;}

    .-ml-56 {margin-left: 14rem;}

    .-ml-64 {margin-left: 16rem;}

    /* MARGIN TOP*/

.mt-0 {margin-top: 0;}

.mt-1 {margin-top: .25rem;}

.mt-2 {margin-top: .5rem;}

.mt-3 {margin-top: .75rem;}

.mt-4 {margin-top: 1rem;}

.mt-5 {margin-top: 1.25rem;}

.mt-6 {margin-top: 1.5rem;}

.mt-8 {margin-top: 2rem;}

.mt-10 {margin-top: 2.5rem;}

.mt-12 {margin-top: 3rem;}

.mt-16 {margin-top: 4rem;}

.mt-20 {margin-top: 5rem;}

.mt-24 {margin-top: 6rem;}

.mt-32 {margin-top: 8rem;}

.mt-40 {margin-top: 10rem;}

.mt-48 {margin-top: 12rem;}

.mt-56 {margin-top: 14rem;}

.mt-64 {margin-top: 16rem;}

/* MARGIN BOTTOM*/

.mb-0 {margin: 0;}

.mb-1 {margin: .25rem;}

.mb-2 {margin: .5rem;}

.mb-3 {margin: .75rem;}

.mb-4 {margin: 1rem;}

.mb-5 {margin: 1.25rem;}

.mb-6 {margin: 1.5rem;}

.mb-8 {margin: 2rem;}

.mb-10 {margin: 2.5rem;}

.mb-12 {margin: 3rem;}

.mb-16 {margin: 4rem;}

.mb-20 {margin: 5rem;}

.mb-24 {margin: 6rem;}

.mb-32 {margin: 8rem;}

.mb-40 {margin: 10rem;}

.mb-48 {margin: 12rem;}

.mb-56 {margin: 14rem;}

.mb-64 {margin: 16rem;}

/* PADDING */
.px-0 {padding: 0;}

.px-1 {padding: 0 .25rem;}

.px-2 {padding: 0 .5rem;}

.px-3 {padding: 0 .75rem;}

.px-4 {padding: 0 1rem;}

.px-5 {padding: 0 1.25rem;}

.px-6 {padding: 0 1.5rem;}

.px-8 {padding: 0 2rem;}


/* POSITION */
.top-left {
    position: absolute;
    top:0;
    left:0
}

.bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
}

    /* FONT WEIGHT */
    .text-bold {font-weight: 700;}
    .text-medium {font-weight: 500;}

    /* BADGE */
    .name-badge {
        /* positioning */
        display: flex;
        align-items: center;
        justify-content: center;

        /* box-model */
        width: 4rem;
        height: 4rem;

        /* typography */
        color: var(--primary);
        
        /* visual */
        background-color: var(--green);
        border-radius: 100%;
    }

    /* HIGHLIGHT TEXT */
    .highlight--primary { 
        /* typography */
        font-weight: 400;
        color: var(--primary);
    }

    .text-primary {color: var(--primary);}
    .text-red {color: var(--red);}
    .text-black {color: var(--black)}
    .text-white {color: white;}

    /* BORDER */
    .border-none {
        border: none;
    }

    .border-gray {
        border: 1px solid var(--text-color);
    }

    /* FLEX */
    .flex {display: flex;}
    .justify-end {justify-content: flex-end;}
    .justify-center {justify-content: center;}
    .justify-between {justify-content: space-between;}

    .align-center {align-items: center;}
    .flex-col {flex-direction: column;}


    /* OBJECT FIT */
    .fit-image {
        object-fit: contain;
    }




</style>
