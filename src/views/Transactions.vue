<template>

    <section class="dashboard-heading">
        <div>
            <h2 class="text-bold">
                Transactions
            </h2>
        </div>
    </section>

    <div class="table-filter">
        <div class="table-filter__search">
            <img src="../assets/images/icons/search2.png" alt="">
            <span>Search users</span>
        </div>
        <div class="table-filter__sort">
            <p class="ml-10">Show all</p>
            <img class="fit-image" src="../assets/images/icons/DownArrow.png" alt="">
            <img src="../assets/images/icons/options-2.png" alt="">
            <img src="../assets/images/icons/download.png" alt="">
        </div>
    </div>

    <section class="dashboard-content">
        
        <div class="data-table">
            <table>
                <tr>
                    <th>Transaction ID</th>
                    <th>Customer</th>
                    <th>Date/Time</th>
                    <th>Amount (N)</th>
                    <th>Status</th>
                </tr>

                <tr class="data-table__row">
                    <td  class="data-table__name">
                        <div class="data-table__name--center">
                            <input class="mr-4" type="checkbox">
                            <p class="pl-4 text-primary">0000000000</p>
                        </div>
                    </td>

                    <td>Amaka Benson</td>
                    <td>18 Jul 2018 12:22 PM</td>
                    <td>50,000,000</td>
                    <td>Pending</td>
                </tr>

                <tr class="data-table__row">
                    <td  class="data-table__name">
                        <div class="data-table__name--center">
                            <input class="mr-4" type="checkbox">
                            <p class="pl-4 text-primary">0000000000</p>
                        </div>
                    </td>

                    <td>Amaka Benson</td>
                    <td>18 Jul 2018 12:22 PM</td>
                    <td>50,000,000</td>
                    <td>Pending</td>
                </tr>

                <tr class="data-table__row">
                    <td  class="data-table__name">
                        <div class="data-table__name--center">
                            <input class="mr-4" type="checkbox">
                            <p class="pl-4 text-primary">0000000000</p>
                        </div>
                    </td>

                    <td>Amaka Benson</td>
                    <td>18 Jul 2018 12:22 PM</td>
                    <td>50,000,000</td>
                    <td>Pending</td>
                </tr>

                <tr class="data-table__row">
                    <td  class="data-table__name">
                        <div class="data-table__name--center">
                            <input class="mr-4" type="checkbox">
                            <p class="pl-4 text-primary">0000000000</p>
                        </div>
                    </td>

                    <td>Amaka Benson</td>
                    <td>18 Jul 2018 12:22 PM</td>
                    <td>50,000,000</td>
                    <td>Pending</td>
                </tr>

                <tr class="data-table__row">
                    <td  class="data-table__name">
                        <div class="data-table__name--center">
                            <input class="mr-4" type="checkbox">
                            <p class="pl-4 text-primary">0000000000</p>
                        </div>
                    </td>

                    <td>Amaka Benson</td>
                    <td>18 Jul 2018 12:22 PM</td>
                    <td>50,000,000</td>
                    <td>Pending</td>
                </tr>

                <tr class="data-table__row">
                    <td  class="data-table__name">
                        <div class="data-table__name--center">
                            <input class="mr-4" type="checkbox">
                            <p class="pl-4 text-primary">0000000000</p>
                        </div>
                    </td>

                    <td>Amaka Benson</td>
                    <td>18 Jul 2018 12:22 PM</td>
                    <td>50,000,000</td>
                    <td>Pending</td>
                </tr>

                
                
            </table>
            <div class="pagination">
                <div class="pagination__links">
                    <a href="#" class="flex align-center">
                        <img class="mr-3" src="../assets/images/icons/Mask.png" alt="">
                        <span>Prev</span>
                    </a>
                    <a class="pagination__links--active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#" class="flex align-center">
                        <span>Next</span>
                        <img class="ml-3" src="../assets/images/icons/mask2.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        
    </section>

</template>

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

</style>