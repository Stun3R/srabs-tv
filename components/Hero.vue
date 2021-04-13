<template>
  <div
    v-if="isHeroVisible"
    id="hero"
    class="flex flex-col items-center justify-center h-screen select-none"
  >
    <div class="text-center">
      <h3 class="text-srabs-400" style="transition: color 0.4s ease">
        Une famille pour les gouverner tous
      </h3>
      <h1 class="mt-2 text-2xl font-medium text-gray-900">Choisit ton srab</h1>
    </div>

    <div class="relative flex mt-8 h-60 sm:h-80 md:h-112">
      <blob
        class="absolute top-0 z-0 fill-current h-60 sm:h-80 md:h-112 left-1/2 text-srabs-100"
        style="transition: color 0.4s ease; transform: translate(-50%, 0%)"
      />
      <transition-group
        name="flip-list"
        tag="div"
        class="z-10 flex h-full mx-auto sm:mt-2 md:mt-6"
      >
        <img
          v-for="(srab, index) in srabs"
          :key="srab.id"
          :src="
            require(`~/assets/images/memoji/${
              index !== 1 ? srab.memoji.default : srab.memoji.smile
            }`)
          "
          alt=""
          draggable="false"
          class="object-contain"
          :class="
            index === 1
              ? 'mb-auto mt-16 sm:mt-20 md:mt-36 mx-3 z-50 h-36 sm:h-48 md:h-56 flip-list-item'
              : 'opacity-50 mt-12 h-20 sm:h-28 md:h-40 cursor-pointer'
          "
          @click="$store.dispatch('rotateSrabs', index)"
        />
      </transition-group>
    </div>
    <div
      class="inline-flex items-center bg-srabs-300 text-white text-sm mt-8 mx-auto py-2.5 px-6 rounded-3xl select-none cursor-pointer focus:outline-none hover:bg-srabs-400 active:bg-srabs-400"
      :class="{ 'cursor-not-allow': loading, disabled: loading }"
      style="transition: background-color 0.4s ease"
      @click="showSrab"
    >
      <IconsLoading v-show="loading" />
      Découvrir {{ srabs[1].nickname }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollDone: false,
      loading: false,
    }
  },
  computed: {
    srabs() {
      return this.$store.state.srabs
    },
    isHeroVisible() {
      return this.$store.state.heroVisible
    },
  },
  methods: {
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
          self.$store.dispatch('setHeroVisible', false)
        },
        x: false,
        y: true,
      }

      const twitchProfile = await this.$twitch.kraken.channels.getMyChannel()
      const subCount = await this.$twitch.kraken.channels.getChannelSubscriptionCount(
        twitchProfile.id
      )
      twitchProfile.subCount = subCount
      this.$store.commit('setTwitchProfile', twitchProfile)
      await this.$store.dispatch('setSrabVisible', true)
      this.$scrollTo('#details', 500, options)
      this.loading = false
    },
  },
}
</script>

<style>
.flip-list-move {
  transition: transform 1s;
}

.flip-list-item {
  transition: transform 1s, height 1s;
}
</style>
