<template>
    <section class="dashboard-heading">
        <div>
            <h2 class="text-bold">
                Conversion Rates
            </h2>
            <p>SwapFx Live Exchange Rates.</p>
        </div>
    </section>

    <div class="fx-table-filter">
        <div class="fx-table-filter__search ml-5">
            <img src="../assets/images/icons/ngn.png" alt="">
            <span>Nigerian Naira</span>
            <img src="../assets/images/icons/DownArrowWhite.png" alt="">
        </div>
    </div>

    <section class="dashboard-content">
        
        <div class="data-table">
            <table>
                <tr>
                    <th>Currency</th>
                    <th>Buying</th>
                    <th>Selling</th>
                    <th>Change (24h)</th>
                
                </tr>

                <tr class="data-table__row fx-table__values">
                    <td>
                        <div class="data-table__name--center">
                            <img src="../assets/images/icons/britain.png" alt="">
                            <p class="ml-4">US Dollar</p>
                        </div>
                    </td>

                    <td>478</td>
                    <td>482</td>
                    <td class="text-red">-0.19</td>
                    
                </tr>

                <tr class="data-table__row fx-table__values">
                    <td>
                        <div class="data-table__name--center">
                            <img src="../assets/images/icons/britain.png" alt="">
                            <p class="ml-4">US Dollar</p>
                        </div>
                    </td>

                    <td>478</td>
                    <td>482</td>
                    <td class="text-red">-0.19</td>
                    
                </tr>

                <tr class="data-table__row fx-table__values">
                    <td>
                        <div class="data-table__name--center">
                            <img src="../assets/images/icons/britain.png" alt="">
                            <p class="ml-4">US Dollar</p>
                        </div>
                    </td>

                    <td>478</td>
                    <td>482</td>
                    <td class="text-red">-0.19</td>
                    
                </tr>

                <tr class="data-table__row fx-table__values">
                    <td>
                        <div class="data-table__name--center">
                            <img src="../assets/images/icons/britain.png" alt="">
                            <p class="ml-4">US Dollar</p>
                        </div>
                    </td>

                    <td>478</td>
                    <td>482</td>
                    <td class="text-red">-0.19</td>
                    
                </tr>

                <tr class="data-table__row fx-table__values">
                    <td>
                        <div class="data-table__name--center">
                            <img src="../assets/images/icons/britain.png" alt="">
                            <p class="ml-4">US Dollar</p>
                        </div>
                    </td>

                    <td>478</td>
                    <td>482</td>
                    <td class="text-red">-0.19</td>
                    
                </tr>

            </table>
            <div class="dashboard-button mt-12 mb-12">
                <button class="text-medium btn btn--full btn--white">Add Currency</button>
            </div>
             </div>
                    
        </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

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

    

    
    .fx-table-filter {

       /* box-model */
       margin-top: 2rem;
       padding-top: 1rem;
       padding-bottom: 1rem;
       width: 100%;

       /* visual */
       background-color: var(--fx-heading);
    }

    .fx-table-filter__search {
        /* positioning */
        display: flex;
        align-items: center;
        justify-content: space-between;

        /* box-model */
        width: 20%;

        /* typography */
        font-family: 'Poppins';
        color: white;
        font-weight: 700;
        font-size: 1.4rem;
    }

    .fx-table__values {
    
        /* typography */
        font-weight: 700;
    }
    
}
</style>