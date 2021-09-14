<template>
  <div class="fit row wrap q-pt-md">
    <div v-for="city in cities" :key="city.id">
      <city :city="city" class="q-mr-md q-mb-md" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import City from './City.vue';
export default {
  components: { City },
  data() {
    return {};
  },
  methods: {
    ...mapActions('wheater', ['getCities']),
  },
  computed: {
    ...mapGetters('wheater', ['cities']),
  },
  created() {
    this.getCities();
  },
};
</script>

<style lang="stylus" scoped></style>
