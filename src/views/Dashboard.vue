<template>
<DashboardHeading/>
<section class="dashboard-content">
    <div class="dashboard-info">
        <div class="dashboard-data">
            <DashboardDataCard/>
        </div>
        <DashboardChart/>
        <DashboardActivities/>
    </div>
    <DashboardRates/>
</section>
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
