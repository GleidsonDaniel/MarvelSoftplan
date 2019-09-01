import md5 from 'md5';
import axios from 'axios';
import { publicKey, privateKey } from '../config';

const baseUrl = `${window.location.protocol || 'http'}//gateway.marvel.com`;

const getCharacters = (origOptions = {}, offset) => {
  const defaultOptions = { page: 1, count: 20, name: '', nameStartsWith: '' };
  const options = { ...defaultOptions, ...origOptions };
  const URI = '/v1/public/characters';
  const timeStamp = Math.round(+new Date() / 1000);
  const hash = md5(timeStamp + privateKey + publicKey);

  let params = `?apikey=${publicKey}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${offset}`;

  if (options.name) {
    params = `${params}&name=${options.name}`;
  }
  if (options.nameStartsWith) {
    params = `${params}&nameStartsWith=${options.nameStartsWith}`;
  }
  const url = `${baseUrl}${URI}${params}`;
  return axios.get(url);
};

const getSeries = serieUrl => {
  const timeStamp = Math.round(+new Date() / 1000);
  const hash = md5(timeStamp + privateKey + publicKey);
  const url = `${serieUrl}?apikey=${publicKey}&ts=${timeStamp}&hash=${hash}`;
  return axios.get(url);
};

export { getCharacters, getSeries };
