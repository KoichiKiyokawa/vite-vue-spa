import { useCurrentClientStore } from '~/stores/client'

export const UserRepository = {
  get baseEndpoint(): string {
    const currentClient = useCurrentClientStore()
    return `clients/${currentClient.id}/users`
  },

  async find() {
    fetch(this.baseEndpoint, {})
  },
}
