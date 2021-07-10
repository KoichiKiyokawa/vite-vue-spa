<template lang="pug">
h1(class="") users index
.user(v-for="(user, i) in users" :key="i")
  a(:href="`/users/${user.id}`") {{user.name}}
</template>

<script setup lang="ts">
const users: { id: string; name: string }[] = [
  { id: '1', name: 'user1' },
  { id: '2', name: 'user2' },
  { id: '3', name: 'user3' },
]
</script>

<style scoped lang="sass">
h1
  @apply text-lg text-blue-400 px-4 text-44px
</style>

<route lang="yml">
meta:
  layout: none
</route>
