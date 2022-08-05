
<script>
import callAPI from '@/services/callAPI.js';

export default {
    data() {
        return {
            mobs: { type: Object }
        }
    },
    mounted() {
        this.mobs = this.refresh();
    },
    methods: {
        refresh: async function() {
        var response = null;
        var error = null;
        await callAPI.callAPI('http://localhost:3000/mobs', 'GET', {})
            .then((r) => {
                response = r;
                console.log("oui");
                console.log(response);
            })
            .catch((e) => {
                error = e.response;
                console.log("non");
                console.log(error);
            });
        // TODO: set this.mobs to api call
        console.log("refreshed");
        }
    }
}
</script>

<template src="./displayAll.html" />

<style scoped>
    @import "./displayAll.scss";
</style>
