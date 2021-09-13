// const { api } = require('src/boot/axios');

export async function getSuggestions(text) {
  // const { API_KEY } = process.env;
  // const { results } = await api.get(
  //       `/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${text}`,
  // );
  // return results;
  return [{ Version: 1, Key: '38046', Type: 'City', Rank: 55, LocalizedName: 'Quixadá', Country: { ID: 'BR', LocalizedName: 'Brazil' }, AdministrativeArea: { ID: 'CE', LocalizedName: 'Ceará' } }]
}

export async function getPlace(key) {
  // const { API_KEY } = process.env;
  // const { results } = await api.get(
  //       `/forecasts/v1/daily/1day/${key}?apikey=${API_KEY}`,
  // );
  // return results;
  return {
    Headline: {
      EffectiveDate: '2021-09-14T07:00:00-03:00',
      EffectiveEpochDate: 1631613600,
      Severity: 7,
      Text: 'Less humid tomorrow',
      Category: 'humidity',
      EndDate: '2021-09-14T19:00:00-03:00',
      EndEpochDate: 1631656800,
      MobileLink: 'http://www.accuweather.com/en/br/quixada/38046/daily-weather-forecast/38046?lang=en-us',
      Link: 'http://www.accuweather.com/en/br/quixada/38046/daily-weather-forecast/38046?lang=en-us'
    },
    DailyForecasts: [
      {
        Date: '2021-09-13T07:00:00-03:00',
        EpochDate: 1631527200,
        Temperature: {
          Minimum: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 89.0,
            Unit: 'F',
            UnitType: 18
          }
        },
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false
        },
        Night: {
          Icon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false
        },
        Sources: [
          'AccuWeather'
        ],
        MobileLink: 'http://www.accuweather.com/en/br/quixada/38046/daily-weather-forecast/38046?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/br/quixada/38046/daily-weather-forecast/38046?day=1&lang=en-us'
      }
    ]
  }
}
