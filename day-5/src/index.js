import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'font-awesome/css/font-awesome.css';

import Timeline from './components/Timeline/Timeline';


export const load = () => {
  console.log('[index.js] load');
  ReactDOM.render(<Timeline />, document.getElementById('demo1'));
};

try {
  console.log('[index.js] try load');
  setTimeout(load, 100);
} catch (e) {
  console.log('e ->', e);
}
