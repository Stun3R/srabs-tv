<template>
  <div
    class="min-h-screen font-display"
    :class="srabs[1].theme"
    :style="`background-image: var(--${srabs[1].theme}-hideout);`"
  >
    <Hero
      :srabs="srabs"
      :loading="loading"
      :is-hero-visible="isHeroVisible"
      @rotate:srabs="rotateSrabs"
      @show:srab="showSrab"
    />
    <section
      v-show="isSrabVisible"
      id="details"
      class="flex-col px-4 pt-4 mx-auto sm:px-8 sm:pt-8 lg:max-w-2xl"
    >
      <SrabProfile
        v-if="twitchProfile"
        :srab="srabs[1]"
        :twitch-profile="twitchProfile"
        class="mx-auto"
      />
      <GameList :games="srabs[1].games" class="mx-auto" />
      <SrabTwitch
        v-if="isSrabVisible"
        class="col-span-1 md:col-span-2"
        :channel="srabs[1].channel"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      isHeroVisible: true,
      isSrabVisible: false,
      twitchProfile: {},
      srabs: [
        {
          id: 0,
          theme: 'mirakk',
          nickname: 'Mirakk',
          channel: 'mirakk_',
          fullname: 'Karim "Mirakk" El Asli',
          memoji: {
            default: 'mirakk.png',
            smile: 'mirakk_1.png',
          },
          games: [
            {
              name: 'leagueoflegends',
              color: 'bg-[#24649f]',
              img: 'leagueoflegends.jpeg',
              overlay: 'leagueoflegends_logo.png',
            },
            {
              name: 'csgo',
              color: 'bg-[#e6a708]',
              img: 'csgo.jpeg',
              overlay: 'csgo_logo.png',
            },
            {
              name: 'minecraft',
              color: 'bg-[#477b1e]',
              img: 'minecraft.jpeg',
              overlay: 'minecraft_logo.png',
            },
          ],
        },
        {
          id: 1,
          theme: 'leiksa',
          nickname: 'Leiksa',
          channel: 'leiksatv',
          fullname: 'Diane "Leiksa" Guillot',
          memoji: {
            default: 'leiksa.png',
            smile: 'leiksa_1.png',
          },
          games: [
            {
              name: 'leagueoflegends',
              color: 'bg-[#24649f]',
              img: 'leagueoflegends.jpeg',
              overlay: 'leagueoflegends_logo.png',
            },
            {
              name: 'csgo',
              color: 'bg-[#e6a708]',
              img: 'csgo.jpeg',
              overlay: 'csgo_logo.png',
            },
            {
              name: 'minecraft',
              color: 'bg-[#477b1e]',
              img: 'minecraft.jpeg',
              overlay: 'minecraft_logo.png',
            },
          ],
        },
        {
          id: 2,
          theme: 'stun3r',
          nickname: 'Stun3R',
          channel: 'stun3r_',
          fullname: 'Thibaut "Stun3R" David',
          memoji: {
            default: 'stun3r.png',
            smile: 'stun3r_1.png',
          },
          games: [
            {
              name: 'valorant',
              color: 'bg-[#dc3d4b]',
              img: 'valorant.jpeg',
              overlay: 'valorant_logo.png',
            },
            {
              name: 'minecraft',
              color: 'bg-[#477b1e]',
              img: 'minecraft.jpeg',
              overlay: 'minecraft_logo.png',
            },
            {
              name: 'leagueoflegends',
              color: 'bg-[#24649f]',
              img: 'leagueoflegends.jpeg',
              overlay: 'leagueoflegends_logo.png',
            },
            {
              name: 'csgo',
              color: 'bg-[#e6a708]',
              img: 'csgo.jpeg',
              overlay: 'csgo_logo.png',
            },
          ],
        },
      ],
    }
  },
  methods: {
    rotateSrabs(index) {
      const tmp = [...this.srabs]
      if (index === 0) {
        const save = tmp[2]
        tmp[2] = tmp[1]
        tmp[1] = tmp[0]
        tmp[0] = save
      } else if (index === 2) {
        const save = tmp[0]
        tmp[0] = tmp[1]
        tmp[1] = tmp[2]
        tmp[2] = save
      }
      this.srabs = tmp
    },
    async showSrab() {
      this.loading = true
      const self = this
      const options = {
        container: 'body',
        easing: 'ease-in',
        lazy: false,
        offset: 0,
        force: true,
        cancelable: false,
        onStart(element) {},
        onDone(element) {
          self.isHeroVisible = false
        },
        x: false,
        y: true,
      }

      const twitchProfile = await this.$twitch.kraken.channels.getMyChannel()
      const subCount = await this.$twitch.kraken.channels.getChannelSubscriptionCount(
        twitchProfile.id
      )
      twitchProfile.subCount = subCount
      this.twitchProfile = twitchProfile
      this.isSrabVisible = true
      this.loading = false
      this.$scrollTo('#details', 500, options)
    },
  },
}
</script>

<style lang="scss">
.games {
  &-logo {
    transition: opacity 0.2s ease;
  }
}
</style>
