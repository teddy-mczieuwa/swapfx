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
                <button @click="showForm = true" class="text-medium btn btn--primary btn--full">Request user details</button>
            </div>
        </div>
    </div>

    <initiate-form v-if="showForm" @close="close"/>
</template>

<script>
import InitiateForm from '@/components/InitiateForm'
export default {
    components: {
        InitiateForm
    },

    data() {
        return {
            showForm: false
        }
    },

    methods: {
        close() {
            this.showForm = false
        }
    }
}
</script>

