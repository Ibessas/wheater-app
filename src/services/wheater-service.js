const { api } = require('src/boot/axios');

export async function getSuggestions(text) {
  const { API_KEY } = process.env;
  const { results } = await api.get(
    `/current?apikey=${API_KEY}&query=${text}`,
  );
  return results;
}
