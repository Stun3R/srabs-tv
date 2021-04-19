<template>
  <div
    class="min-h-screen font-display"
    :class="srabs[1].theme"
    :style="`background-image: var(--${srabs[1].theme}-hideout);`"
  >
    <Hero
      :srabs="srabs"
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
        v-if="srabs[1].twitch"
        :srab="srabs[1]"
        :twitch="srabs[1].twitch"
        class="mx-auto"
      />
      <GameList v-if="isSrabVisible" :games="srabs[1].games" class="mx-auto" />
      <SrabTwitch
        v-if="isSrabVisible"
        class="col-span-1 md:col-span-2"
        :channel="srabs[1].channel"
        :twitch="srabs[1].twitch"
      />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const srabs = await $strapi.$srabs.find()
    return { srabs }
  },
  data() {
    return {
      isHeroVisible: true,
      isSrabVisible: false,
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
    showSrab() {
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

      this.isSrabVisible = true
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
