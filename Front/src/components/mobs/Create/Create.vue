<script>
import callAPI from '@/services/callAPI.js';

export default {
    data() {
        return {
            mobCaracteristics: { type: Object},
            newMob: { type: Object }
        }
    },
    mounted() {
        this.mobCaracteristics = this.getCaracteristics();
    },
    methods: {
        getCaracteristics: async function() {
            var response = null;
            var error = null;
            this.mobs = null;
            await callAPI.callAPI('http://localhost:3000/mobs/default/caracteristics', 'GET', {})
                .then((r) => {
                    response = r;
                })
                .catch((e) => {
                    error = e.response;
                });
            if (response) {
                this.mobCaracteristics = response.data;
            } else {
                console.log("Doesn't respond");
            }
        }
    }
}
</script>

<template src="./Create.html" />

<style scoped>
    @import "./Create.scss";
</style>
