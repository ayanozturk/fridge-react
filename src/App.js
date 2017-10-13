import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

    constructor(){
        super(); // enables this
        this.state = {
            txt: 'this is state text',
            cat: 4
        };

    };

    update( e ) {
        this.setState({txt: e.target.value});
    };

    render(){
        let txt = this.props.txt;
        let cat = this.props.cat;

        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />
                <h1>{this.state.txt}</h1>
                <h1>{this.state.cat}</h1>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number
};

App.defaultProps = {
    txt: "this is default",
    cat: 5
};

export default App