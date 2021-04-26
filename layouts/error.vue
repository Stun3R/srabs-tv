<template>
  <div
    class="flex flex-col items-center justify-center h-screen dark:bg-[#202124] transition-colors select-none"
    :style="`background-image: var(--stun3r-hideout-${$colorMode.preference});`"
  >
    <ColorMode class="fixed transition-opacity duration-200 right-6 top-6" />
    <div class="relative flex mt-8 h-60 sm:h-80 md:h-112">
      <blob
        class="absolute top-0 z-0 fill-current h-60 sm:h-80 md:h-112 left-1/2 text-[#d88181]"
        style="transition: color 0.4s ease; transform: translate(-50%, 0%)"
      />
      <h1 class="z-10 m-auto text-white text-8xl">{{ error.statusCode }}</h1>
    </div>
    <div
      class="inline-flex items-center bg-[#c95051] text-white text-sm mt-8 mx-auto py-2.5 px-6 rounded-3xl select-none cursor-pointer focus:outline-none dark:hover:bg-[#d98282] dark:active:bg-[#d98282] hover:bg-[#b91c1c] active:bg-[#b91c1c]"
      style="transition: background-color 0.4s ease"
      @click="navigateHome"
    >
      Accueil
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    navigateHome() {
      if (this.$route.name === 'index') {
        this.$router.go(0)
      } else {
        this.$router.push({ name: 'index' })
      }
    },
  },
}
</script>
