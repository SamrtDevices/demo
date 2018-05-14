import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Beatle from 'beatle';
import './index.less';

class Root extends Component {
    static routeOptions = {
        path: '/home'
    };
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        this.props.getDemoList().then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>Hello Word</div>
        )
    }
}

export default Beatle.connect([{
    getDemoList: 'DemoModels.actions.getDemoList',
    demoList: 'DemoModels.store.demoList'
}], Root, true);