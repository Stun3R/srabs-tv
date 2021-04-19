<template>
  <section
    class="py-4 rounded-lg shadow bg-gradient-to-tr from-srabs-300 to-srabs-100"
  >
    <h2 class="text-xl font-semibold text-center text-white">
      {{ srab.fullname }}
    </h2>
    <img
      :src="`${$config.imageUrl}${srab.memoji.default.url}`"
      draggable="false"
      class="object-contain mx-auto mt-4 h-28 w-28"
      alt=""
    />
    <div class="px-4 mt-4 text-sm italic text-center text-white">
      "{{ twitch.description }}"
    </div>
    <div class="grid grid-cols-2 mt-4">
      <div class="text-center">
        <h3 class="text-lg text-white">{{ twitch.subs }}</h3>
        <span class="text-white uppercase opacity-60">Subs</span>
      </div>
      <div class="text-center border-l border-white">
        <h3 class="text-lg text-white">{{ twitch.followers }}</h3>
        <span class="text-white uppercase opacity-60">Followers</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    srab: {
      type: Object,
      default: () => {},
    },
    twitch: {
      type: Object,
      default: () => {},
    },
  },
  methods: {},
}
</script>

<style></style>
