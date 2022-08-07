<script>
import callAPI from '@/services/callAPI.js';
import TreeMenu from '@/components/generic/TreeMenu.vue'

export default {
    data() {
        return {
            mobSchema: { type: Object},
            newMob: { type: Object }
        }
    },
    components: {
        TreeMenu
    },
    mounted() {
        this.mobSchema = this.getSchema();
    },
    methods: {
        getSchema: async function() {
            var response = null;
            var error = null;

            this.mobSchema = null;

            await callAPI.callAPI('http://localhost:3000/mobs/schema', 'GET', {})
                .then((r) => {
                    response = r;
                })
                .catch((e) => {
                    error = e.response;
                });
            if (response) {
                this.mobSchema = response.data;
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
