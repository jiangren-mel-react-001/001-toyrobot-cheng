import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import { Game } from './game';

// ========================================

ReactDom.render(
    React.createElement(Game),
    document.getElementById('root')
);
