<template>
  <div
    class="min-h-screen pb-4 font-display dark:bg-[#202124] transition-colors select-none"
    :class="srabs[1].slug"
    :style="`background-image: var(--${srabs[1].slug}-hideout-${mode});`"
  >
    <ColorMode
      :class="{ 'opacity-0': isSrabVisible }"
      class="fixed transition-opacity duration-200 right-6 top-6"
    />
    <Hero
      v-show="isHeroVisible"
      :srabs="srabs"
      @rotate:srabs="rotateSrabs"
      @show:srab="scrollTo('#details')"
    />
    <section
      v-show="isSrabVisible"
      id="details"
      class="flex-col px-4 pt-4 mx-auto sm:px-8 sm:pt-8 lg:max-w-2xl"
    >
      <ColorMode
        :class="{ 'opacity-0': isHeroVisible }"
        class="fixed hidden transition-opacity duration-200 lg:block right-6 bottom-6"
      />
      <SrabProfile
        v-if="srabs[1].twitch"
        :srab="srabs[1]"
        :twitch="srabs[1].twitch"
        class="mx-auto"
        @show:hero="scrollTo('#hero')"
      />
      <GameList v-if="isSrabVisible" :games="srabs[1].games" class="mx-auto" />
      <SrabTwitch
        v-if="isSrabVisible"
        class="col-span-1 md:col-span-2"
        :channel="srabs[1].channel"
        :twitch="srabs[1].twitch"
      />

      <div class="text-center dark:text-white">
        Made with ❤️ by
        <a
          class="font-semibold hover:text-srabs-300 active:text-srabs-300 focus:text-srabs-300] transition ease-in-out duration-400"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thibaut DAVID
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ payload, $strapi }) {
    if (payload) return { srabs: payload }
    else if (
      process.env.NODE_ENV === 'development' ||
      (process.env.NODE_ENV === 'production' && process.env.STRAPI_URL)
    ) {
      const srabs = await $strapi.$srabs.find()
      return { srabs }
    }
  },
  data() {
    return {
      isHeroVisible: true,
      isSrabVisible: false,
    }
  },
  computed: {
    mode() {
      return this.$colorMode.preference
    },
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
    scrollTo(destination) {
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
          if (destination === '#hero') {
            self.isSrabVisible = false
          } else {
            self.isHeroVisible = false
          }
        },
        x: false,
        y: true,
      }

      if (destination === '#hero') {
        self.isHeroVisible = true
      } else {
        self.isSrabVisible = true
      }
      setTimeout(function () {
        self.$scrollTo(destination, 500, options)
      }, 1)
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
