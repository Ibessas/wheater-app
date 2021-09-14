import { getPlace, getSuggestions } from 'src/services/wheater-service';

export async function searchPlaces({ commit }, text) {
  const result = await getSuggestions(text);
  commit('setSuggestions', result);
}

export async function addPlace({ commit }, city) {
  const result = await getPlace(city.Key);
  commit('addCity', { ...result, city });
}

export async function removePlace({ commit }, id) {
  commit('removeCity', id);
}

export async function clearSuggestions({ commit }) {
  commit('clearSuggestions');
}

export function getCities({ commit, state }) {
  const cache = JSON.parse(localStorage.getItem('cities'))
  if (cache !== null && cache.length > 0 && (state.cities === null || state.cities.length === 0)) { commit('setCities', cache) }
  return cache
}
