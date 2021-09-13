import { getSuggestions } from 'src/services/wheater-service';
import { setSuggestions } from './mutations';

export async function searchPlaces(_, text) {
  const result = await getSuggestions(text);
  setSuggestions(result);
}
