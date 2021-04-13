import { ApiClient } from 'twitch'
import { StaticAuthProvider } from 'twitch-auth'

export default (ctx, inject) => {
  const authProvider = new StaticAuthProvider(
    process.env.TWITCH_CLIENT_ID,
    process.env.STUN3R_ACCESS_TOKEN
  )
  const apiClient = new ApiClient({ authProvider })

  inject('twitch', apiClient)
}
