<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  mounted() {
    // eslint-disable-next-line no-console
    console.log('Hello World', import.meta.PORT);
  },
});
</script>
