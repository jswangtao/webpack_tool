import React, { Component } from 'react';
import moment from 'moment';

class Search extends Component {
    constructor() {
        // eslint-disable-next-line prefer-rest-params
        super(...arguments);
        this.state = {
            Text: null,
        };
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default,
            });
        });
    }


    render() {
        const { Text } = this.state;
        return (
            <div>
                {Text ? <Text /> : null}
                search text
                {moment().format('YYYY-MM-DD HH:mm:ss')}
                <button onClick={this.loadComponent.bind(this)} type="button">代码分割，异步加载jsonp</button>
            </div>
        );
    }
}

export default Search;
