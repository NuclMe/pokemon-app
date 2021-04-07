import React from 'react';

import Layout from './layout/index';
import Header from './components/Header'
// import axios from 'axios'
// import httpClient from './utils/httpClient'


const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

console.log('items', <Header items={menu}/>);
export default function App () {
  return (
    <div>
      {/* <Layout /> */}
      <Header items={menu}/>

    </div>
  )
}
