
<script>
export default {
    props: {
        name: { Type: String, required: true },
        allStats: { Type: Object, required: true },
    }
}
</script>

<template>

<div class="listOfStats">
    {{ name }}:
    <div class="stats" v-for="(attribut, value) in allStats" :key="attribut">
        {{ value }}: {{ attribut }}
    </div>
</div>

</template>

<style scoped>
.listOfStats {
    padding: 3px;
    max-width: fit-content;
}

.stats {
    padding-left: 20px;
}
</style>
