<template>
  <q-select
    v-model="selected"
    emit-value
    :options="suggestions"
    label="Adicione uma nova cidade"
    use-input
    filled
    @filter="searchPlace"
    input-debounce="100"
  >
    <template v-slot:option="item">
      <q-item>
        <q-item-section @click="addCard(item)">
          <q-item-label> {{ getLocation(item) }} </q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PageIndex',
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    ...mapGetters('wheater', ['suggestions']),
  },

  methods: {
    ...mapActions('wheater', ['searchPlaces', 'clearSuggestions', 'addPlace']),
    getLocation({ opt }) {
      const { LocalizedName, AdministrativeArea, Country } = opt;
      return (
        LocalizedName + ' - ' + AdministrativeArea.LocalizedName + ' - ' + Country.LocalizedName
      );
    },
    async searchPlace(value, update) {
      if (value) {
        await this.searchPlaces(value);
        update();
      }
    },
    async addCard({ opt }) {
      await this.addPlace(opt);
    },
  },
};
</script>

<style lang="sass" scoped></style>
