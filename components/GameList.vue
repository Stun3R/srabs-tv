<template>
  <div class="mx-4 mt-4">
    <h3 class="text-lg font-medium opacity-60 dark:text-white dark:opacity-75">
      Jeux joués en Stream
    </h3>
    <div class="flex mt-2 overflow-x-scroll">
      <div class="flex space-x-4">
        <div
          v-for="(game, index) in games"
          :key="index"
          class="relative h-56 rounded-lg shadow md:h-64 w-52"
        >
          <div
            class="absolute top-0 bottom-0 left-0 right-0 flex rounded-lg opacity-0 games-logo hover:opacity-100 focus:opacity-100 active:opacity-100"
            :style="{ 'background-color': game.color }"
          >
            <img
              :src="`${$config.imageUrl}${game.overlay.url}`"
              class="object-contain w-32 m-auto"
              alt=""
            />
          </div>
          <img
            class="object-cover h-full rounded-lg"
            :src="`${$config.imageUrl}${game.image.url}`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      colors: ['#dc3d4b', '#24649f', '#e6a708', '#477b1e'],
    }
  },
}
</script>

<style></style>
