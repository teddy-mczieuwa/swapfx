<template>
<div class="data-table mt-10">
    
    <div class="data-table">
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Account</th>
                <th>Amount (N)</th>
                <th>Status</th>
                <th>Action</th>
            </tr>

            <tr class="data-table__row">
                <td class="data-table__name">
                    <div class="data-table__name--center">
                        <input class="mr-4" type="checkbox">
                        <p>18 Jul 2018</p>
                    </div>
                </td>
                
                <td>School Fees</td>
                <td>0000000001</td>
                <td>50,000,000</td>
                
                <td>Pending</td>
                <td class="flex items-center justify-between">
                    <button class="btn-sm btn--large btn--primary">Notify</button>
                    <button class="btn btn--white ml-4 px-4">
                        <img src="../assets/images/icons/download2.png" alt="">
                    </button>
                    <button class="btn btn--white ml-4 px-4">
                        <img src="../assets/images/icons/corner-up-right.png" alt="">
                    </button>
                </td>
            </tr>

            <tr class="data-table__row">
                <td class="data-table__name">
                    <div class="data-table__name--center">
                        <input class="mr-4" type="checkbox">
                        <p>18 Jul 2018</p>
                    </div>
                </td>
                
                <td>School Fees</td>
                <td>0000000001</td>
                <td>50,000,000</td>
                
                <td>Completed</td>
                <td class="flex items-center justify-between">
                    <button class="btn-sm btn--large btn--primary">Notify</button>
                    <button class="btn btn--white ml-4 px-4">
                        <img src="../assets/images/icons/download2.png" alt="">
                    </button>
                    <button class="btn btn--white ml-4 px-4">
                        <img src="../assets/images/icons/corner-up-right.png" alt="">
                    </button>
                </td>
            </tr>

            <tr class="data-table__row">
                <td class="data-table__name">
                    <div class="data-table__name--center">
                        <input class="mr-4" type="checkbox">
                        <p>18 Jul 2018</p>
                    </div>
                </td>
                
                <td>School Fees</td>
                <td>0000000001</td>
                <td>50,000,000</td>
                
                <td>Pending</td>
                <td class="flex items-center justify-between">
                    <button class="btn-sm btn--large btn--primary">Notify</button>
                    <button class="btn btn--white ml-4 px-4">
                        <img src="../assets/images/icons/download2.png" alt="">
                    </button>
                    <button class="btn btn--white ml-4 px-4">
                        <img src="../assets/images/icons/corner-up-right.png" alt="">
                    </button>
                </td>
            </tr>

            <tr class="data-table__row">
                <td class="data-table__name">
                    <div class="data-table__name--center">
                        <input class="mr-4" type="checkbox">
                        <p>18 Jul 2018</p>
                    </div>
                </td>
                
                <td>School Fees</td>
                <td>0000000001</td>
                <td>50,000,000</td>
                
                <td>In Progress</td>
                <td class="flex items-center justify-between">
                    <button class="btn-sm btn--large btn--primary">Notify</button>
                    <button class="btn btn--white ml-4 px-4">
                        <img src="../assets/images/icons/download2.png" alt="">
                    </button>
                    <button class="btn btn--white ml-4 px-4">
                        <img src="../assets/images/icons/corner-up-right.png" alt="">
                    </button>
                </td>
            </tr>
        </table>
    </div>
    
</div>
</template>

<style scoped>


@media screen and (min-width: 640px) {
.data-table {
        /* box-model */
        /* width: 100%;
        margin-top: -2rem; */
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