<template>
  <q-card bordered flat class="city__card">
    <q-card-section class="city__name">
      {{ cityName }}
    </q-card-section>
    <q-card-section class="city__day">
      <p>Day: {{ dayPhrase }}</p>
      <p>Precipitations: {{ dayPrecipitations || 'No precipitations' }}</p>
    </q-card-section>
    <q-card-section class="city__night">
      <p>Night: {{ nightPhrase }}</p>
      <p>Precipitations: {{ nightPrecipitations || 'No precipitations' }}</p>
    </q-card-section>
    <q-card-section class="row justify-between">
      <div>
        <p>Hoje: {{ data | toDate }}</p>
        {{ headlineText }}
        <p>
          <a :href="link">Accuweather</a>
        </p>
      </div>
      <q-btn flat size="" icon="close" @click="removeCard" />
    </q-card-section>
  </q-card>
</template>

<script>
import { formatCityName } from '~/utils/utils';
import { mapActions } from 'vuex';
export default {
  props: {
    city: {
      type: Object,
    },
  },
  data() {
    return {
      link: '',
      data: null,
      dayPrecipitations: '',
      dayPhrase: '',
      nightPrecipitations: '',
      nightPhrase: '',
      categoria: '',
      severidade: '',
      headlineText: '',
      tempUnidade: '',
      tempMaxima: 0,
      tempMinima: 0,
    };
  },
  computed: {
    cityName: function () {
      return formatCityName(this.city.city);
    },
  },
  created() {
    this.tempUnidade = this.city.DailyForecasts[0].Temperature.Maximum.Unit;
    this.tempMaxima = this.city.DailyForecasts[0].Temperature.Maximum.value;
    this.tempMinima = this.city.DailyForecasts[0].Temperature.Minimum.value;
    this.headlineText = this.city.Headline.Text;
    this.severidade = this.city.Headline.Severity;
    this.categoria = this.city.Headline.Category;
    this.link = this.city.Headline.Link;
    this.link = this.city.Headline.Link;
    this.link = this.city.Headline.Link;
    this.data = this.city.DailyForecasts[0].Date;
    this.dayPrecipitations = this.city.DailyForecasts[0].Day.HasPrecipitation;
    this.dayPhrase = this.city.DailyForecasts[0].Day.IconPhrase;
    this.nightPrecipitations = this.city.DailyForecasts[0].Night.HasPrecipitation;
    this.nightPhrase = this.city.DailyForecasts[0].Night.IconPhrase;
  },
  methods: {
    ...mapActions('wheater', ['removePlace']),
    removeCard() {
      this.removePlace(this.city.id);
    },
  },
};
</script>

<style lang="stylus" scoped>
.city__card
  width 320px

.city__day
  background-color #00f7ff

.city__night
  background-color #000a96
  color white
</style>
