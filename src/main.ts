import './assets/main.css';

import { createApp } from 'vue';

import { IndexBar, IndexAnchor, Cell } from 'vant';

import 'vant/lib/index.css';

import App from './App.vue';

const app = createApp(App);

app.use(IndexBar);
app.use(IndexAnchor);
app.use(Cell);

app.mount('#app');
