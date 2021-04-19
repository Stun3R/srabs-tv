<template>
  <div class="mx-auto my-8">
    <h3 class="flex text-lg font-medium opacity-60">
      Le stream est&nbsp;
      <span
        v-if="twitch.status"
        class="font-semibold text-green-600 opacity-100"
      >
        en ligne
      </span>
      <span v-else class="font-semibold text-red-700 opacity-100">
        hors-ligne
      </span>
      <Ping v-if="twitch.status" />
    </h3>

    <div class="flex flex-col mt-2 md:flex-row">
      <twitch-player
        width="100%"
        height="100%"
        class="w-full h-[200px] sm:h-[324px] md:h-[396px] lg:h-[342px] col-span-2"
        :channel="channel"
        :plays-inline="true"
      />
    </div>
  </div>
</template>

<script>
import TwitchPlayer from 'vue-twitch-player'

export default {
  components: {
    TwitchPlayer,
  },
  props: {
    channel: {
      type: String,
      default: '',
    },
    twitch: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
