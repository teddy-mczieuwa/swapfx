<template>
    <div class="data-table mt-10">
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
        </table>
    </div>
</template>

<style>

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

</style>