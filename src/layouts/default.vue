<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    let string = 'Home Page';

    return {
      titleTemplate: `%s - ${string}`,
      htmlAttrs: {
        class: `min-h-screen ${this.$colorMode.value}`,
      },
      meta: [
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: string,
        },
      ],
    };
  },
  components: {
  },
  computed: {},
});
</script>

<template>
  <div>

    <Navbar />
    <Footer />
  </div>
</template>
