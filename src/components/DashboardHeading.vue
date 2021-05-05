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
                <button @click="$emit('requestUserDetails')" class="text-medium btn btn--primary btn--full">Request user details</button>
            </div>
        </div>
    </div>

    <!-- <request-user-details v-if="showForm" @close="close"/> -->
    <!-- <notification-overlay @showNotification="showNotification" v-if="showNotification"></notification-overlay> -->
</template>

<script>
import RequestUserDetails from '@/components/RequestUserDetails'
import NotificationOverlay from '@/components/NotificationOverlay'
export default {
    components: {
        RequestUserDetails,
        NotificationOverlay
    },

    data() {
        return {
            showForm: false,
            showNotification: false
        }
    },

    methods: {
        close() {
            this.showForm = false
        },

        sendRequest() {
            console.log('hello')
            this.showNotification = true
        }
        
    }
}
</script>

