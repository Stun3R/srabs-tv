<template>
  <div>
    <Hero />
    <div v-if="isSrabVisible" id="details" class="min-h-screen pt-4">
      <SrabProfile class="mx-4" />
      <section class="mt-4">
        <h3 class="mx-4 text-lg font-medium opacity-50">
          Jeux joués en Stream
        </h3>
        <div class="flex mx-2 mt-2 overflow-x-scroll">
          <div class="flex">
            <div
              v-for="(game, index) in srabs[1].games"
              :key="index"
              class="relative h-56 mx-2 rounded-lg shadow w-44"
            >
              <div
                class="absolute top-0 bottom-0 left-0 right-0 flex rounded-lg opacity-0 games-logo hover:opacity-100 focus:opacity-100 active:opacity-100"
                :class="`bg-[${game.color}]`"
              >
                <img
                  :src="require(`~/assets/images/games/${game.overlay}`)"
                  class="object-contain w-32 m-auto"
                  alt=""
                />
              </div>
              <img
                class="object-cover h-full rounded-lg"
                :src="require(`~/assets/images/games/${game.img}`)"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    srabs() {
      return this.$store.state.srabs
    },
    isSrabVisible() {
      return this.$store.state.srabVisible
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.games {
  &-logo {
    transition: opacity 0.2s ease;
  }
}
</style>
