import { getPlace, getSuggestions } from 'src/services/wheater-service';

export async function searchPlaces({ commit }, text) {
  const result = await getSuggestions(text);
  commit('setSuggestions', result);
}

export async function addPlace({ commit }, { Key }) {
  const result = await getPlace(Key);
  commit('addCity', result);
}

export async function clearSuggestions({ commit }) {
  commit('clearSuggestions');
}
