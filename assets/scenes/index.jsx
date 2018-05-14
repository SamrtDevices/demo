import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Beatle from 'beatle';
import './index.less';

export default class Root extends Component {
    static routeOptions = {
        path: '/home'
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello Word</div>
        )
    }
}