import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { result } = this.props;
        return (
            <div>
                <p>{result}</p>
            </div>
        )
            ;
    }
}


export default Result;