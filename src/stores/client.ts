import { defineStore } from 'pinia'

export const useCurrentClientStore = defineStore({
  id: 'current-client',
  state: () => ({
    id: null as null | string,
    name: '',
  }),
})
