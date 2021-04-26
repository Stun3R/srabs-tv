<template>
  <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.link"
      target="_blank"
      rel="noopener noreferrer"
      class="mx-auto sm:mx-0 text-white sm:!my-auto group"
    >
      <IconsTwitter
        v-if="social.name === 'twitter'"
        class="w-6 h-6 fill-current group-hover:text-[#0aa7e6] transform group-focus:scale-125 group-hover:scale-125 transition ease-in-out duration-400"
      />
      <IconsTwitch
        v-if="social.name === 'twitch'"
        class="w-[1.125rem] h-[1.125rem] fill-current group-hover:text-[#8c57ef] transform group-focus:scale-125 group-hover:scale-125 transition ease-in-out duration-400"
      />
      <IconsInstagram
        v-if="social.name === 'instagram'"
        class="w-6 h-6 transition ease-in-out transform fill-current group-hover:text-pink-500 group-focus:scale-125 group-hover:scale-125 duration-400"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    socials: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
