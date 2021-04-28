<template>
    <div class="dashboard-heading">
        <div>
            <h2>Hello <span class="text-bold">Admin,</span></h2>
            <p>Here’s an overview of what’s been going on.</p>
        </div>
        <div class="dashboard-heading__buttons">
            <div class="dashboard-button">
                <button @click="$router.push('/create-user')" class="text-medium btn btn--full btn--white">Create new user</button>
            </div>

            <div class="dashboard-button">
                <button class="text-medium btn btn--primary btn--full">Request user details</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>