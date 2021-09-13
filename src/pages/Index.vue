<template>
  <q-page class="page q-pa-md">
    <q-select
      v-model="selected"
      use-input
      :options="suggestions"
      label="Adicione uma nova cidade"
      filled
      @filter="searchPlace"
      input-debounce="1000"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PageIndex',
  data() {
    return {
      selected: null,
      search: '',
      fetching: false,
    };
  },
  computed: {
    ...mapGetters('wheater', ['suggestions']),
  },

  methods: {
    ...mapActions('wheater', ['searchPlaces']),

    async searchPlace(value, update) {
      if (value) {
        this.fetching = true;
        await this.searchPlaces(value);
        this.fetching = false;
        update();
      }
    },
  },
};
</script>

<style lang="sass" scoped></style>
