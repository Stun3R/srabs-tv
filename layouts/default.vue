<template>
  <Nuxt
    class="font-display"
    :class="srabs[1].theme"
    :style="`background-image: var(--${srabs[1].theme}-hideout);`"
  />
</template>

<script>
export default {
  computed: {
    srabs() {
      return this.$store.state.srabs
    },
  },
  methods: {},
}
</script>

<style></style>
