/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron.configure({ name: 'Marvel Softplan', host: '192.168.1.15' })
  .use(reactotronRedux())
  .connect();

tron.clear();
console.tron = tron;

export default tron;
