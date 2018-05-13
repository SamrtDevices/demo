import React from "react";
import ReactDOM from "react-dom";
import Beatle from 'beatle';

import setGlobalConfig from './app.config';
// import './index.less';

const app = new Beatle({
    name: 'app',
    models: require.context('./models', true, /\w+\.js$/),
    routes: require.context('./scenes', true, /index\.jsx$/)
});

setGlobalConfig(app);
app.run(document.getElementById('main'), window.CONFIG.prefix);

