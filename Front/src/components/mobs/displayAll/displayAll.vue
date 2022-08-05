
<script>
import callAPI from '@/services/callAPI.js';
import stats from '../../generic/stats/stats.vue'

export default {
    data() {
        return {
            mobs: { type: Object }
        }
    },
    components: {
        stats
    },
    mounted() {
        this.mobs = this.refresh();
    },
    methods: {
        refresh: async function() {
            var response = null;
            var error = null;
            this.mobs = null;
            await callAPI.callAPI('http://localhost:3000/mobs', 'GET', {})
                .then((r) => {
                    response = r;
                })
                .catch((e) => {
                    error = e.response;
                });
            if (response) {
                this.mobs = response.data;
            }
        }
    }
}
</script>

<template src="./displayAll.html" />

<style scoped>
    @import "./displayAll.scss";
</style>
