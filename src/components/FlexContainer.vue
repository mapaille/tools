<script setup lang="ts">
</script>

<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    div {
        display: flex;
        gap: 0.5rem;
        background-color: lightgray;
        padding: 0.5rem;
        width: fit-content;
        font-size: 1rem;
    }
</style>
