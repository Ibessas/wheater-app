import { v4 } from 'uuid';

export function addCity(state, city) {
  const id = v4()
  state.cities.push({ id, ...city });
  localStorage.setItem('cities', JSON.stringify(state.cities))
}

export function setCities(state, cities) {
  state.cities = cities
  return state.cities
}

export function removeCity(state, id) {
  if (state.cities.length > 0) {
    let index = -1;
    state.cities.map((el, i) => {
      if (el.id === id) {
        index = i
      }
    });
    if (index !== -1) state.cities.splice(index, 1);
    localStorage.setItem('cities', JSON.stringify(state.cities))
  }
}

export function setSuggestions(state, suggestions) {
  state.suggestions = suggestions;
}

export function clearSuggestions(state) {
  state.suggestions = [];
}
