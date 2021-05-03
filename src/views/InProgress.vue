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
                    <button class="btn btn--white ml-4 px-4">Hi</button>
                    <button class="btn btn--white ml-4 px-4">Hi</button>
                </td>
            </tr>
        </table>
    </div>
    
</div>
</template>

<style>
@media screen and (min-width: 640px) {
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

    .dashboard {
        /* positioning */
        display: flex;

        /* typography */
        font-family: 'Poppins';
        font-size: 1.6rem;
        color: var(--text-color);
    }

    
    .dashboard-heading {
        /* positioning */
        display: flex;
        justify-content: space-between;

        /* box-model */
        width: 100%;
        max-width: 100%;
        margin-top: 3rem;
    }

    .dashboard-heading h2 {
        /* typography */
        font-family: 'Poppins';
        font-weight: 700;
        color: var(--black);
    }

    .dashboard-heading__back {
       
        /* box-model */
        height: 1.2rem;
        padding-bottom: .2rem;
        margin-right: 2rem;
    }

    .dashboard-heading__buttons {
        /* positioning */
        display: flex;
        justify-content: space-between;
        align-items: center;

        /* box-model */
        width: 45%;
        height: 100%;
    }

    .dashboard-button {
        
        /* box-model */
        width: 21rem;

        /* visual */
        border-radius: 5px;
    }

    .dashboard-content {
        /* postitioning */
        display: flex;
        justify-content: space-between;

        /* box-model */
        margin-top: 2rem;
        width: 100%;
    }

    .dashboard-info {
        /* box-model */
        width: 73%;
    }

    .dashboard-data {
        /* positioning */
        display: flex;
        justify-content: space-between;
    }

    .dashboard-data__card {
        /* positioning */
        display: flex;

        /* box-model */
        width: 30%;
        height: 10rem;

        /* visual */
        border-radius: 8px;
        border: 1px solid var(--gray);
    }

    .dashboard-data__balance-card {
        /* positioning */
        position: relative;

        /* box-model */
        width: 30%;
        height: 10rem;

        /* typography */
        text-align: center;
        color: white;

        /* visual */
        border-radius: 8px;
        border: 1px solid var(--gray);
        background-color: var(--primary);
    }



    .dashboard-data__card figure {
        /* positioning */
        display: flex;
        justify-content: center;
        align-items: center;

        /* box-model */
        width: 40%;
        
    }

    .dashboard-data__card-text {
        /* box-model */
        padding-top: 3rem;
        padding-bottom: 2rem;

        /* typography */
        line-height: 2rem;
    }

    .dashboard-data__card-text p {
        /* typography */
        font-size: 1.2rem;
    }

    .dashboard-rates {
        /* box-model */
        width: 24%;
        padding-left: 2rem;
        padding-top: 2rem;
        height: 50rem;

        /* typography */
        color: var(--black);
        font-family: 'Poppins';
        
        /* visual */
        border: 1px solid var(--gray);
        border-radius: 5px;
    }

    .dashboard-rates ul {
        /* visual */
        list-style: none;
    }

    .dashboard-rates ul li {
        /* positioning */
        display: flex;

        /* box-model */
        padding-top: 2rem;

        /* typography */
        color: var(--dark-gray);
    }

    .dashboard-rates ul li h3 {
        /* typography */
        font-size: 1.4rem;

        /* box-model */
        margin-left: 2rem;
    }

    .dashboard-rates ul li p {
        /* typography */
        font-size: 1.4rem;
        color: var(--text-color);

        /* box-model */
        margin-left: 2rem;
    }

    .dashboard-chart {
        /* box-model */
        width: 100%;
        height: 35rem;
        margin-top: 5rem;


        border: 1px solid;
    }

    .dashboard-activity__heading {
        /* positioning */
        display: flex;
        justify-content: space-between;
        align-items: center;

        /* box-model */
        margin-top: 2rem;
        margin-bottom: 2rem;

        /* typography */
        font-family: 'Poppins';
    }

    .dashboard-activity__heading h4 {
        /* typography */
        color: var(--black);
    }

    .dashboard-activity__heading p {
        /* box-model */
        margin-right: 3rem;

        /* typography */
        font-size: 1.4rem;
        color: var(--primary);
        
    }

    .dashboard-activity__list-item {
        /* positioning */
        display: flex;
        align-items: center;

        /* box-model */
        margin-bottom: 1rem;
    }

    .dashboard-activity__text {
        /* box-model */
        margin-left: 2rem;
        margin-top: 1.4rem;
    
        /* typography */
        line-height: 2rem;
    }

    
    .dashboard-activity__list-item p {

        /* typography */
        color: var(--black);
        font-weight: 900;
    }
}
</style>