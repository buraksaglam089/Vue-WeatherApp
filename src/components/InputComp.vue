<template>
  <div class="search-box">
    <input type="text" class="search-bar" placeholder="Search..." v-model="location" @keydown.enter="onKeydownInput" />

    <a class="info" :href="informationUrl" target="_blank">
      Country Info

    </a>
  </div>

</template>

<script>
export default {
  data() {
    return {
      location: '',
    }
  },
  methods: {
    onKeydownInput() {
      this.$emit('keydown:enter', this.location)
    },

  },
  computed: {
    informationUrl() {
      return `https://en.wikipedia.org/wiki/${this.location}`;
    }
  },
}
</script>