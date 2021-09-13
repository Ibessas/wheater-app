export function addCity(state, city) {
  state.cities.push(city);
}

export function removeCity(state, cityIndex) {
  if (state.citites.length > 0) state.cities.splice(cityIndex, 1);
}

export function setSuggestions(state, suggestions) {
  state.suggestions = suggestions;
}

export function clearSuggestions(state) {
  state.suggestions = [];
}
