import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';
import Content from './data/content'

let mock = new mockAdapter(axios);

mock.onGet('/content').reply(200, Content);