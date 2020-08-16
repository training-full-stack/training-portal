import React, { Component } from 'react';
import Layout from '../components/common/layout';

class Body extends Component {
    constructor(props) {
        super(props);
    }    

    render() {
        return (
            <Layout>
                <div>
                    <h1>This is the second route of my application.....</h1>
                </div>
                <div>
                    <p>this is another child element</p>
                </div>
            </Layout>
        )
    }
}

export default Body;