<template>
    <div>
        
        <AppHeader />
        <Nuxt />
        <AppFooter />
        <WhatsApp />
    </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
import WhatsApp from '~/components/WhatsApp.vue';

    export default {
        name : 'default',
        components : {
            AppHeader,
            AppFooter,
            WhatsApp,
        }

    }
</script>

<style scoped>

</style>