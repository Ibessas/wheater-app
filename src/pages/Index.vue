<template>
  <q-page class="page q-pa-md">
    <search />
    <city-board />
  </q-page>
</template>

<script>
import Search from './components/Search.vue';
import CityBoard from './components/CityBoard.vue';
export default {
  name: 'PageIndex',
  components: { Search, CityBoard },
};
</script>
