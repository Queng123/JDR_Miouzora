
<script>
import callAPI from '@/services/callAPI.js';
import stats from '@/components/generic/stats.vue'

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

<template>

<font-awesome-icon icon="fa-solid fa-arrows-rotate fa-4x" size="xl" @click="refresh"/>
<div class="mobList" v-for="mob in this.mobs" :key="mob">
    <div class="mobName">Name: {{ mob.name }}</div>
    <div class="mobType">Type: {{ mob.type }}</div>
    <div class="mobAge">Age: {{ mob.age }}</div>
    <div class="mobDescription">Description: {{ mob.description }}</div>
    <div v-if="mob.stats">
        <div class="mobHealth">Health: {{ mob.stats.health }}</div>
        <div class="mobSoul">Soul: {{ mob.stats.soul }}</div>
        <div class="mobNama">Nama: {{ mob.stats.nama }}</div>
        <stats :allStats="mob.stats.caracteristics" name="Caracteristics"/>
        <div class="comp">
            <stats :allStats="mob.stats.resistance" name="Resistance" class="resistance"/>
            <stats :allStats="mob.stats.strenght" name="Strenght" class="strenght"/>
        </div>
    </div>
</div>

</template>

<style scoped>
.mobList {
    background-color:black;
    color: white;
    padding: 4px;
    margin: 2px;
    border-radius: 10px;
    max-width: fit-content;
    min-width: 400px;
}

.mobName {
    font-size: 20px;
}

.resistance {
    position: relative;
    float: right;
}

.comp {
    display: inline-block;
    width: 100%;
    height: auto;
}

</style>
