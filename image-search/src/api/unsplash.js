import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9a1997ae17d6d322388a14eb234585912295f5a863959d2dfc1803cc2b98d1f2'
  },
});