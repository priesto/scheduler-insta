import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';

import enUS from 'antd/lib/locale-provider/en_US';

import App from './App';
import Routes from './Routes';

ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <Routes />
    </LocaleProvider>,
    document.getElementById('root')
);