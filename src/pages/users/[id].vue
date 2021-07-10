<template lang="pug">
h1 user show {{route.params.id}}
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<route lang="yml">
meta:
  layout: none
</route>
