import { ApiClient } from 'twitch'
import { StaticAuthProvider } from 'twitch-auth'

export default ({ $config }, inject) => {
  const authProvider = new StaticAuthProvider(
    $config.twitchClientId,
    $config.accessToken
  )
  const apiClient = new ApiClient({ authProvider })

  inject('twitch', apiClient)
}
