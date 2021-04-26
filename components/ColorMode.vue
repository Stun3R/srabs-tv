<template>
  <client-only>
    <div
      class="p-1 text-white transition-transform transform bg-gray-800 rounded-full shadow cursor-pointer dark:text-gray-600 dark:bg-white sm:p-3 hover:scale-110"
      @click="switchMode"
    >
      <IconsSun
        v-if="$colorMode.value === 'light'"
        class="sm:h-7 sm:w-7 md:h-6 md:w-6"
      />
      <IconsMoon v-else class="sm:h-7 sm:w-7 md:h-6 md:w-6" />
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    switchMode() {
      this.$colorMode.value === 'light'
        ? (this.$colorMode.preference = 'dark')
        : (this.$colorMode.preference = 'light')
    },
  },
}
</script>

<style></style>
