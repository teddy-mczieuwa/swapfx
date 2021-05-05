<template>
<section class="dashboard-heading">
    <div>
        <h2 class="text-bold">
            <img @click="$router.go(-1)" class="dashboard-heading__back" src="../assets/images/icons/Mask.png" alt="">
            Create new users
        </h2>
        <p>Create a new user’s account by providing the following information.</p>
    </div>
</section>

<Success message="New user created!" v-if="success"/>
     
<form v-else class="create-user-form">
    <div>
        <div class="block-input">
            <label>Name</label>
            <input id="block-input--border" type="text" placeholder="Emike Lucy">
        </div>

        <div class="block-input">
            <label>Phone Number</label>
            <input id="block-input--border" type="text" placeholder="+234812345678">
        </div>
    </div>

    <div class="create-user-form--margin-left">
        <div class="block-input">
            <label>Email Address</label>
            <input id="block-input--border" type="text" placeholder="emikelucy@gmail.com">
        </div>

        <div class="block-input">
            <label>Email Address</label>
            <input id="block-input--border" type="text" placeholder="emikelucy@gmail.com">
        </div>
        
        <div class="mt-8 flex justify-end">
            <button @click="success = !success" class="text-medium btn btn--primary btn--normal">Create new user</button>
        </div>
                                    
    </div>
</form>
</template>

<script>
import Success from '@/components/Success'
export default {
    components: {
        Success
    },
    data() {
        return {
            success: false
        }
    },

}
</script>

<style scoped>
.admin-header {
    /* positioning */
    display: flex;
    justify-content: flex-end;

    /* box-model */
    height: 5.2rem;
    width: 100%;
}

.admin-header__content {
    /* positioning */
    display: flex;
    justify-content: space-between;

    /* box-model */
    width: 35%;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.admin-header__right {
    /* positioning */
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* box-model */
    width: 50%;
    padding-left: 2rem;
   

    /* visual */
    border-left: 1px solid var(--gray);
}

.admin-header__left {
    /* positioning */
    display: flex;
    align-items: center;


    /* box-model */
    width: 50%
}

.admin-header__photo {
    height: 80%;
}


.data-table {
        /* box-model */
        width: 100%;
        margin-top: -2rem;
    }

    .data-table table {
        /* box-model */
        width: 100%;

        /* typography */
        font-size: 1.4rem;
    }

    .data-table table {
        border-collapse: collapse;
    }
    
    .data-table th, td {
        
        /* box-model */
        padding: 16px;
        

        /* typography */
        text-align: left;

      
    }

    tr { border-bottom: 1px solid var(--light-gray);}

    .data-table__name {
        /* typography */
        text-decoration: underline;
        text-underline-offset: .1rem;
        text-decoration-color: var(--primary);
    }

    .data-table__row { color: var(--text-color);}

    .data-table__name--center {
        /* positioning */
        display: flex;
        align-items: center;
        
    
        /* box-model */
        margin-top: -.5rem;
    }

    
.table-filter {
        /* positioning */
        display: flex;
        align-items: center;
        justify-content: space-between;

       /* box-model */
       margin-top: 2rem;
       width: 100%;
       height: 5rem;
    }

    .table-filter__search {
        /* positioning */
        display: flex;
        align-items: center;
        justify-content: space-between;

        /* box-model */
        width: 15%;
    }

    .table-filter__sort {
        /* positioning */
        display: flex;
        justify-content: space-between;

        /* box-model */
        width: 20%;       
    }

    .pagination {
        /* positioning */
        position: relative;

        /* box-model */
        width: 100%;
        height: 5rem;
        margin-top: 2rem;
    }

    .pagination__links {
        /* positioning */
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        right: 0;
        
        /* box-model */
        width: 30%;
        height: 70%;

    }

    .pagination__links a {
        /* box-model */
        padding: .3rem 1.2rem;
        
        /* typography */
        font-family: 'Poppins';
        color: var(--text-color);
        text-decoration: none;
    }

    .pagination__links--active {
        /* typography */
        font-weight: 700;

        /* visual */
        background-color:var(--light-gray);
    }

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