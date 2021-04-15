<template>
  <div class="mx-4 mt-4">
    <h3 class="text-lg font-medium opacity-60">Jeux joués en Stream</h3>
    <div class="flex mt-2 overflow-x-scroll">
      <div class="flex">
        <div
          v-for="(game, index) in games"
          :key="index"
          class="relative h-56 mx-2 rounded-lg shadow md:h-64 w-52"
          :class="{ 'ml-0': index === 0 }"
        >
          <div
            class="absolute top-0 bottom-0 left-0 right-0 flex rounded-lg opacity-0 games-logo hover:opacity-100 focus:opacity-100 active:opacity-100"
            :class="game.color"
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
}
</script>

<style></style>
