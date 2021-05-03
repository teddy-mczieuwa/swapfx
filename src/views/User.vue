<template>

<section class="dashboard-heading">
    <div>
        <h2 class="text-bold">Abubakar Chigozie Omobola</h2>
    </div>
</section>
   
<section class="dashboard-content">
    <div class="dashboard-info">
        <div class="transactions-data">
            <div class="dashboard-data__card mr-10">
                <figure>
                    <img src="../assets/images/icons/transaction2.png" alt="">
                </figure>
                <div class="dashboard-data__card-text">
                    <h2 class="text-black">10</h2>
                    <p>Transactions</p>
                </div>
            </div>
            
            <div class="dashboard-data__balance-card">
                
                <div class="dashboard-data__card-text">
                    <img class="top-left height-75" src="../assets/images/icons/Union1.png" alt="" srcset="">
                    <h2>10</h2>
                    <p>Transactions</p>
                    <img class="bottom-right height-45" src="../assets/images/icons/Union2.png" alt="">
                </div>
            </div>
        </div>
        
    </div>                    
</section>

<nav class="transactions-nav mt-10">
    <div class="transactions-nav__links">
        <router-link :to="{name:'all-transactions'}" class="transactions-nav__links--active">All Transactions</router-link>
        <router-link to="/pending">Pending</router-link>
        <router-link to="/in-progress">In Progress</router-link>
        <router-link to="/completed">Completed</router-link>
    </div>
</nav>
    
<router-view></router-view>


     

</template>

<script>
export default {

}
</script>

<style>
@media screen and (min-width: 640px) {
    
    .transactions-data {
        /* positioning */
        display: flex;

        color: var(--text-color);
    }

    .transactions-nav {
        width: 100%; 
        border-bottom: 1px solid var(--light-gray);

    }

    .transactions-nav__links a {
        /* box-model */
        display: inline-block;
        width: 13rem;
        margin-top: 1rem;

        /* typography */
        text-align: center;
        text-decoration: none;
       
    }

    .transactions-nav__links--active {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }

    
}
</style>