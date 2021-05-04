<template>
  <section
    class="py-4 rounded-lg shadow bg-gradient-to-tr from-srabs-300 to-srabs-100"
  >
    <div class="relative md:grid-cols-3">
      <div class="group" @click="$emit('show:hero')">
        <IconsChevronLeft
          class="mt-0.5 text-white group-hover:opacity-70 transition-all group-hover:transform group-hover:scale-125 stroke-current cursor-pointer absolute top-0 left-4"
        />
      </div>

      <h2 class="text-lg font-semibold text-center text-white sm:text-xl">
        {{ srab.fullname }}
      </h2>
      <Socials
        :socials="srab.socials"
        class="mt-0.5 sm:mt-0 absolute top-0 right-4"
      />
    </div>

    <img
      :src="`${$config.imageUrl}${srab.memoji.default.url}`"
      draggable="false"
      class="object-contain mx-auto mt-8 h-28 w-28"
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
