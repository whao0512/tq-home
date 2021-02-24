<template>
    <v-app>
        <v-main>
            {{$vuetify.lang.t('shortMessage')}} {{$vuetify.lang.t('$vuetify.badge')}}
        </v-main>
    </v-app>
</template>
<script>
    export default {
        name: 'layout',
        data() {
            return {

            }
        },
    }
</script>
<style></style>