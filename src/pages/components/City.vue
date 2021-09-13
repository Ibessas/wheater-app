<template>
  <q-card class="my-card">
    <q-card-section> {{ dayPhrase }} </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
  data() {
    return {
      dayPrecipitations: '',
      dayPhrase: '',
      nightPrecipitations: '',
      nightPhrase: '',
    };
  },
  created() {
    this.dayPrecipitations = this.city.DailyForecasts[0].Day.HasPrecipitation;
    this.dayPhrase = this.city.DailyForecasts[0].Day.IconPhrase;
    this.nightPrecipitations = this.city.DailyForecasts[0].Night.HasPrecipitation;
    this.nightPhrase = this.city.DailyForecasts[0].Night.IconPhrase;
    console.log('ue', this.dayPhrase);
  },
};
</script>

<style>
</style>
