<template>
    <header class="admin-header">
        <div class="admin-header__content">
            <div class="admin-header__left">
                <img class="ml-2" src="../assets/images/icons/search.png" alt="">
                <img class="ml-2" src="assets/images/icons/calender.png" alt="">
                <span>April 18 2021</span>
            </div>
            
            <div class="admin-header__right">
                <img class="admin-header__photo" src="../assets/images/icons/photo.png" alt="">
                <span>Emike Lucy</span>
                <img src="../assets/images/icons/DownArrow.png" alt="">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style>
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

</style>