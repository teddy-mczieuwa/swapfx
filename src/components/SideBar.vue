<template>
    <aside class="sidebar">
        <img class="sidebar__logo" src="../assets/images/full_logo.png" alt="SwapFX logo">
        <ul>
            <li>
                <router-link to="/">
                    <div>
                        <img src="../assets/images/icons/dashboard.png" alt="Admin dashboard panel">
                        <span>Dashboard</span>
                    </div>
                </router-link>
                
            </li>
            <li>
                <router-link to="/users">
                    <div>
                        <img src="../assets/images/icons/users.png" alt="Admin users panel">
                        <span>Users</span>
                    </div>
                </router-link>
                
            </li>
            <li>
                <router-link to="/transactions">
                <div>
                <img src="../assets/images/icons/transaction.png" alt="Admin transactions panel">
                <span>Transactions</span>
                </div>
                </router-link>
                
                
               
                
            </li>
            <li>
                <router-link to="/conversion-rates">
                    <div>
                        <img src="../assets/images/icons/conversion.png" alt="Admin conversions panel">
                        <span>Conversion Rates</span>
                    </div>
                </router-link>
                
            </li>
        </ul>

        <div class="sidebar__logout">
            <img src="../assets/images/icons/logout.png" alt="Logout button">
            <span>Log Out</span>
        </div>
    </aside>
</template>

<style scoped>
/* dashboard side navigation */
.sidebar {
    /* positioning */
    position: fixed;
    /* box-model */
    width: 20%;
    height: 100vh;

    /* visual */
    background-color: var(--secondary);

    /* misc */
    

}

.sidebar ul {
    /* box-model */
    margin-left: 4rem;
    margin-top: 10rem;
}

.sidebar ul li {
    /* positioning */
    display: flex;
    justify-content: flex-start;

    /* box-model */
    margin-bottom: 3rem;
}

.sidebar ul li a {
    text-decoration: none;
}

.router-link-exact-active {
    color: var(--primary);
}

.sidebar ul li img {
    /* box-model */
    margin-right: 2rem;
    /* misc */
    object-fit: contain;
}


.sidebar__logo {

    /* positioning */
    display: block;

    /* box-model */
    margin-top: 4rem;
    margin-left: 4rem;
}

.sidebar__logout {
    /* positioning */
    display: flex;
    justify-content: space-between;

    /* box-model */
    margin-left: 4rem;
    margin-top: 25rem;
    width: 10rem;
    
    /* typography */
    color: var(--red);
}

.sidebar__logout img { object-fit: contain; }
</style>