<script setup lang="ts">
import FlexContainer from './FlexContainer.vue';

const props = defineProps<{
  title: string
}>()
</script>

<template>
    <h3>{{ props.title }}</h3>
    <FlexContainer>
        <slot></slot>
    </FlexContainer>
</template>

<style scoped lang="scss">
</style>
