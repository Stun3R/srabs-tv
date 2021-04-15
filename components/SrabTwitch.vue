<template>
  <div class="mx-auto my-8">
    <h3 class="flex text-lg font-medium opacity-60">
      Le stream est en ligne
      <Ping />
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
  },
}
</script>

<style></style>
