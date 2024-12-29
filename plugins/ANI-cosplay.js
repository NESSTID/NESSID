import axios from 'axios';

export async function getAnimeLoli() {
  try {
    const { data } = await axios.get('https://api.neastooid.xyz/api/anime/cospkayer');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}