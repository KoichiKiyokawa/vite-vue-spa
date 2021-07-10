<template lang="pug">
form(@submit.prevent="submit" class="p-4 border rounded m-4 max-w-150")
  fieldset
    label(for="email") Email:
    input(v-model="form.email" type="email" id="email")
  fieldset
    label(for="password") Password:
    input(v-model="form.password" type="password" id="password")

  button(class="bg-blue-400 p-2 text-white rounded") login
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { reactive } from 'vue-demi'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({ email: '', password: '' })

const st = useLocalStorage('isLoggedIn', false)

function submit() {
  st.value = true

  alert(st.value)
  router.push('/users')
}
</script>

<route lang="yml">
meta:
  layout: none
</route>

<style scoped lang="sass">
label
  @apply block mb-2
form > * + *
  @apply mt-4
input
  @apply border rounded p-2 w-full
</style>
