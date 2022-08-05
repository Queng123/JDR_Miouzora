
<script>
export default {
    props: {
        name: { Type: String, required: true },
        allStats: { Type: Object, required: true },
    }
}
</script>

<template src="./stats.html" />

<style scoped>
    @import "./stats.scss";
</style>
